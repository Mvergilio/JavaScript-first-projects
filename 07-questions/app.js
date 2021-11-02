//using selectors inside the element
// traversing the dom
const questionSection = document.querySelector('.question');
const listSection = questionSection.children;

// select the button
const minusPlusBtn = document.querySelector('.question-btn');
const btnSpan = minusPlusBtn.children;
minusPlusBtn.addEventListener("click", function() {
    if (listSection[1].classList.contains('show-text')) {
        listSection[1].classList.remove('show-text');
    } else {
        listSection[1].classList.add('show-text');
    }
    if (listSection[1].classList.contains('question-text')) {
        listSection[1].classList.remove('question-text');

    } else {
        listSection[1].classList.add('question-text');
    }
})