const mainVideo = document.getElementById('main-video');
const videoBoxes = document.querySelectorAll('.video-box');
const minimizeButton = document.getElementById('minimize-button');

videoBoxes.forEach(box => {
  box.addEventListener('click', () => {
    const videoSrc = box.dataset.videoSrc; // Assuming you have a "data-video-src" attribute on each box
    mainVideo.src = videoSrc;
    mainVideo.play();
  });
});

minimizeButton.addEventListener('click', () => {
  // You would add code here to toggle the display or visibility of the main video container and 
  // the minimized preview box. This would require adjusting the CSS to handle the minimized state.
});