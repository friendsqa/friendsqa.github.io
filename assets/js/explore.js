var handleStartTime = [0, 14, 28, 42, 56]
var handleEndTime = [13, 27, 41, 55, 69]
var realTimeStartTime = [0, 14, 28, 42, 56, 60];

var exampleNum = 0;
var questionNum = 0;
var rtdNum = 0;

$(document).ready(function() {
  var i;

  /*** Init examples field ***/
  showExample(0);
  /*** Init questions field ***/
  showQuestion(0, 0);
  /*** Init description field ***/
  showRealTimeDescription(0, -1);
  /*** Init marker field ***/
  showMarker(0, -1);
});

function selectScene(e) {
  var i;
  var sceneBoxes = $("div.checklist-field").find("span#header input");
  var shotBoxes = $("div.checklist-field").find("li input");

  for (i = 0; i < sceneBoxes.length; i++) {
    var checkbox = sceneBoxes[i];
    checkbox.checked = false;
  }
  sceneBoxes[e].checked = true;

  for (i = 0; i < shotBoxes.length; i++) {
    var checkbox = shotBoxes[i];
    checkbox.checked = false;
  }

  exampleNum = e;
  questionNum = 0;

  var videos = $("div.video-field").find("video");
  for (i = 0; i < videos.length; i++) {
    videos[i].pause();
  }
  var video = $("video.viewer-" + e);
  video.attr('controls', true);

  showExample(e);
  showRealTimeDescription(e, -1);
  showQuestion(e, 0);
  showMarker(e, -1);

  /*** Show dropdown ***/
  var checklists = $("div.checklist-field").find("ul");
  for (i = 0; i < checklists.length; i++) {
    checklists[i].style.display = 'none';
  }
  checklists[e].style.display = 'block';
}

function selectShot(e, q) {
  var i;
  var sceneBoxes = $("div.checklist-field").find("span#header input");
  var shotBoxes = $("div.checklist-field").find("li input");

  exampleNum = e;
  questionNum = q;

  for (i = 0; i < sceneBoxes.length; i++) {
    var checkbox = sceneBoxes[i];
    checkbox.checked = false;
  }
  sceneBoxes = $("div.scene-"+e).find("span#header input");
  sceneBoxes[0].checked = true;

  for (i = 0; i < shotBoxes.length; i++) {
    var checkbox = shotBoxes[i];
    checkbox.checked = false;
  }
  shotBoxes = $("div.scene-"+e).find("li input");
  shotBoxes[q - 1].checked = true;

  var videos = $("div.video-field").find("video");
  for (i = 0; i < videos.length; i++) {
    videos[i].pause();
  }
  var video = $("video.viewer-" + e);
  video.attr('controls', false);

  showExample(e);
  showRealTimeDescription(e, q - 1);
  showQuestion(e, q);
  showMarker(e, q - 1);
}

function showExample(num) {
  var exampleBoxes = $("div.explore").find("div.examples");
  var video = $("div.example-" + num).find("video").get(0);
  var markerBoxes = $("div.example-"+num).find("div.video-marker");

  for (i = 0; i < exampleBoxes.length; i++) {
    exampleBoxes[i].style.display = 'none';
  }
  exampleBoxes[num].style.display = 'block';
}

function showRealTimeDescription(e, num) {
  if (e == -1 || num == -1) {
    var rtdBoxes = $("div.example-"+e).find("p.video-realtime-description");
    for (i = 0; i < rtdBoxes.length; i++) {
      rtdBoxes[i].style.display = 'none';
    }
  }
  else {
    var rtdBoxes = $("div.example-"+e).find("p.video-realtime-description");
    for (i = 0; i < rtdBoxes.length; i++) {
      rtdBoxes[i].style.display = 'none';
    }
    rtdBoxes[num].style.display = 'block';
  }
}


function showQuestion(e, num) {
  var questionBoxes = $("div.example-"+e).find("div.question-field");
  for (i = 0; i < questionBoxes.length; i++) {
    questionBoxes[i].style.display = 'none';
  }
  questionBoxes[num].style.display = 'block';

}

function showMarker(e, num) {
  if (e == -1 || num == -1) {
    var markerBoxes = $("div.example-"+e).find("div.video-marker");
    for (i = 0; i < markerBoxes.length; i++) {
      markerBoxes[i].style.display = 'block';
    }
  }
  else {
    var markerBoxes = $("div.example-"+e).find("div.video-marker");
    for (i = 0; i < markerBoxes.length; i++) {
      markerBoxes[i].style.display = 'none';
    }
    markerBoxes[num].style.display = 'block';
  }
}

function playLocal() {
  var video = $("video.viewer-" + exampleNum);
  var playNum = questionNum - 1;

  if (playNum == -1) {
    video.attr('controls', true);
  }
  else {
    video.attr('controls', false);
    if (video.get(0).paused && handleStartTime[playNum] <= video.get(0).duration) {
      video.get(0).currentTime = handleStartTime[playNum];
      video.get(0).play();

      video.on("timeupdate", function() {
        endLocal(exampleNum, playNum) 
      });
    }
    else {
      video.get(0).pause();
    }
  }
}

function endLocal(e, q) {
  var video = $("video.viewer-" + e);
  if (video.get(0).currentTime >= handleEndTime[q]) {
    video.get(0).pause();
    video.off("timeupdate");
  }
}


function videoSync(e) {
  var video = $("video.viewer-" + e).get(0);
  var rtdBoxes = $("div.example-"+e).find("p.video-realtime-description");

  var currTime = video.currentTime;

  var slider = $("div.example-"+e).find("input.video-slider").get(0);
  slider.value = currTime;

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
