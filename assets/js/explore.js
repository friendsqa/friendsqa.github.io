var play = false;
var exampleNum = 0;
var rtdNum = 0;
var startTime = [0, 9, 16, 36, 40, 51];

$(document).ready(function() {
  var i;

  /*** Init description field ***/
  showRealTimeDescription();
  /******************************/

  /*** Init question field ***/
  var exampleBoxes = $("div.explore").find("div.examples");
  exampleBoxes[exampleNum].style.display = 'block';

  for (i = 1; i < exampleBoxes.length; i++) {
    exampleBoxes[i].style.display = 'none';
  }
  /***************************/
});

function videoSync() {
  var video = $("video.viewer-" + exampleNum).get(0);
  var rtdBoxes = $("div.example-"+exampleNum).find("p.video-realtime-description");

  var currTime = video.currentTime;
  var next = rtdNum + 1;
  if (next >= rtdBoxes.length)
    rtdNum = rtdBoxes.length - 1;

  if (currTime >= startTime[rtdNum] && currTime < startTime[next]) {
    for (i = 0; i < rtdBoxes.length; i++) {
      rtdBoxes[i].style.display = 'none';
    }
    rtdBoxes[rtdNum].style.display = 'block';
  }

  if (currTime >= startTime[next]) {
    rtdNum += 1;
  }

  if (currTime >= video.duration) {
    rtdNum = 0;
  }
}

function showRealTimeDescription() {
  var rtdBoxes = $("div.example-"+exampleNum).find("p.video-realtime-description");

  rtdBoxes[rtdNum].style.display = 'block';

  for (i = 1; i < rtdBoxes.length; i++) {
    rtdBoxes[i].style.display = 'none';
  }
}

function showAnswer(e, p, a) {
  $(".example-" + e + " .question-" + p + " .question-txt .o-" + a).css("color", "#ed1004");
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

function playLocal(e, p, a) {
  /*** VIDEO CONTROLL ***/ 
  var video = $("video.viewer-" + e).get(0);

  if (video.paused) {
    video.play();
  }
  else {
    video.pause();
  }
  /**********************/
  showRealTimeDescription();
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

  showRealTimeDescription();
} 
