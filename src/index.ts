import askUser from "./askUser.js";

let songList = ["40'", "Outsiders", "Lucid Dreams"];
let askSongListPosition: number;

askSongListPosition = Number(
  askUser("De la llista, quin número de cançó vols? ")
);

const songDisplay =
  askSongListPosition > 0 && askSongListPosition <= songList.length
    ? songList.at(askSongListPosition - 1)
    : "Error";

console.log(songDisplay);
