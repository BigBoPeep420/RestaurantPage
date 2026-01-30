import "./hoursOfOp.css";

export default function () {
  const d = document;
  const hours = d.createElement("div");
  hours.className = "hoursOfOperation";
  hours.innerHTML =
    `<p class="title">When we're Open:</p><p class="hours">` +
    `<span class="day">Sun - Thu:</span><span class="time"> 10am - 9pm</span> | ` +
    `<span class="day">Fri - Sat:</span><span class="time"> 10am - 12am</span></p>`;
  return hours;
}
