var play = false;
var exampleNum = 0;

$(document).ready(function() {
  var exampleBoxes = $("div.explore").find("div.examples");
  
  /*** Init question field ***/
  exampleBoxes[exampleNum].style.display = 'block';

  var i;
  for (i = 1; i < exampleBoxes.length; i++) {
    exampleBoxes[i].style.display = 'none';
  }
  /***************************/

  /*** VIDEO CONTROLL ***/ 
  /*
  var video = document.getElementsByClassName("viewer")[0]; 
  var slider = document.getElementsByClassName("localized_slider")[0];
  var btn = document.getElementsByClassName("localized_button")[0];

  //slider.value = 20;

  btn.addEventListener("click", function() {
    if (video.paused) {
      play = true;
      if (video.currentTime < 20 || video.currentTime > 40 ) {
        video.currentTime = 20;
      }
      video.play();
      btn.innerHTML="❚ ❚ Pause";
    }
    else {
      play = false;
      video.pause();
      btn.innerHTML="► Play Localized";
    }
  });

  slider.addEventListener("change", function(){
    var time = video.duration * (slider.value / 100);

    video.currentTime = time;
  });

  video.addEventListener("timeupdate", function() {
    if (play && video.currentTime > 40) {
      video.pause();
      btn.innerHTML="► Play Localized";
      video.currentTime = 20;
    }

    if (video.currentTime > 40)
      play = false;

    var value = (100/video.duration) * video.currentTime;
    slider.value = value;
  });
  */
  /**********************/

});

function showAnswer(e, p, a) {
  var parent= document.querySelector(".question-"+p);
  var answer = parent.querySelector("#answer-"+a);
  answer.style.color = "#ed1004";
}

function prevQuestion() {
  var exampleBoxes = $("div.explore").find("div.examples");

  if (exampleNum != 0)
    exampleNum -= 1;
  if (exampleNum >= 0) {
    var i;
    for (i = 0; i < exampleBoxes.length; i++) {
      if (i == exampleNum) {
        exampleBoxes[i].style.display='block';
      }
      else {
        exampleBoxes[i].style.display='none';
      }
    }
  }
}

function nextQuestion() {
  var exampleBoxes = $("div.explore").find("div.examples");

  if (exampleNum != exampleBoxes.length - 1)
    exampleNum += 1;
  if (exampleNum < exampleBoxes.length) {
    var i;
    for (i = 0; i < exampleBoxes.length; i++) {
      if (i == exampleNum) {
        exampleBoxes[i].style.display='block';
      }
      else {
        exampleBoxes[i].style.display='none';
      }
    }
  }
} 
