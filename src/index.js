import "./styles/main.css";
import "./styles/layout.css";
import { createSiteTitle } from "./components/siteTitle/siteTitle.js";
import * as navButton from "./components/navButton/navButton.js";

const d = document;
const elems = { content: d.getElementById("content") };

d.getElementById("siteTitle").append(createSiteTitle("Sue's Sous Vide"));
const nav = d.querySelector("nav");
nav.append(
  navButton.default("Home", "home", navigate),
  navButton.default("About", "about", navigate),
  navButton.default("Menu", "menu", navigate),
  navButton.default("Contact", "contact", navigate),
);

async function navigate(viewName) {
  try {
    const mod = await import(`./views/${viewName}.js`);
    elems.content.replaceChildren();
    elems.content.appendChild(mod.default());
  } catch (error) {
    console.log(error);
    const mod = await import("./views/home.js");
    elems.content.replaceChildren();
    elems.content.appendChild(mod.default());
  }
}
