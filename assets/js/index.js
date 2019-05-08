$(document).ready(function(){
  var i;
  var elements = $("div.update").find("p.news");
  var l = elements.length;
  if (l >= 5) {
    for (i = 5; i < l; i++) {
      $(elements[i]).css("display", "none");
    }
  }
});

function showMore() {
  var i;
  var elements = $("div.update").find("p.news");
  var l = elements.length;
  var showing = 0;

  for (i = 0; i < l; i++) {
    if ($(elements[i]).css("display") == "block") {
      showing+= 1;
    }
  }

  if (showing >= l) {
    $("span#noMoreContext").css("display", "block");
  }
  else {
    var show = showing + 5;
    var last = show;
    if (show > l) last = l;
    for (i = showing; i < last; i++) {
      $(elements[i]).css("display", "block");
    }
  }
}
