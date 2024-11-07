import "../CSS/style.css";
import { DOMSelectors } from "./dom";
import { vinylRecords } from "./vinyls";

console.log(vinylRecords);

function createCards(record) {
  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `<div class="card">
    <h2 class="title">${record.title}</h2>
    <br />
    <h3 class="relartist">Released in ${record.releaseYear} by ${record.artist}</h3>
    <h5 class="genre">${record.genre}</h5>
    <br />
    <img class="image" src="${record.imageUrl}" alt="" />
    <br />
    <h4 class="price">${record.price}</h4>
    </div>`
  );
}

function darkMode() {}
vinylRecords.forEach((record) => createCards(record));
