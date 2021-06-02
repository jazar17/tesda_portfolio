$(document).ready(function () {
  let height = $(window).height();
  $(".sidenav").sidenav({ edge: "right" });
  $(".slider").slider({ height: height, indicators: false });
  $(".materialboxed").materialbox();

  $(".nav-link").hover(
    function () {
      $(this).removeClass("underline_out").addClass("underline_in");
    },
    function () {
      $(this).removeClass("underline_in").addClass("underline_out");
    }
  );

  $('textarea#textarea1').characterCounter();

  let url = $(location)
    .attr("href")
    .split("/")
    .filter((part) => part);
  $(`a[href="/${url[url.length - 1]}"]`).addClass("active");
});
