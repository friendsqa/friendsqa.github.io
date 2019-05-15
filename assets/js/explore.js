var exampleNum = 0;
var rtdNum = 0;
var realTimeStartTime = [0, 9, 16, 36, 40, 51];
var handleStartTime = [5, 10, 15, 20, 25]
var handleEndTime = [8, 13, 18, 23, 28]

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

  if (currTime >= realTimeStartTime[rtdNum] && currTime < realTimeStartTime[next]) {
    for (i = 0; i < rtdBoxes.length; i++) {
      rtdBoxes[i].style.display = 'none';
    }
    rtdBoxes[rtdNum].style.display = 'block';
  }

  if (currTime >= realTimeStartTime[next]) {
    rtdNum += 1;
  }

  if (currTime >= video.duration) {
    rtdNum = 0;
  }
}

function playLocal(e, q) {
  /*** VIDEO CONTROLL ***/ 
  var video = $("video.viewer-" + e);

  if (video.get(0).paused && handleStartTime[q] <= video.get(0).duration) {
    video.get(0).currentTime = handleStartTime[q];
    video.get(0).play();

    video.on("timeupdate", function() {
      endLocal(e, q) 
    });
  }
  else {
    video.get(0).pause();
  }

  /**********************/
  showRealTimeDescription();
}

function endLocal(e, q) {
  var video = $("video.viewer-" + e);
  if (video.get(0).currentTime >= handleEndTime[q]) {
    video.get(0).pause();
    video.off("timeupdate");
  }
}

function showRealTimeDescription() {
  var rtdBoxes = $("div.example-"+exampleNum).find("p.video-realtime-description");

  rtdBoxes[rtdNum].style.display = 'block';

  for (i = 1; i < rtdBoxes.length; i++) {
    rtdBoxes[i].style.display = 'none';
  }
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

  showRealTimeDescription();
} 
