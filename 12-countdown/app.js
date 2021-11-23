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
let futureDate = new Date(2021, 11, 01, 11, 01, 0);
const weekday = weekdays[futureDate.getDay()];
const date = futureDate.getDate();
const month = months[futureDate.getMonth()]
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
// console.log(futureDate)
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

    // hours
    let hourRemider = t / ONE_DAY;
    let hours = hourRemider.toString().slice(2);
    let numHours = Number(hours);
    let newHours = Math.floor(numHours / ONE_HOUR)
        // minuts
    let minRemider = hours % ONE_HOUR;
    console.log(hours, newHours, days, ONE_HOUR);

}
getMilisecToDay();