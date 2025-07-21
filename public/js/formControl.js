// Contact form control with API integration
// Adaptado para Astro desde el código original funcional

// Constante para document
const d = document;

// Configuración de FormSubmit - Cambia esta URL por tu email
const FORMSUBMIT_URL = "https://formsubmit.co/ajax/wilsondelcanto.redes@gmail.com";

/**
 * Inicializa el control del formulario de contacto
 */
function initContactForm() {
    // Esperar a que SweetAlert2 esté disponible
    if (typeof Swal === 'undefined') {
        console.log('SweetAlert2 no está disponible, reintentando...');
        setTimeout(initContactForm, 100);
        return;
    }

    const $form = d.querySelector("#contact-form");
    
    if (!$form) {
        console.log("Formulario de contacto no encontrado");
        return;
    }

    console.log("Inicializando formulario de contacto...");
    
    const $inputs = d.querySelectorAll("#contact-form [required]");
    
    // Crear spans de error para campos requeridos
    $inputs.forEach((input) => {
        const $span = d.createElement("span");
        $span.id = `error-${input.name}`;
        $span.textContent = input.title || "Este campo es requerido";
        $span.classList.add("contact-form-error", "hidden", "text-red-400", "text-sm", "mt-1", "block");
        input.parentElement.appendChild($span);
    });

    // Validación en tiempo real
    d.addEventListener("keyup", (e) => {
        if (e.target.matches("#contact-form [required]")) {
            validateField(e.target);
        }
    });

    d.addEventListener("blur", (e) => {
        if (e.target.matches("#contact-form [required]")) {
            validateField(e.target);
        }
    }, true);

    // Manejo del envío del formulario
    $form.addEventListener("submit", handleFormSubmit);
    
    console.log("Formulario inicializado correctamente");
}

/**
 * Valida un campo individual
 * @param {HTMLElement} input - El campo a validar
 */
function validateField(input) {
    const pattern = input.pattern || input.dataset.pattern;
    const errorSpan = d.getElementById(`error-${input.name}`);
    
    if (!errorSpan) return;

    // Validación por patrón
    if (pattern && input.value !== "") {
        const regex = new RegExp(pattern);
        if (!regex.test(input.value)) {
            showFieldError(input, errorSpan);
            return false;
        } else {
            hideFieldError(input, errorSpan);
        }
    }

    // Validación para campos requeridos
    if (input.hasAttribute('required')) {
        if (input.value.trim() === "") {
            showFieldError(input, errorSpan);
            return false;
        } else {
            hideFieldError(input, errorSpan);
        }
    }

    // Validación para textarea con minlength
    if (input.tagName === 'TEXTAREA' && input.hasAttribute('minlength')) {
        const minLength = parseInt(input.getAttribute('minlength'));
        if (input.value.length < minLength) {
            showFieldError(input, errorSpan);
            return false;
        } else {
            hideFieldError(input, errorSpan);
        }
    }

    return true;
}

/**
 * Muestra error en un campo
 */
function showFieldError(input, errorSpan) {
    input.classList.add("border-red-500", "focus:border-red-500", "focus:ring-red-500/20");
    input.classList.remove("border-gray-600", "focus:border-purple-500", "focus:ring-purple-500/20", "focus:border-cyan-500", "focus:ring-cyan-500/20");
    errorSpan.classList.remove("hidden");
}

/**
 * Oculta error en un campo
 */
function hideFieldError(input, errorSpan) {
    input.classList.remove("border-red-500", "focus:border-red-500", "focus:ring-red-500/20");
    input.classList.add("border-gray-600");
    
    // Restaurar colores originales según el tipo de campo
    if (input.name === 'email' || input.name === 'message') {
        input.classList.add("focus:border-cyan-500", "focus:ring-cyan-500/20");
    } else {
        input.classList.add("focus:border-purple-500", "focus:ring-purple-500/20");
    }
    
    errorSpan.classList.add("hidden");
}

/**
 * Maneja el envío del formulario
 * @param {Event} e - Evento de submit
 */
async function handleFormSubmit(e) {
    e.preventDefault();
    
    console.log("Procesando envío del formulario...");
    
    const form = e.target;
    const $inputs = form.querySelectorAll('[required]');
    const submitButton = form.querySelector('button[type="submit"]');
    const buttonText = submitButton.querySelector('.button-text');
    const loadingIcon = submitButton.querySelector('.loading-icon');
    
    // Validar todos los campos
    let isValid = true;
    $inputs.forEach(input => {
        if (!validateField(input)) {
            isValid = false;
        }
    });

    if (!isValid) {
        showToast('error', 'Por favor, corrige los errores en el formulario');
        return;
    }

    // Mostrar estado de carga
    setLoadingState(submitButton, buttonText, loadingIcon, true);

    try {
        // Preparar datos del formulario
        const formData = new FormData(form);
        
        // Añadir campos ocultos para FormSubmit
        formData.append('_subject', 'Nuevo mensaje desde el portfolio de Wilson');
        formData.append('_captcha', 'false');
        formData.append('_template', 'table');
        formData.append('_next', 'false'); // No redirigir

        console.log("Enviando datos a FormSubmit...");

        // Enviar a FormSubmit
        const response = await fetch(FORMSUBMIT_URL, {
            method: "POST",
            body: formData
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        console.log("Respuesta de FormSubmit:", result);
        
        // Éxito
        showToast('success', '¡Mensaje enviado correctamente! Te responderé pronto 🚀');
        form.reset();
        
        // Limpiar errores visuales
        $inputs.forEach(input => {
            const errorSpan = d.getElementById(`error-${input.name}`);
            if (errorSpan) {
                hideFieldError(input, errorSpan);
            }
        });

    } catch (error) {
        console.error('Error al enviar formulario:', error);
        showToast('error', 'Hubo un problema al enviar el mensaje. Por favor, intenta nuevamente o contáctame directamente por WhatsApp 📱');
    } finally {
        // Restaurar estado del botón
        setLoadingState(submitButton, buttonText, loadingIcon, false);
    }
}

/**
 * Controla el estado de carga del botón
 */
function setLoadingState(button, textElement, iconElement, isLoading) {
    if (isLoading) {
        button.disabled = true;
        textElement.textContent = 'Enviando...';
        iconElement.classList.remove('hidden');
        button.classList.add('opacity-75');
    } else {
        button.disabled = false;
        textElement.textContent = 'Enviar Mensaje';
        iconElement.classList.add('hidden');
        button.classList.remove('opacity-75');
    }
}

/**
 * Muestra notificaciones tipo toast usando SweetAlert2
 * @param {string} type - 'success' o 'error'
 * @param {string} message - Mensaje a mostrar
 */
function showToast(type, message) {
    // Verificar si SweetAlert2 está disponible
    if (typeof Swal === 'undefined') {
        // Fallback a alert nativo si SweetAlert2 no está disponible
        alert(message);
        console.warn('SweetAlert2 no disponible, usando alert nativo');
        return;
    }

    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
        }
    });

    Toast.fire({
        icon: type,
        title: message,
        background: type === 'success' ? '#10B981' : '#EF4444',
        color: '#FFFFFF'
    });
}

// Inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initContactForm);
} else {
    initContactForm();
}
