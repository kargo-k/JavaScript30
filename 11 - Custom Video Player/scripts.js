// Get elements
const player = document.querySelector('.player')
const video = player.querySelector('.viewer')
const progress = player.querySelector('.progress')
const progressBar = player.querySelector('.progress__filled')
const toggle = player.querySelector('.toggle')
const skipButtons = player.querySelectorAll('[data-skip]')
const ranges = player.querySelectorAll('.player__slider')

// Build out functions
function togglePlay() {
  // if (video.paused) { // paused is the property of the video
  //   video.play()
  // } else {
  //   video.pause()
  // }
  video[video.paused ? 'play' : 'pause']();
}

// Hook up event listeners
video.addEventListener('click', togglePlay)