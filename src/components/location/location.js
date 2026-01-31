import "./location.css";

export default function () {
  const d = document;

  const outer = d.createElement("div");
  outer.className = "location";
  outer.innerHTML =
    `<p class="title">Our Location</p><hr>` +
    `<address>867 Fake Hwy 5309 Advance, MO 05309-0867</address>`;

  const map = d.createElement("div");
  map.className = "map";
  map.innerHTML =
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3182.398900391562!2d-89.9050898!3d37.095621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88780f17ba728f4f%3A0x8c3c6e88bf583cf0!2s32887%20MO-25%2C%20Advance%2C%20MO%2063730!5e0!3m2!1sen!2sus!4v1769822030284!5m2!1sen!2sus" ` +
    `style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;

  outer.append(map);
  return outer;
}
