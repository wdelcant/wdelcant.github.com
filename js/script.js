	window.addEventListener("load", function () {
	  const loader = document.querySelector(".loader");
	  loader.className += " hidden";
	});

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
	  $("#holder").writeText("FRONTEND DEVELOPER JR | REACT");

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
	    responsiveWidth: 200,
	    navigation: true,
	    navigationTooltips: ["home", "aboutme", "skills", "portfolio", "contact", "connect"],
	    anchors: ["home", "aboutme", "skills", "portfolio", "contact", "connect"],
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
	      if (index == 3) {
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
	  $(document).on("click", "#aboutme", function () {
	    $.fn.fullpage.moveTo(2);
	  });

	  $(document).on("click", "#skills", function () {
	    $.fn.fullpage.moveTo(3);
	  });

	  $(document).on("click", "#projects", function () {
	    $.fn.fullpage.moveTo(4);
	  });

	  $(document).on("click", "#contact", function () {
	    $.fn.fullpage.moveTo(5);
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
	});