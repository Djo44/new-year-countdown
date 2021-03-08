const daysLeft = document.querySelector('#days');
const hoursLeft = document.querySelector('#hours');
const minutesLeft = document.querySelector('#mins');
const secondsLeft = document.querySelector('#seconds');

function countDown() {
  const newYears = '1 jan 2022';

  const currentDate = new Date();
  const newYearsDate = new Date(newYears);

  const totalSeconds = Math.floor((newYearsDate - currentDate) / 1000);
  const days = Math.floor(totalSeconds / 24 / 3600);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;
  console.log(`${days} ${hours} ${minutes} ${seconds}`);

  daysLeft.innerHTML = days;
  hoursLeft.innerHTML = hours;
  minutesLeft.innerHTML = minutes;
  secondsLeft.innerHTML = seconds;
}

setInterval(countDown, 1000);
