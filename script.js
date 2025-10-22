const hourHand = document.getElementById('hour');
const minuteHand = document.getElementById('minute');
const secondHand = document.getElementById('second');

const digitalTime = document.getElementById('digitalTime');
const hrValue = document.getElementById('hrValue');
const minValue = document.getElementById('minValue');
const secValue = document.getElementById('secValue');

function updateClock() {
  const now = new Date();
  const hr = now.getHours();
  const min = now.getMinutes();
  const sec = now.getSeconds();

  const hrDeg = (30 * (hr % 12)) + (min / 2);
  const minDeg = (6 * min) + (sec / 10);
  const secDeg = 6 * sec;

  // hands rotate from clock center
  hourHand.style.transform = `translate(-50%, -100%) rotate(${hrDeg}deg)`;
  minuteHand.style.transform = `translate(-50%, -100%) rotate(${minDeg}deg)`;
  secondHand.style.transform = `translate(-50%, -100%) rotate(${secDeg}deg)`;

  // digital
  const ampm = hr >= 12 ? 'PM' : 'AM';
  const displayHr = hr % 12 || 12;
  const displayMin = String(min).padStart(2, '0');
  const displaySec = String(sec).padStart(2, '0');

  digitalTime.textContent = `${displayHr}:${displayMin}:${displaySec} ${ampm}`;
  hrValue.textContent = `HR: ${String(hr).padStart(2, '0')}`;
  minValue.textContent = `MIN: ${displayMin}`;
  secValue.textContent = `SEC: ${displaySec}`;
}

setInterval(updateClock, 1000);
updateClock();
