import "../CSS/style.css";
import "./dom";
import { vinylRecords } from "./vinyls";

console.log(vinylRecords);

function createCards(title, artist, genre, year, price, imageUrl) {
  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `<div class="card">
    <h1 class="title">${vinylRecords.title}</h1>
    <br />
    <h3 class="relartist">Released in ${vinylRecords.releaseYear} by ${vinylRecords.artist}</h3>
    <h5 class="genre">${vinylRecords.genre}</h5>
    <br />
    <img class="image" src="${vinylRecords.imageUrl}" alt="" />
    <br />
    <h4 class="price">${vinylRecords.price}</h4>
    </div>`
  );
}
