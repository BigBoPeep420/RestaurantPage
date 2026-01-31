import "./styles/main.css";
import "./styles/layout.css";
import { default as siteTitle } from "./components/siteTitle/siteTitle.js";
import { default as navButton } from "./components/navButton/navButton.js";

const d = document;
const elems = { content: d.getElementById("content") };

d.getElementById("siteTitle").append(siteTitle("Sue's Sous Vide"));
const nav = d.querySelector("nav");
nav.append(
  navButton("Home", "home", navigate),
  navButton("About", "about", navigate),
  navButton("Menu", "menu", navigate),
  navButton("Contact", "contact", navigate),
);

d.querySelector(".navButton.home button").dispatchEvent(new Event("click"));

async function navigate(viewName) {
  if (viewName == "#") return;
  try {
    const module = await import(`./views/${viewName}.js`);
    if (module) {
      elems.content.replaceChildren();
      elems.content.appendChild(module.default(navigate));
    }
  } catch (error) {
    console.log(error);
    elems.content.replaceChildren();
    const home = await import("./views/home.js");
    elems.content.appendChild(home.default(navigate));
  }
  elems.content.scrollTo(0, 0);
}
