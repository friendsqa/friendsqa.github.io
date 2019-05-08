function moveTo(n) {
  var target = $("." + n.toLowerCase());
  $('html, body').animate({
    scrollTop: $(target).offset().top
  }, 800, 'easeInOutSine');
}
