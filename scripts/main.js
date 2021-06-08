$(document).ready(function () {
  let height = $(window).height();
  $(".sidenav").sidenav({ edge: "right" });
  $(".slider").slider({ height: height, indicators: false, duration: 500, interval: 3000 });
  $(".materialboxed").materialbox();
  $(".modal").modal();
  $(".tooltipped").tooltip({ margin: 2, transitionMovement: 2 });

  $(".nav-link").hover(
    function () {
      $(this).removeClass("underline_out").addClass("underline_in");
    },
    function () {
      $(this).removeClass("underline_in").addClass("underline_out");
    }
  );

  $("textarea#textarea1").characterCounter();

  runAnimationObserver();
});

function runAnimationObserver() {
  let options = {
    root: document.querySelector(".main-content"),
    rootMargin: "0%",
    threshold: 0.1,
  };

  let targets = document.querySelectorAll(".animate");

  let callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        let elem = entry.target;
        let animation = elem.dataset.animate;
        elem.classList.add(animation);
      }
    });
  };

  let observer = new IntersectionObserver(callback, options);

  targets.forEach((target) => {
    observer.observe(target);
  });
}
