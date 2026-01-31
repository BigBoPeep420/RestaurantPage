import "./credits.css";
import iconClose from "../../assets/images/close-box.svg";

const d = document;
const dc = d.createElement.bind(d);

const credits = [
  {
    images: "Main Background, Pork Belly Dish",
    src: "https://www.vecteezy.com/free-photos/cooking",
    id: "vecteezy",
  },
  {
    images: "Tomato Slice",
    src: "https://pngtree.com/freepng/red-tomato-slice-showing-seeds-and-flesh-cross-section-view_22650364.html",
    id: "pngtree",
  },
];

export default function () {
  let credPopover = d.querySelector(".creditsPopover");
  if (!credPopover) {
    credPopover = creditsPopover();
    d.body.appendChild(credPopover);
  }

  const outer = dc("p");
  outer.className = "creditsLink";
  outer.textContent = "[Image Credits]";

  outer.addEventListener("click", (e) => {
    credPopover.showPopover();
  });

  return outer;
}

function creditsPopover() {
  const outer = dc("div");
  outer.className = "creditsPopover";
  outer.popover = "auto";

  const inner = dc("div");
  inner.className = "inner";
  inner.innerHTML =
    `<section class="title"><p>Image Credits</p><p>Credits for images used in this site. Thank you to ` +
    `the creators.</p></section>`;

  const credsSec = dc("section");
  credsSec.className = "credits";
  credits.forEach((cred) => {
    const div = dc("div");
    div.className = "credit";

    const link = dc("a");
    link.id = cred.id;
    link.href = cred.src;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.text = cred.id == "vecteezy" ? "www.vecteezy.com" : "www.pngtree.com";

    const label = dc("label");
    label.htmlFor = cred.id;
    label.textContent = `${cred.images}: `;

    div.append(label, link);
    credsSec.append(div);
  });
  inner.appendChild(credsSec);

  const closeBtn = dc("button");
  closeBtn.type = "button";
  closeBtn.innerHTML = iconClose;

  closeBtn.addEventListener("click", (e) => {
    document.querySelector(".creditsPopover").hidePopover();
  });

  inner.appendChild(closeBtn);
  outer.appendChild(inner);

  return outer;
}
