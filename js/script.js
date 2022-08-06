$(document).ready(function () {
  // typing animation
  (function ($) {
    $.fn.writeText = function (content) {
      let contentArray = content.split(""),
        current = 0,
        elem = this;
      setInterval(function () {
        if (current < contentArray.length) {
          elem.text(elem.text() + contentArray[current++]);
        }
      }, 80);
    };
  })(jQuery);

  // input text for typing animation
  $("#holder").writeText("FRONT-END DEVELOPER | REACT");

  // initialize wow.js
  new WOW().init();

  // Push the body and the nav over by 285px over
  let main = function () {
    $(".fa-bars").click(function () {
      $(".nav-screen").animate({
          right: "0px"
        },
        200
      );

      $("body").animate({
          right: "285px"
        },
        200
      );
    });

    // Then push them back */
    $(".fa-times").click(function () {
      $(".nav-screen").animate({
          right: "-285px"
        },
        200
      );

      $("body").animate({
          right: "0px"
        },
        200
      );
    });

    $(".nav-links a").click(function () {
      $(".nav-screen").animate({
          right: "-285px"
        },
        500
      );

      $("body").animate({
          right: "0px"
        },
        500
      );
    });
  };

  $(document).ready(main);

  // initiate full page scroll

  $("#fullpage").fullpage({
    scrollBar: true,
    responsiveWidth: 400,
    navigation: true,
    navigationTooltips: ["home", "about", "portfolio", "contact", "connect"],
    anchors: ["home", "about", "portfolio", "contact", "connect"],
    menu: "#myMenu",
    fitToSection: false,

    afterLoad: function (anchorLink, index) {
      let loadedSection = $(this);

      //using index
      if (index == 1) {
        /* add opacity to arrow */
        $(".fa-chevron-down").each(function () {
          $(this).css("opacity", "1");
        });
        $(".header-links a").each(function () {
          $(this).css("color", "white");
        });
        $(".header-links").css("background-color", "transparent");
      } else if (index != 1) {
        $(".header-links a").each(function () {
          $(this).css("color", "black");
        });
        $(".header-links").css("background-color", "white");
      }

      //using index
      if (index == 2) {
        /* animate skill bars */
        $(".skillbar").each(function () {
          $(this)
            .find(".skillbar-bar")
            .animate({
                width: $(this).attr("data-percent")
              },
              2500
            );
        });
      }
    }
  });

  // move section down one
  $(document).on("click", "#moveDown", function () {
    $.fn.fullpage.moveSectionDown();
  });

  // fullpage.js link navigation
  $(document).on("click", "#skills", function () {
    $.fn.fullpage.moveTo(2);
  });

  $(document).on("click", "#projects", function () {
    $.fn.fullpage.moveTo(3);
  });

  $(document).on("click", "#contact", function () {
    $.fn.fullpage.moveTo(4);
  });

  // smooth scrolling
  $(function () {
    $("a[href*=#]:not([href=#])").click(function () {
      if (
        location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        let target = $(this.hash);
        target = target.length ?
          target :
          $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html,body").animate({
              scrollTop: target.offset().top
            },
            700
          );
          return false;
        }
      }
    });
  });

  // Valida formulario y realiza petición API para envío de correo

  // creamos una constante para document y asi solo usar d
  const d = document;

  // Realiza una validacion de formulario
  function contactForm() {
    const $form = d.querySelector(".contact-form");
    $inputs = d.querySelectorAll(".contact-form [required]");

    $inputs.forEach((input) => {
      const $span = d.createElement("span");
      $span.id = input.name;
      $span.textContent = input.title;
      $span.classList.add("contact-form-error", "none");
      input.insertAdjacentElement("afterend", $span);
    });
    // Valida la entrada del input al sacar el mosue de esta
    d.addEventListener("keyup", (e) => {
      if (e.target.matches(".contact-form [required]")) {
        let $input = e.target,
          pattern = $input.pattern || $input.dataset.pattern;
        // agrega un cartel de error segun lo que pongamos en tittle de los inputs
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

    // Valida el boton enviar y previene que la pagina se refresque
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
      //Aqui el usuario debe cambiar el parametro por su correo y realizar la activacion de la API
      fetch("https://formsubmit.co/ajax/5e36ccd515272d990de7549f4ddd264a", {
          method: "POST",
          body: new FormData(e.target)
        })
        .then((respuesta) =>
          respuesta.ok ? respuesta.json() : Promise.reject(res)
        )
        // Si la respuesta es correcta toma 3 segundos en realizar el envio
        .then((json) => {
          console.log(json);
          // agrega un loader debajo del boton enviar
          $loader.classList.add("none");
          // remueve el loader una vez realizada la peticion
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
        // Si la respuesta de la API es erronea arroja un error con sweetaler
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

});