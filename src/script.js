let launchingDay = new Date().setDate(new Date().getDate() + 14);
const daysValue = document.querySelector("#days");
const hoursValue = document.querySelector("#hours");
const minutesValue = document.querySelector("#minutes");
const secondsValue = document.querySelector("#seconds");

function updateCountdown() {
  const now = new Date().getTime();

  const remainingTime = launchingDay - now;

  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));

  const hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);

  const minutes = Math.floor((remainingTime / (1000 * 60)) % 60);

  const seconds = Math.floor((remainingTime / 1000) % 60);

  showUpdatedValues(days, hours, minutes, seconds);
}
function showUpdatedValues(days, hours, minutes, seconds) {
  daysValue.innerHTML = `${String(days).padStart(2, "0")}`;
  hoursValue.innerHTML = `${String(hours).padStart(2, "0")}`;
  minutesValue.innerHTML = `${String(minutes).padStart(2, "0")}`;
  secondsValue.innerHTML = `${String(seconds).padStart(2, "0")}`;
}

setInterval(updateCountdown, 1000);
