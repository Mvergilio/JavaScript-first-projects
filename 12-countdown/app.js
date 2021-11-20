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
const days = document.querySelector('.days');
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.mins');
const seconds = document.querySelector('.secs');

// setting the current Date and the noted Date
const currentDate = new Date().getTime();
const notedDate = new Date('December 25,  2021 8:00:00 GMT+00:00').getTime();
const dayElapse = notedDate - currentDate;
// days
const acurateDay = Math.ceil(dayElapse / (1000 * 3600 * 24));
console.log(acurateDay);
days.innerHTML = acurateDay;
// hours
const acurateHour = Math.ceil(dayElapse / (1000 * 3600));