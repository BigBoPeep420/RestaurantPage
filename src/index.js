import "./styles/main.css";
import "./styles/layout.css";
import { default as siteTitle } from "./components/siteTitle/siteTitle.js";
import { default as navButton } from "./components/navButton/navButton.js";
import { default as credits } from "./components/credits/credits.js";

const d = document;
const elems = {
  content: d.getElementById("content"),
  footer: d.querySelector("footer"),
};

d.getElementById("siteTitle").append(siteTitle("Sue's Sous Vide"));
const nav = d.querySelector("nav");
nav.append(
  navButton("Home", "home", navigate),
  navButton("About", "about", navigate),
  navButton("Menu", "menu", navigate),
  navButton("Contact", "contact", navigate),
);

const copy = d.createElement("p");
copy.innerHTML = "<p>Copyright <span>©</span> 2026 Lane Robey</p>";
elems.footer.append(copy, credits());

d.querySelector(".navButton.home button").dispatchEvent(new Event("click"));

async function navigate(viewName) {
  if (viewName == "#") return;
  elems.content.classList.remove(
    "homeView",
    "aboutView",
    "menuView",
    "contactView",
  );
  try {
    const module = await import(`./views/${viewName}.js`);
    if (module) {
      elems.content.replaceChildren();
      elems.content.appendChild(module.default(navigate));
      elems.content.classList.add(`${viewName}View`);
    }
  } catch (error) {
    console.log(error);
    elems.content.replaceChildren();
    const home = await import("./views/home.js");
    elems.content.appendChild(home.default(navigate));
  }
  elems.content.scrollTo(0, 0);
}
