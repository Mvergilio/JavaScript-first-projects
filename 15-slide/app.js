const SLIDES = document.querySelectorAll('.slide');
const PREV_BTN = document.querySelector('.prevBtn');
const NEXT_BTN = document.querySelector('.nextBtn');
SLIDES.forEach((slide, index) => {
    slide.style.left = `${index * 100}`
})
let counter = 0;
NEXT_BTN.addEventListener('click', () => {
    counter++;
    showingSlide();
})
PREV_BTN.addEventListener('click', () => {
    counter--;
    showingSlide();
})

function showingSlide() {
    SLIDES.forEach((slide) => {
        slide.style.transform = `traslateX(-${counter * 100}%)`
    })
}