/*
var audio = document.getElementById("kit");
audio.volume = 0.5;
var isPlaying = false;

const timelineContainer = document.getElementById('song-timeline');
const seekSlider = document.getElementById('seek-slider');
const durationContainer = document.getElementById('duration');
const currentTimeContainer = document.getElementById('current-time');
let animationFrame = null;


// Toggle play / pause button and audio
function togglePlayPause(pathClass) {
    var paths = document.querySelectorAll('.' + pathClass);
    for (var i = 0; i < paths.length; i++) {
        paths[i].classList.toggle('active');
    }
    if (isPlaying) {
        audio.pause();
        cancelAnimationFrame(animationFrame);
    }
    else {
        audio.play();
        requestAnimationFrame(whilePlaying);
    }
}

audio.onplaying = function () {
    isPlaying = true;
}

audio.onpause = function () {
    isPlaying = false;
}

// Set different color for before the slider circle

const showRangeProgress = (rangeInput) => {
    timelineContainer.style.setProperty('--seek-before-width', rangeInput.value / rangeInput.max * 100 + '%');
}

seekSlider.addEventListener('input', (e) => {
    showRangeProgress(e.target);
});

// Audio player functionality

const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${minutes}:${returnedSeconds}`;
}

const displayDuration = () => {
    durationContainer.textContent = calculateTime(audio.duration);
}

const setSliderMax = () => {
    seekSlider.max = Math.floor(audio.duration);
}

const displayBufferedAmount = () => {
    const bufferedAmount = Math.floor(audio.buffered.end(audio.buffered.length - 1));
    timelineContainer.style.setProperty('--buffered-width', `${(bufferedAmount / seekSlider.max) * 100}%`);
}

const whilePlaying = () => {
    seekSlider.value = Math.floor(audio.currentTime);
    currentTimeContainer.textContent = calculateTime(seekSlider.value);
    timelineContainer.style.setProperty('--seek-before-width', `${seekSlider.value / seekSlider.max * 100}%`);
    animationFrame = requestAnimationFrame(whilePlaying);
}

if (audio.readyState > 0) {
    displayDuration();
    setSliderMax();
    displayBufferedAmount();
} else {
    audio.addEventListener('loadedmetadata', () => {
        displayDuration();
        setSliderMax();
        displayBufferedAmount();
    });
}

audio.addEventListener('progress', displayBufferedAmount);

seekSlider.addEventListener('input', () => {
    currentTimeContainer.textContent = calculateTime(seekSlider.value);
    if (!audio.paused) {
        cancelAnimationFrame(animationFrame);
    }
});

// Toggle active / inactive color of buttons

function toggleColor(buttonId) {
    document.getElementById(buttonId).classList.toggle('active');
}
*/


/*simpler play button*/
function togglePlay() {
    var kit = document.getElementById("kit");
    return kit.paused ? kit.play() : kit.pause();
  };
  
  $(document).ready(function() {
    var btn = $(".simple-button");
    btn.click(function() {
      togglePlay();
      btn.toggleClass("paused");
      return false;
    });
  });

  /*svg play button*/
  function togglePlay() {
    var kit = document.getElementById("kit");
    return kit.paused ? kit.play() : kit.pause();
  };
  
  var flip = true,
     pause = "M11,10 L18,13.74 18,22.28 11,26 M18,13.74 L26,18 26,18 18,22.28",
     play = "M11,10 L17,10 17,26 11,26 M20,10 L26,10 26,26 20,26",
     $animation = $('#animation');
  
  $(".ytp-play-button").on('click', function() {
     flip = !flip;
     togglePlay();
     $animation.attr({
        "from": flip ? pause : play,
        "to": flip ? play : pause
     }).get(0).beginElement();
  });

  /*another one play btn*/
  const kit = document.getElementById("kit");
  const box = document.querySelector('.box');
  
  function togglePlay() {
    return kit.paused ? kit.play() : kit.pause();
  };
  
  box.addEventListener('click', (e)=>{
    e.target.classList.toggle('pause');
    togglePlay();
  })

  kit.onplaying = function() {
      box.classList.add('pause');
  };

  /*pretty play button*/
  (function($) {
  
    'use strict';
    
     $('.c-pp').on('click', function() {
       $(this).toggleClass('is-play');
     });
    
  })(jQuery);

  /*test*/