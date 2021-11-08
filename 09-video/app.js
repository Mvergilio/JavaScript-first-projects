// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.
const button = document.querySelector('.switch-btn');
const videoElem = document.querySelector('.video-container');

button.addEventListener('click', () => {
    button.classList.toggle('slide');
    if (videoElem.paused) {
        videoElem.play();
    } else {
        videoElem.pause();
    }
})
window.addEventListener('load', () => {
    let preloader = document.querySelector('#preloader').classList;
    preloader.add("hide-preloader")
})