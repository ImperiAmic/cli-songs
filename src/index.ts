import askUser from "./askUser.js";

const songsTitles = ["40'", "Outsiders", "Lucid Dreams"];

const songsTitlesPosition = Number(
  askUser("De la llista, quin número de cançó vols? ")
);

if (Number.isNaN(songsTitlesPosition)) {
  console.log("Siusplau, introdueix un número");
  process.exit();
}

if (songsTitlesPosition < 1 || songsTitlesPosition > songsTitles.length) {
  console.log(
    `Error: en la teva llista hi ha ${songsTitles.length} cançons, no pots seleccionar la posició ${songsTitlesPosition}`
  );
  process.exit();
}

const songTitleIndex = songsTitlesPosition - 1;

const songTitle = songsTitles[songTitleIndex];

console.log(`La teva cançó: ${songTitle}`);
