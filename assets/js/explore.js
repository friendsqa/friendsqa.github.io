var play = false;
var questionNum = 0;
var questionBoxes = document.getElementsByClassName("questions");

window.onload = function() {
  /*** VIDEO CONTROLL ***/ 
  var video = document.getElementsByClassName("viewer")[0]; 
  var slider = document.getElementsByClassName("localized_slider")[0];
  var btn = document.getElementsByClassName("localized_button")[0];

  slider.value = 20;

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
  /**********************/

  /*** Init question field ***/
  questionBoxes[questionNum].style.display = 'block';

  var i;
  for (i = 1; i < questionBoxes.length; i++) {
    questionBoxes[i].style.display = 'none';
  }
  /***************************/
}

function showAnswer(p, a) {
  var parent= document.querySelector(".question-"+p);
  var answer = parent.querySelector("#answer-"+a);
  answer.style.color = "#ed1004";
}

function prevQuestion() {
  if (questionNum != 0)
    questionNum -= 1;
  if (questionNum >= 0) {
    var i;
    for (i = 0; i < questionBoxes.length; i++) {
      if (i == questionNum) {
        questionBoxes[i].style.display='block';
      }
      else {
        questionBoxes[i].style.display='none';
      }
    }
  }
}

function nextQuestion() {
  if (questionNum != questionBoxes.length - 1)
    questionNum += 1;
  if (questionNum < questionBoxes.length) {
    var i;
    for (i = 0; i < questionBoxes.length; i++) {
      if (i == questionNum) {
        questionBoxes[i].style.display='block';
      }
      else {
        questionBoxes[i].style.display='none';
      }
    }
  }
} 
