function moveTo(n) {
  var target = document.getElementsByClassName(n.toLowerCase());
  var offset = target[0].offsetTop - 10;

  window.scroll(0, offset);
}
