const SLIDES = document.querySelectorAll(".slide");
const PREV_BTN = document.querySelector(".prevBtn");
const NEXT_BTN = document.querySelector(".nextBtn");
SLIDES.forEach((slide, index) => {
	slide.style.left = `${index * 100}%`;
});
let counter = 0;
NEXT_BTN.addEventListener("click", () => {
	counter++;
	showingSlide();
});
PREV_BTN.addEventListener("click", () => {
	counter--;
	showingSlide();
});

function showingSlide() {
	if (counter === SLIDES.length) {
		counter = 0;
	} else if (counter < 0) {
		counter = SLIDES.length - 1;
	}
	SLIDES.forEach((slide) => {
		slide.style.transform = `translateX(-${counter * 100}%)`;
	});
}
