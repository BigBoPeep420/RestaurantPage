import "../styles/views/contact.css";
import { default as location } from "../components/location/location.js";
import { default as hoursOfOp } from "../components/hoursOfOp/hoursOfOp.js";

const d = document;
const dc = d.createElement.bind(d);

const emailContacts = [
  {
    name: "Sue Robey",
    position: "Founder",
    email: "sue.r@suesvide.fake",
  },
  {
    name: "Bo Robey",
    position: "Co-Manager",
    email: "bo.r@suesvide.fake",
  },
  {
    name: "JJ Robey",
    position: "Co-Manager",
    email: "jj.r@suesvide.fake",
  },
];

export default function () {
  const outer = dc("div");
  outer.className = "contact";

  const commentSec = dc("div");
  commentSec.className = "commentSection";
  commentSec.innerHTML = `<p class="title">Leave us a comment!</p>`;
  const form = dc("form");
  form.innerHTML =
    `<input type="text" required minlength="3" placeholder="Your Name"><input type="text" required ` +
    `minlength="7" placeholder="Your Email/Phone #"><textarea required minlength="2" ` +
    `placeholder="Your Comment" rows="5"></textarea>`;
  const btn = dc("button");
  btn.type = "button";
  btn.textContent = "Send!";
  form.appendChild(btn);

  btn.addEventListener("click", (e) => {
    form.reset();
  });

  commentSec.appendChild(form);

  const phoneSec = dc("div");
  phoneSec.className = "phoneSection";
  phoneSec.innerHTML =
    `<p class="title">Call Us!</p><p class="note">Leave a message after hours and we'll get back to you!` +
    `</p><p class="phone">573-867-5309</p>`;

  const contactSec = dc("div");
  contactSec.className = "contactSection";
  emailContacts.forEach((v) => {
    const card = dc("div");
    card.className = "emailContact";

    const name = dc("p");
    name.className = "name";
    name.textContent = v.name;

    const position = dc("p");
    position.className = "position";
    position.textContent = v.position;

    const email = dc("p");
    email.className = "email";
    const l = dc("a");
    l.href = "#";
    l.text = v.email;
    email.appendChild(l);

    card.append(name, position, email);
    contactSec.appendChild(card);
  });

  outer.append(commentSec, contactSec, phoneSec, hoursOfOp(), location());
  return outer;
}
