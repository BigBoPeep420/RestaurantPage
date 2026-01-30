import "./dailySpecials.css";

export default function () {
  const specials = {
    Monday: "Venison Saddle",
    Tuesday: "Pacific Drift Octopus",
    Wednesday: "Sous-Steak Cauliflower",
    Thursday: "Sous-Fried Chicken Thighs",
    Friday: "Herb Garden Loin",
    Saturday: "Butter-Poached Lobster",
    Sunday: "145° Egg Carbonara",
  };
  const d = document;
  const outer = d.createElement("div");
  outer.classList.add("dailySpecials");

  const titleCont = d.createElement("div");
  titleCont.classList.add("titleCont");
  const title = d.createElement("p");
  title.classList.add("title");
  title.textContent = "Daily Specials";
  const discount = d.createElement("p");
  discount.classList.add("discount");
  discount.textContent = "Specials 40% off on that day";
  titleCont.append(title, discount);

  outer.append(titleCont);

  const cards = Object.keys(specials).map((dayName) => {
    const card = d.createElement("div");
    card.className = "special";
    card.innerHTML = `<p class="day">${dayName}</p><p class="dish">${specials[dayName]}</p>`;
    outer.appendChild(card);
    return card;
  });

  return outer;
}
