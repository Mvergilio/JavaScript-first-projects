// set the counter
let counter = 0;
// get span an button 
const value = document.querySelector("#value");
const btns = document.querySelectorAll('.btn');


// set the event listenner
btns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {

        let styles = e.currentTarget.classList;
        if (styles.contains('decrease')) {
            counter--;
        } else if (styles.contains('increase')) {
            counter++;
        } else {
            counter = 0;
        }
        if (counter > 0) {
            value.style.color = 'green';
        } else if (counter < 0) {
            value.style.color = 'red';
        } else {
            value.style.color = 'black';
        }
        value.textContent = counter;
    })

})