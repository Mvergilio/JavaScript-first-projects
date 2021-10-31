const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const body = document.querySelector('body');
const span = document.querySelector('span');
const btn = document.getElementById('btn');
console.log(body, span, btn);
btn.addEventListener('click', function() {
    let i = 0,
        randomIndex = 0,
        temporaryNum = "",
        newColor = '#';
    while (i < 6) {
        randomIndex = Math.floor(Math.random() * hex.length);
        temporaryNum = hex[randomIndex].toString();
        newColor += temporaryNum;
        i++;
    }
    body.style.backgroundColor = newColor;
    span.innerText = newColor;
    console.log(newColor);
})