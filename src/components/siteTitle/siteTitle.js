import "./siteTitle.css";

export function createSiteTitle(title = "Default") {
  const d = document;
  const t = d.createElement("div");
  t.classList.add("title");
  const i = d.createElement("div");
  i.classList.add("inner");
  const tx = d.createElement("p");
  tx.textContent = title;
  i.append(tx);
  t.append(i);
  return t;
}
