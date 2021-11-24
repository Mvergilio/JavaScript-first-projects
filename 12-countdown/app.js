const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

// get the days/hours/minutes/seconds tags
const giveAway = document.querySelector('.giveaway');
const item = document.querySelectorAll('.deadline-format h4');
const deadLine = document.querySelector('.deadline');

// setting the current Date and the future Date
let futureDate = new Date(2021, 11, 01, 08, 01, 0);
const weekday = weekdays[futureDate.getDay()];
const date = futureDate.getDate();
const month = months[futureDate.getMonth()]
const year = futureDate.getFullYear();
let hours = futureDate.getHours();
let minutes = futureDate.getMinutes();
// console.log(futureDate)
if (minutes < 10) {
    minutes = "0" + String(minutes)
}
if (hours < 10) {
    hours = "0" + String(hours)
}
giveAway.textContent = `giveaway end on ${weekday}, ${date} ${month} ${year}, ${hours}:${minutes}am`;

// Setting the CountDown logic
const FUTURE_TIME = new Date(futureDate).getTime();

//get time in milisecs
function getMilisecToDay() {
    const TODAY = new Date().getTime();
    let t = FUTURE_TIME - TODAY;
    const ONE_DAY = 24 * 60 * 60 * 1000;
    const ONE_HOUR = 60 * 60 * 1000;
    const ONE_MIN = 60 * 1000;

    //remider

    // days
    let days = Math.floor(t / ONE_DAY);
    item[0].textContent = days;
    // hours
    let hourRemider = t / ONE_HOUR;
    let preciseHour = (days * 24)
    let hours = Math.floor(hourRemider - preciseHour);
    item[1].textContent = hours;

    // minuts
    let minRemider = (t / ONE_MIN) - preciseHour * 60;
    let preciseMin = hours * 60;
    let minutes = Math.floor(minRemider - preciseMin);
    item[2].textContent = minutes;

    // seconds
    let preciseSec = (minutes * ONE_MIN) + (days * ONE_DAY) + (hours * ONE_HOUR);
    let seconds = Math.floor((t - preciseSec) / 1000);
    item[3].textContent = seconds;

}
setInterval(() => {
    getMilisecToDay();
}, 300)