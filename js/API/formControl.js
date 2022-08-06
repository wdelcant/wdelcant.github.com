// Valida formulario y realiza petición API para envío de correo

// creamos una constante para document y asi solo usar d
const d = document;

// Realiza una validación de formulario
function contactForm() {
    const $form = d.querySelector(".form-reset");
    $inputs = d.querySelectorAll(".form-reset [required]");

    $inputs.forEach((input) => {
        const $span = d.createElement("span");
        $span.id = input.name;
        $span.textContent = input.title;
        $span.classList.add("contact-form-error", "none");
        input.insertAdjacentElement("afterend", $span);
    });
    // Valida la entrada del input al sacar el mouse de esta
    d.addEventListener("keyup", (e) => {
        if (e.target.matches(".form-reset [required]")) {
            let $input = e.target,
                pattern = $input.pattern || $input.dataset.pattern;
            // agrega un cartel de error según lo que pongamos en tittle de los inputs
            if (pattern && $input.value !== "") {
                let regex = new RegExp(pattern);
                return !regex.exec($input.value) ?
                    d.getElementById($input.name).classList.add("is-active") :
                    d.getElementById($input.name).classList.remove("is-active");
            }

            if (!pattern) {
                return $input.value !== "" ?
                    d.getElementById($input.name).classList.remove("is-active") :
                    d.getElementById($input.name).classList.add("is-active");
            }
        }
    });

    // Valida el botón enviar y previene que la pagina se refresque
    d.addEventListener("submit", (e) => {
        e.preventDefault();
        const $loader = d.querySelector(".contact-form-loader"),
            $response = d.querySelector(".contact-form-response");

        $loader.classList.remove("none");

        // API envía correo electrónico a traves de una petición AJAX
        /*
         *  Para activar con tu correo, debes ingresar tu Email donde están los números de mi key
         *  Asi puedes probar la API funcional y ver el resultado en tu correo.
         * Debes ingresar a https://formsubmit.co/ para mas informacion.
         */
        //Aqui el usuario debe cambiar el parámetro por su correo y realizar la activación de la API
        fetch("https://formsubmit.co/ajax/5e36ccd515272d990de7549f4ddd264a", {
                method: "POST",
                body: new FormData(e.target)
            })
            .then((respuesta) =>
                respuesta.ok ? respuesta.json() : Promise.reject(res)
            )
            // Si la respuesta es correcta toma 3 segundos en realizar el envío
            .then((json) => {
                console.log(json);
                // agrega un loader debajo del botón enviar
                $loader.classList.add("none");
                // remueve el loader una vez realizada la petición
                $response.classList.remove("none");
                // agrega un mensaje de la API
                $response.innerHTML = `<p>${json.message}</p>`;
                // Si es ok, envia una alerta con datos enviados
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener("mouseenter", Swal.stopTimer);
                        toast.addEventListener("mouseleave", Swal.resumeTimer);
                    }
                });

                Toast.fire({
                    icon: "success",
                    title: "Los datos han sido enviados"
                });
                // Si es enviado el formulario este se limpia
                $form.reset();
            })
            // Si la respuesta de la API es errónea arroja un error con sweetalert
            .catch((error) => {
                console.log(error);
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener("mouseenter", Swal.stopTimer);
                        toast.addEventListener("mouseleave", Swal.resumeTimer);
                    }
                });

                Toast.fire({
                    icon: "error",
                    title: "Hemos tenido un problema, intenta de nuevo"
                });
                $loader.classList.add("none");
                let message =
                    error.statusText || "Ocurrió un error al enviar, intenta nuevamente";
                $response.innerHTML = `<p>Error ${error.status}:${message}</p>`;
            })
            .finally(() =>
                setTimeout(() => {
                    $response.classList.add("none");
                    $response.innerHTML = "";
                }, 3000)
            );
    });
}

// Se agrega un evento si el contenido es cargado se realiza el llamado.
d.addEventListener("DOMContentLoaded", contactForm);