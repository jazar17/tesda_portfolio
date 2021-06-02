$(document).ready(function () {
  let height = $(window).height();
  $(".sidenav").sidenav({ edge: "right" });
  $(".slider").slider({ height: height, indicators: false });
  $('.materialboxed').materialbox();
});
