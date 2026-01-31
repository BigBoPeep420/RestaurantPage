import "./bookReservation.css";
import iconBookEdit from "../../assets/images/book-edit.svg";

export default function (navigate) {
  const d = document;

  const div = d.createElement("div");
  div.className = "bookReservation";
  div.innerHTML =
    `<p>Walk-in Customers are <em>always</em> welcome.</p>` +
    `<p>But to ensure you don't have to wait, reserve a table with this button →</p>`;
  const btn = d.createElement("button");
  btn.type = "button";
  btn.className = "bookBtn";
  btn.innerHTML = iconBookEdit;
  div.appendChild(btn);

  return div;
}
