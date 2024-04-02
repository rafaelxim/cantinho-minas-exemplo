import $ from "jquery";

$(document).ready(function () {
  $(document).on("click", ".scroll-top", function (e) {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      100
    );
    return false;
  });

  $(document).on("scroll", onScroll);

  function onScroll(event) {
    var currentScrollPos = $(document).scrollTop();
    $("#top-nav ul li div").each(function () {
      var currLink = $(this);
      var refElement = $($(currLink.attr("value")));
      if (
        refElement.position()?.top <= currentScrollPos + 1 &&
        refElement.position()?.top + refElement.height() > currentScrollPos + 1
      ) {
        $("#top-nav ul li div").removeClass("active");
        currLink.addClass("active");
      } else {
        currLink.removeClass("active");
      }
    });
  }

  $(document).on("click", function (event) {
    if ($(event.target).closest(".foholic-menubar").length) {
      $(".foholic-fixed-sidebar").toggleClass("open-menu");
      $(".foholic-menubar").toggleClass("menu-open");
    } else if (!$(event.target).closest(".foholic-menubar").length) {
      $(".foholic-fixed-sidebar").removeClass("open-menu");
      $(".foholic-menubar").removeClass("menu-open");
    }
  });

  /* ===================================
    scroll bottom to top button
    ====================================== */

  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 100) {
      $(".scroll-top").fadeIn();
    } else {
      $(".scroll-top").fadeOut();
    }
  });

  /* ===================================
    Counter on scroll section
    ====================================== */
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect()?.top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal);

  /* ===================================
    page scroll Counter Section
    ====================================== */


  function startCount() {
    $(".fast-counter").each(function () {
      if (isElementInViewport($(this)) && !$(this).data("isCounting")) {
        count($(this));
        $(this).data("isCounting", true);
      }
    });
  }

  // Function to check if an element is in the viewport
  function isElementInViewport(el) {
    var rect = el[0].getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= $(window).height() &&
      rect.right <= $(window).width()
    );
  }

  // Function to animate the counter
  function count($this) {
    var current = 0;
    var end = parseInt($this.data("number"), 10);
    var interval = setInterval(function () {
      $this.text(++current);
      if (current === end) {
        clearInterval(interval);
      }
    }, 50); // Adjust the speed of the counter here
  }

  // Call startCount() when the window is scrolled
  $(window).on("scroll", function () {
    startCount();
  });

  // Call startCount() initially to check if elements are in view
  startCount();

  $(".ic-plus").on("click", function (e) {
    e.preventDefault();
  });

  /* ===================================
    page scroll team Counter Section
    ====================================== */
  $("#staticBackdropteam .team_blog").on("show.bs.modal", function () {
    setTimeout(function () {
      $(function () {
        function isScrolledIntoView($elem) {
          var docViewTop = $(window).scrollTop();
          var docViewBottom = docViewTop + $(window).height();
          var elemTop = $elem.offset()?.top;
          var elemBottom = elemTop + $elem.height();
          return elemBottom <= docViewBottom && elemTop >= docViewTop;
        }

        function count($this) {
          var current = parseInt($this.html(), 10);
          if (
            isScrolledIntoView($this) &&
            !$this.data("isCounting") &&
            current < $this.data("count")
          ) {
            $this.html(++current);
            $this.data("isCounting", true);
            setTimeout(function () {
              $this.data("isCounting", false);
              count($this);
            }, 20);
          }
        }

        $(".num-counter").each(function () {
          $(this).data("count", parseInt($(this).html(), 10));
          $(this).html("0");
          $(this).data("isCounting", false);
        });

        function startCount() {
          $(".num-counter").each(function () {
            count($(this));
          });
        }

        $(window).scroll(function () {
          startCount();
        });

        startCount();
      });
    }, 500);
  });

  /* ============================================
    Sticky Header
    ============================================ */

  $(window).scroll(function () {
    var sticky = $(".mobile_header"),
      scroll = $(window).scrollTop();

    if (scroll >= 40) {
      sticky.addClass("sticky");
    } else {
      sticky.removeClass("sticky");
    }
  });
});
