

var playerVideo = document.getElementById("bVideo");
var el = document.getElementById("playButton");

var replay = document.getElementById("replayButton");


replay.style.visibility='hidden';
pauseButton.style.visibility='hidden';


function playPause() {
  replay.style.visibility='hidden';
  if (playerVideo.paused) 
  {
    playerVideo.play();
    el.className = "";
  } 
  else 
  {
    playerVideo.pause();
    el.className = "playButton";
  }
}

function playPauseControls() {
  replay.style.visibility='hidden';
  if (!playerVideo.paused) {
    el.className = "";

  } else {
     el.className = "playButton";
  }
}

function hideHoverPauseButton(){
   replay.style.visibility='hidden';
    if (!playerVideo.paused) {
      el.className = "";
    } else {
      el.className = "playButton";
    }
}

function showHoverPauseButton(){
   replay.style.visibility='hidden';
    if (!playerVideo.paused) {
      el.className = "pauseButton";
    } else {
      el.className = "playButton";
    }
}

function videoEnd() {
  replay.style.visibility='visible';
  el.className = "";
  playerVideo.setAttribute("controls","controls");
}

function showControls(){
  playerVideo.setAttribute("controls","controls");
}
function hideControls(){
  playerVideo.removeAttribute("controls","controls");
}


playerVideo.addEventListener("click", playPause, false);
playerVideo.addEventListener("play", playPauseControls, false);
playerVideo.addEventListener("pause", playPauseControls, false);
playerVideo.addEventListener("mouseover", hideControls, false);
playerVideo.addEventListener("mouseout", hideControls, false);
playerVideo.addEventListener("mouseover", showHoverPauseButton, true);
playerVideo.addEventListener("mouseout", hideHoverPauseButton, true);
el.addEventListener("mouseover", showHoverPauseButton, true);
el.addEventListener("mouseover", hideControls, false);
replay.addEventListener("mouseover", hideControls, false);
playerVideo.addEventListener("ended", videoEnd, false);  
