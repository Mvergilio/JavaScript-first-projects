const questions = document.querySelectorAll('.question');
// console.log(questions);
questions.forEach(function(question) {
    const btn = question.querySelector('.question-btn');
    // console.log(btn);
    btn.addEventListener('click', function() {
        questions.forEach(function(item) {
            if (item !== question) {
                item.classList.remove('show-text')
            }
            question.classList.toggle('show-text');
        })
    })
})

















// const questions = document.querySelectorAll('.question');
// console.log(questions)

// questions.forEach(function(question) {

//     const btn = question.querySelector('.question-btn');

//     btn.addEventListener('click', function() {
//         questions.forEach(function(item) {

//             if (item !== question) {
//                 item.classList.remove('show-text')
//             }
//         })
//         question.classList.toggle('show-text');

//     })
// })


// btns.forEach(function(btn) {
//     btn.addEventListener('click', function(e) {
//         const question = e.currentTarget.parentElement.parentElement;
//         question.classList.toggle('show-text')
//         console.log(question);
//     })
// })