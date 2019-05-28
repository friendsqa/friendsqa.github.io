var handleStartTime = []
var handleEndTime = []
var realTimeStartTime = [];

var exampleNum = 0;
var questionNum = 0;

var rtdNum = 0;

$(document).ready(function() {
  var i;

  $("video.viewer-0").on("loadedmetadata", function(){
    /*** Init examples field ***/
    //showExample(0);
    /*** Init questions field ***/
    //showQuestion(0, 0);
    /*** Init description field ***/
    //showRealTimeDescription(0, -1);
    /*** Init marker field ***/
    //showMarker(0, -1);
    selectScene(0);
  });
});

function selectScene(e) {
  var i;
  var sceneBoxes = $("div.checklist-field").find("span#header input");
  var shotBoxes = $("div.checklist-field").find("li input");

  exampleNum = e;
  questionNum = 0;

  /*** Set checkboxes ***/
  for (i = 0; i < sceneBoxes.length; i++) {
    var checkbox = sceneBoxes[i];
    checkbox.checked = false;
  }
  sceneBoxes[e].checked = true;

  for (i = 0; i < shotBoxes.length; i++) {
    var checkbox = shotBoxes[i];
    checkbox.checked = false;
  }

  /*** Set video ***/
  var videos = $("div.video-field").find("video");
  for (i = 0; i < videos.length; i++) {
    videos[i].pause();
    videos[i].currentTime = 0;
  }
  var video = $("video.viewer-" + e);
  //video.attr('controls', true);

  /*** Set fields ***/
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
  var playNum = q - 1;
  for (i = 0; i < videos.length; i++) {
    videos[i].pause();
  }

  var video = $("video.viewer-" + e);
  //video.attr('controls', false);
  video.get(0).currentTime = handleStartTime[playNum];

  showExample(e);
  showRealTimeDescription(e, q - 1);
  showQuestion(e, q);
  showMarker(e, q - 1);
}

function showExample(num) {
  var exampleBoxes = $("div.explore").find("div.examples");
  var markerBoxes = $("div.example-"+num).find("div.video-marker");

  exampleNum = num;

  for (i = 0; i < exampleBoxes.length; i++) {
    exampleBoxes[i].style.display = 'none';
  }
  exampleBoxes[num].style.display = 'inline-block';
}

function showRealTimeDescription(e, num) {
  if (e == -1 || num == -1) {
    var rtdBoxes = $("div.example-"+e).find("p.video-realtime-description");
    for (i = 0; i < rtdBoxes.length; i++) {
      rtdBoxes[i].style.display = 'none';
    }
    rtdBoxes[0].style.display = 'block';
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
    var video = $("video.viewer-"+e).get(0);
    var markerBoxes = $("div.example-"+e).find("div.video-marker");
    var handleLefts = $("div.example-"+e).find("div.marker-handle-left");
    var handleRights = $("div.example-"+e).find("div.marker-handle-right");

    var handleTimes = $("div.example-"+e).find("input.video-slider")[0].dataset.shots.split(", ");
    handleStartTime = [];
    handleEndTime = [];
    realTimeStartTime = [];

    handleStartTime.push(parseInt(handleTimes[0]));
    realTimeStartTime.push(parseInt(handleTimes[0]));
    /*** Set handle time ***/
    for (i = 1; i < handleTimes.length; i++) {
      handleStartTime.push(parseInt(handleTimes[i]));
      handleEndTime.push(handleStartTime[i] - 1);
      realTimeStartTime.push(handleStartTime[i]);
    }
    handleEndTime.push(video.duration);
    realTimeStartTime.push(video.duration);

    for (i = 0; i < handleStartTime.length; i++) {
      var m = Math.floor(handleStartTime[i]/60);
      var s = Math.floor(handleStartTime[i]%60);
      var time = (m < 10? "0" + m : m) + ":" + (s < 10? "0" + s : s);
      $("div.example-"+ e + " div.handle-left-"+i).empty().html(time);
    }

    for (i = 0; i < handleEndTime.length; i++) {
      var m = Math.floor(handleEndTime[i]/60);
      var s = Math.floor(handleEndTime[i]%60);
      var time = (m < 10? "0" + m : m) + ":" + (s < 10? "0" + s : s);
      $("div.example-"+ e + " div.handle-right-"+i).empty().html(time);
    }

    for (i = 0; i < markerBoxes.length; i++) {
      markerBoxes[i].style.display = 'block';
      markerBoxes[i].style.left = (handleStartTime[i]/video.duration)*100 + "%";
      markerBoxes[i].style.width = ((handleEndTime[i] - handleStartTime[i] + 1)/video.duration)*100 + "%";
    }

    for (i = 1; i < handleLefts.length; i++) {
      handleLefts[i].style.display = 'none';
    }
    handleLefts[0].style.display = 'block';
    for (i = 0; i < handleRights.length - 1; i++) {
      handleRights[i].style.display = 'none';
    }
    handleRights[handleRights.length - 1].style.display = 'block';

  }
  else {
    var markerBoxes = $("div.example-"+e).find("div.video-marker");
    var handleLefts = $("div.example-"+e).find("div.marker-handle-left");
    var handleRights = $("div.example-"+e).find("div.marker-handle-right");

    for (i = 0; i < markerBoxes.length; i++) {
      markerBoxes[i].style.display = 'none';
    }
    markerBoxes[num].style.display = 'block';

    for (i = 0; i < handleLefts.length; i++) {
      handleLefts[i].style.display = 'none';
    }
    for (i = 0; i < handleLefts.length; i++) {
      handleRights[i].style.display = 'none';
    }
    handleLefts[num].style.display = 'block';
    handleRights[num].style.display = 'block';
  }
}

function playLocal() {
  var video = $("video.viewer-" + exampleNum);
  var playNum = questionNum - 1;

  if (playNum == -1) {
    //video.attr('controls', true);
  }
  else {
    //video.attr('controls', false);

    if (video.get(0).paused && handleStartTime[playNum] <= video.get(0).duration) {
      video.get(0).play();

      video.on("timeupdate", function() {
        endLocal(exampleNum, playNum) 
      }); }
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
  slider.max = Math.floor(video.duration);
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
