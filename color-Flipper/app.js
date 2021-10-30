const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const button = document.getElementById('btn');
const body = document.querySelector("body");
const span = document.querySelector("span");
button.addEventListener('click', function() {
    const changeColor = Math.floor(Math.random() * colors.length);
    body.style.backgroundColor = colors[changeColor];
    span.innerText = colors[changeColor];
});