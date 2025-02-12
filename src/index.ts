import askUser from "./askUser.js";

const songsTitles = ["40'", "Outsiders", "Lucid Dreams"];

const songTitlePosition = Number(
  askUser("De la llista, quin número de cançó vols? ")
);

if (Number.isNaN(songTitlePosition)) {
  // programación defensiva: primero los errores
  console.log("Siusplau, introdueix un número");
  process.exit();
}

const isValidPosition =
  songTitlePosition >= 1 && songTitlePosition <= songsTitles.length;

if (!isValidPosition) {
  console.log(
    `Error: en la teva llista hi ha ${songsTitles.length} cançons, no pots seleccionar la posició ${songTitlePosition}`
  );
  process.exit();
}

const songTitleIndex = songTitlePosition - 1;

const songTitle = songsTitles[songTitleIndex];

console.log(songTitle);
