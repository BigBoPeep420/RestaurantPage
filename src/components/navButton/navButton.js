import "./navButton.css";

export default function (text = "Default", viewName = "home", navigate) {
  const d = document;
  const butCont = d.createElement("div");
  const but = d.createElement("button");
  but.type = "button";
  butCont.classList.add("navButton", viewName);
  butCont.append(but);
  const sp = d.createElement("span");
  sp.append((d.createElement("p").textContent = text));
  but.append(sp);

  but.addEventListener("click", (e) => {
    e.preventDefault();
    const selected = d.querySelectorAll(".navButton.selected");
    selected.forEach((v) => {
      v.classList.remove("selected");
    });
    butCont.classList.add("selected");
    navigate(viewName);
  });

  return butCont;
}
