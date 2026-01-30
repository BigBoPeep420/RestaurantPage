import "./siteTitle.css";

export default function (title = "Default") {
  const d = document;
  const t = d.createElement("div");
  t.classList.add("siteTitle");
  const i = d.createElement("div");
  i.classList.add("inner");
  const tx = d.createElement("p");
  tx.textContent = title;
  i.append(tx);
  t.append(i);
  return t;
}
