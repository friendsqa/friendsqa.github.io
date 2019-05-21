var realTimeStartTime = [0, 9, 16, 36, 40, 51];
var handleStartTime = [5, 10, 15, 20, 25]
var handleEndTime = [8, 13, 18, 23, 28]

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

  showExample(e);
  showRealTimeDescription(e, -1);
  showQuestion(e, 0);
  showMarker(e, -1);
}

function selectShot(e, q) {
  var i;
  var sceneBoxes = $("div.checklist-field").find("span#header input");
  var shotBoxes = $("div.checklist-field").find("li input");

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

  showExample(e);
  showRealTimeDescription(e, q - 1);
  showQuestion(e, q);
  showMarker(e, q - 1);
}

function showExample(num) {
  var exampleBoxes = $("div.explore").find("div.examples");
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


//function videoSync() {
  //var video = $("video.viewer-" + exampleNum).get(0);
  //var rtdBoxes = $("div.example-"+exampleNum).find("p.video-realtime-description");

  //var currTime = video.currentTime;
  //var next = rtdNum + 1;
  //if (next >= rtdBoxes.length)
    //rtdNum = rtdBoxes.length - 1;

  //if (currTime >= realTimeStartTime[rtdNum] && currTime < realTimeStartTime[next]) {
    //for (i = 0; i < rtdBoxes.length; i++) {
      //rtdBoxes[i].style.display = 'none';
    //}
    //rtdBoxes[rtdNum].style.display = 'block';
  //}

  //if (currTime >= realTimeStartTime[next]) {
    //rtdNum += 1;
  //}

  //if (currTime >= video.duration) {
    //rtdNum = 0;
  //}
//}

//function playLocal(e, q) {
  //[>** VIDEO CONTROLL **<] 
  //var video = $("video.viewer-" + e);

  //if (video.get(0).paused && handleStartTime[q] <= video.get(0).duration) {
    //video.get(0).currentTime = handleStartTime[q];
    //video.get(0).play();

    //video.on("timeupdate", function() {
      //endLocal(e, q) 
    //});
  //}
  //else {
    //video.get(0).pause();
  //}

  //[>********************<]
  //showRealTimeDescription();
//}

//function endLocal(e, q) {
  //var video = $("video.viewer-" + e);
  //if (video.get(0).currentTime >= handleEndTime[q]) {
    //video.get(0).pause();
    //video.off("timeupdate");
  //}
//}

//function showRealTimeDescription() {
  //var rtdBoxes = $("div.example-"+exampleNum).find("p.video-realtime-description");

  //rtdBoxes[rtdNum].style.display = 'block';

  //for (i = 1; i < rtdBoxes.length; i++) {
    //rtdBoxes[i].style.display = 'none';
  //}
//}

//function prevQuestion() {
  //var exampleBoxes = $("div.explore").find("div.examples");

  //if (exampleNum != 0)
    //exampleNum -= 1;
  //if (exampleNum >= 0) {
    //var i;
    //for (i = 0; i < exampleBoxes.length; i++) {
      //if (i == exampleNum) {
        //exampleBoxes[i].style.display='block';
      //}
      //else {
        //exampleBoxes[i].style.display='none';
      //}
    //}
  //}
//}

//function nextQuestion() {
  //var exampleBoxes = $("div.explore").find("div.examples");

  //if (exampleNum != exampleBoxes.length - 1)
    //exampleNum += 1;
  //if (exampleNum < exampleBoxes.length) {
    //var i;
    //for (i = 0; i < exampleBoxes.length; i++) {
      //if (i == exampleNum) {
        //exampleBoxes[i].style.display='block';
      //}
      //else {
        //exampleBoxes[i].style.display='none';
      //}
    //}
  //}

  //showRealTimeDescription();
//} 
