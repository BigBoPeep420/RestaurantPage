import "./navButton.css";

export default function (text = "Default", viewName = "home", navigate) {
  const d = document;
  const but = d.createElement("button");
  but.type = "button";
  const sp = d.createElement("span");
  sp.append((d.createElement("p").textContent = text));
  but.append(sp);

  but.addEventListener("click", (e) => {
    e.preventDefault();
    navigate(viewName);
  });

  return but;
}
