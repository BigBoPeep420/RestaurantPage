import { default as dailySpecials } from "../components/dailySpecials/dailySpecials.js";
import { default as hoursOfOp } from "../components/hoursOfOp/hoursOfOp.js";
import "../styles/home.css";
import citrusSear from "../assets/images/citrusCloverSear.webp";
import { default as bookReservation } from "../components/bookReservation/bookReservation.js";

export default function (navigate) {
  const d = document;
  const outer = d.createElement("div");
  outer.className = "home";

  const hero = d.createElement("figure");
  hero.className = "hero";
  const cap = d.createElement("figcaption");
  cap.textContent = "Citrus-Clover Sear";
  const frame = d.createElement("div");
  frame.className = "frame";
  const img = d.createElement("img");
  img.src = citrusSear;
  img.alt = "Citrus Clover Pork Belly Sear";
  frame.append(img);
  hero.append(frame, cap);

  outer.append(hero, hoursOfOp(), dailySpecials(), bookReservation(navigate));
  return outer;
}
