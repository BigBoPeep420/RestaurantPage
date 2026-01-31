import signature from "../assets/images/sueSignature.svg?raw";
import "../styles/views/about.css";
import { default as location } from "../components/location/location.js";
import { default as hoursOfOp } from "../components/hoursOfOp/hoursOfOp.js";

export default function () {
  const d = document;

  const outer = d.createElement("div");
  outer.className = "about";

  const textSec = d.createElement("section");
  textSec.className = "textSection";
  textSec.innerHTML =
    `<p>Sue's Sous Vide began as a passion project to create a perfectly tender and juicy pork roast with a crispy, smokey sear. ` +
    `After researching and experimenting with different methods, she found the perfect combination. Sue began cooking nearly ` +
    `everything she could think of with her new method.</p>` +
    "" +
    `<p>When Sue's friends and family visited, she would elaborately cook them a meal using her method. After hosting several ` +
    `large gatherings to satisfy the requests for her food Sue decided she should start a restaurant where she could share ` +
    `her creations with everyone. Enter Sue's Sous Vide.</p>` +
    "" +
    `<p>Our striving passion is to provide you with not just an amazing meal, but an unforgettable experience. We want you ` +
    `to feel like you're family because to us, our community is. The caring staff eagerly await to give you the same ` +
    `wonderful experience they had on their first visit. We cater to any request we possibly can; we've helped with ` +
    `marriage proposals, celebrations, and even coodinated a synchronized 20-person kitchen staff water-ballet to recreate ` +
    `a patron's favorite scene from a 1950s musical while their steak was being seared.</p>` +
    "" +
    `<p>We haven't forgotten our roots in Sue's original kitchen. While our equipment has gotten shinier and our techniques ` +
    `more refined, we still approach every pork roast and lemon-drizzled belly with the same curiosity Sue had on Day One. ` +
    `We believe that the best meals aren't just 'cooked' - they are nurtured, protected from the chaos of a high-heat ` +
    `environment until they are ready for their final, glorious moment in the pan.</p>` +
    "" +
    `<p>Whether you're here for a milestone celebration or just a Tuesday night escape, our doors are open and the water ` +
    `is at the perfect temperature. We don't just want to be your favorite restaurant; we want to be the place where your ` +
    `own stories are seasoned and seared into memory. Welcome to the family - we've been expecting you.`;
  const sig = d.createElement("div");
  sig.className = "signature";
  sig.innerHTML = signature;
  textSec.appendChild(sig);

  outer.append(textSec, location(), hoursOfOp());

  return outer;
}
