$(document).ready(function(){
  var pathname = window.location.pathname;
  if (pathname == "/") {
    $("nav.navbar").css("background-color", "transparent");
    // Modify dropdown 
    $(".dropdown-content").css("background-color", "white");
    $(".dropdown-content a").css("color", "black");
  } 
});

$(window).scroll(function(e) { 
  var winLoc = $(window).scrollTop();
  var pathname = window.location.pathname;

  if (winLoc > 0) {
    $("nav.navbar").css("background-color", "black");
    // Modify dropdown 
    $(".dropdown-content").css("background-color", "black");
    $(".dropdown-content a").css("color", "white");
  }
  else if (winLoc == 0){
    if (pathname == "/") {
      $("nav.navbar").css("background-color", "transparent");
      // Modify dropdown 
      $(".dropdown-content").css("background-color", "white");
      $(".dropdown-content a").css("color", "black");
    } 
  }
});
