/*Experiencing Issues with Pause Function. Will be worked out soon*/
/*Idea: add listener for hover while playing show pause*/

var bunnyVideo = document.getElementById("bVideo");
var el = document.getElementById("playButton");
//var ey = document.getElementById("pauseButton");
var replay = document.getElementById("replayButton");

//Hide replay button at start
replay.style.visibility='hidden';
pauseButton.style.visibility='hidden';


function playPause() {
  replay.style.visibility='hidden';
  if (bunnyVideo.paused) 
  {
    bunnyVideo.play();
    el.className = "";
  } 
  else 
  {
    bunnyVideo.pause();
    el.className = "playButton";
  }
}

function playPauseControls() {
  replay.style.visibility='hidden';
  if (!bunnyVideo.paused) {
    el.className = "";

  } else {
     el.className = "playButton";
  }
}

function hideHoverPauseButton(){
   replay.style.visibility='hidden';
    if (!bunnyVideo.paused) {
      el.className = "";
    } else {
      el.className = "playButton";
    }
}

function showHoverPauseButton(){
   replay.style.visibility='hidden';
    if (!bunnyVideo.paused) {
      el.className = "pauseButton";
    } else {
      el.className = "playButton";
    }
}

function videoEnd() {
  replay.style.visibility='visible';
  el.className = "";
  bunnyVideo.setAttribute("controls","controls");
}

function showControls(){
  bunnyVideo.setAttribute("controls","controls");
}
function hideControls(){
  bunnyVideo.removeAttribute("controls","controls");
}

/*Google Analytics Tracker Function*/
/*Assuming you've already set up the Google Analytics script function on your webpage. This just activates a trigger event when the video plays.*/
/*function bunnyVideoView() {
     ga('send', 'event', { 
          'eventCategory': 'Bunny Video',
          'eventAction': 'play',
          'eventLabel': 'Bunny Video View'
     });
}*/

/* You can play with this to hide controls or not */
bunnyVideo.addEventListener("click", playPause, false);
bunnyVideo.addEventListener("play", playPauseControls, false);
bunnyVideo.addEventListener("pause", playPauseControls, false);
bunnyVideo.addEventListener("mouseover", hideControls, false);
bunnyVideo.addEventListener("mouseout", hideControls, false);
bunnyVideo.addEventListener("mouseover", showHoverPauseButton, true);
bunnyVideo.addEventListener("mouseout", hideHoverPauseButton, true);
el.addEventListener("mouseover", showHoverPauseButton, true);
el.addEventListener("mouseover", hideControls, false);
replay.addEventListener("mouseover", hideControls, false);
bunnyVideo.addEventListener("ended", videoEnd, false);  
/*Google Analytics Tracker*/
/*bunnyVideo.addEventListener("play", bunnyVideoView, false);*/