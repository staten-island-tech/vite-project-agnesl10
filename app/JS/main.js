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
    <img class="image" src="${record.imageUrl}" alt="" />
    <br />
    <h4 class="price">${record.price}</h4>
    </div>`
  );
}

vinylRecords.forEach((record) => createCards(record));

function darkMode() {
  DOMSelectors.mode.addEventListener("click", function (e) {
    if (document.body.classList.contains("light")) {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  });
}
darkMode();
function clearCards() {
  document.container.innerHTML = "";
  createCards(record);
}

function filterByYear() {
  DOMSelectors.relfilter.addEventListener("click", function (record) {
    const x = vinylRecords.filter((record) => record.releaseYear < 2000)
    clearCards(x);
  });
}
function filterPops() {
  DOMSelectors.pops.addEventListener("click", function (record){
    const pop = vinylRecords.filter((record) => record.genre.includes("pop"))
    clearCards(pop);
  })
}
function filterRock() {
  DOMSelectors.rock.addEventListener("click", function (record) {
    const rock = vinylRecords.filter((record) => record.genre.includes("rock"))
    clearCards(rock);
  })
}

filterByYear();
filterPops();
filterRock();
