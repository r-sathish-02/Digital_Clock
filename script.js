const clock = document.getElementById("clock");
const ampm = document.getElementById("ampm");
const dateEl = document.getElementById("date");
const formatSwitch = document.getElementById("formatSwitch");

function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const is24Hour = formatSwitch.checked;

  let session = "";
  if (!is24Hour) {
    session = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
  }

  const hrs = hours.toString().padStart(2, "0");

  const colon = now.getSeconds() % 2 === 0 ? ":" : '<span class="blink">:</span>';

  clock.innerHTML = `${hrs}${colon}${minutes}${colon}${seconds}`;
  ampm.textContent = is24Hour ? "" : session;

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const fullDate = `${dayNames[now.getDay()]}, ${monthNames[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`;
  dateEl.textContent = fullDate;
}

setInterval(updateClock, 1000);
updateClock();
