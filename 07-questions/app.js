const btns = document.querySelectorAll('.question-btn');

btns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        const question = e.currentTarget.parentElement.parentElement;
        question.classList.toggle('show-text')
        console.log(question);
    })
})


// const questions = document.querySelectorAll('.question');
// questions.forEach(function(elem) {
//     const btns = elem.querySelector('.question-btn')
//     btns.addEventListener('click', function(e) {
//         console.log(e);

//     })
// })