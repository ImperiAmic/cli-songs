import askUser from "./askUser.js";

let songsTitles = ["40'", "Outsiders", "Lucid Dreams"];

let songTitlePosition = Number(
  askUser("De la llista, quin número de cançó vols? ")
);

const message =
  songTitlePosition > 0 && songTitlePosition <= songsTitles.length
    ? songsTitles.at(songTitlePosition - 1)
    : `Error: en la teva llista hi ha ${songsTitles.length} cançons, no pots seleccionar la posició ${songTitlePosition}`;

console.log(message);
