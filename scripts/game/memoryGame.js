import { tileSetManager } from "./tileSetManager.js";
import { setBoard } from "./setBoard.js";
import { resetBoard } from "./reset.js";

const difficultyLevels = document.querySelectorAll(".difficultyLevel"),
  topFive = document.getElementById("topFive");

let user, userData;

difficultyLevels.forEach((button) => {
  button.addEventListener("click", () => {
    setBoard(tileSetManager(button.id), button.id);
  });
});

window.addEventListener("keydown", resetBoard);

function checkScores() {
  if (localStorage.getItem("scores")) {
    const scoresData = JSON.parse(localStorage.getItem("scores"));
    scoresData.parties.sort((a, b) => a.score - b.score);
    scoresData.parties.forEach((game) => {
      topFive.innerHTML += `
          <td>${game.nom}</td>
          <td>${game.score}</td>
          <td>${game.taille}</td>
          <td>${game.theme}</td>
          <td>${game.date}</td>
        `;
    });
  } else {
    topFive.innerHTML =
      '<td colspan="5">Aucune partie enregistrée pour le moment</td>';
  }
}

window.addEventListener("load", checkScores);
