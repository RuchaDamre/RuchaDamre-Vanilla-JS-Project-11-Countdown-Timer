const months = ['January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

let desp = document.getElementById("desp");
let timeContainer = document.querySelector(".time-container");
const items = document.querySelectorAll('h5');

// nowDate is todays date
let nowDate = new Date();

// FutureDate is Thursday, 4 April 2030, 12:47
const futureDate = new Date(2030, 3, 4, 12, 47, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
const date = futureDate.getDate();

// getDay() returns days in number from 0 to 6
const day = weekdays[futureDate.getDay()];
const month = months[futureDate.getMonth()];

desp.textContent = `Giveaway Ends ${day}, ${date} ${month} ${year}, ${hours}:${minutes}`;

// getTime() gives milliseconds
let FutureTime = futureDate.getTime();

let countdown = setInterval(() => {

  let nowTime = new Date().getTime();

  //distance gives total time left in milliseconds
  var distance = FutureTime - nowTime;

  // Time calculations for days, hours, minutes and seconds
  let daysLeft = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hoursLeft = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutesLeft = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let secondsLeft = Math.floor((distance % (1000 * 60)) / 1000);

  const values = [daysLeft, hoursLeft, minutesLeft, secondsLeft];
  function format(item) {
    if (item < 10) {
      item = `0${item}`;
    }
    return item;
  }

  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });


  if (distance < 0) {
    clearInterval(countdown);
    timeContainer.innerHTML = `<h4 class="expired">SORRY, this giveaway has expired!</h4>`;
  }

}, 1000);


