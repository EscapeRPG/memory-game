import { newGame } from "./reset.js";
import { saveScore } from "./saveScore.js";

const scoreDiv = document.getElementById("score");

let flipNumber = 0,
  isFlipping = false,
  score = 0,
  difficulty;
const tilesBack = [],
  goodTiles = [];

export function flipTile(tileBack, tile) {
  if (isFlipping) return;
  tileBack.classList.add("flippedSingleCard");

  tileBack.setAttribute(
    "style",
    "transform: rotateY(-90deg); transition: 0.25s linear;"
  );
  setTimeout(() => {
    tile.classList.remove("hidden");
    tile.classList.add("flipped");
    tile.setAttribute(
      "style",
      "transform: rotateY(180deg); transition: 0s; background-color: black;"
    );
    tileBack.setAttribute(
      "style",
      "transform: rotateY(-180deg); transition: 0.25s linear; background: none;"
    );
  }, 250);

  flipNumber++;

  tilesBack.push(tileBack);

  if (flipNumber == 2) {
    isFlipping = true;
    setTimeout(() => {
      checkTiles(tileBack, tile);
    }, 1000);

    flipNumber = 0;
    score++;

    scoreDiv.innerText = score;
  }
}

function checkTiles(tileBack, tile) {
  const flippedTiles = document.querySelectorAll(".flipped");

  if (flippedTiles[0].src == flippedTiles[1].src) {
    tilesBack.forEach((tile) => {
      goodTiles.push(tile);
      tile.classList.add("good");
      tile.style.transition = "0s linear";
    });
    setTimeout(finalCheck, 1000);
  } else {
    tilesBack.forEach((tile) => {
      tile.setAttribute(
        "style",
        "transform: rotateY(0deg); transition: 0.5s linear"
      );
      tile.classList.remove("flippedSingleCard");
    });

    setTimeout(() => {
      flippedTiles.forEach((tile) => {
        tile.classList.add("hidden");
      });
    }, 250);
  }

  setTimeout(function () {
    isFlipping = false;
  }, 250);

  flippedTiles.forEach((tile) => {
    tile.classList.remove("flipped");
  });

  tilesBack.splice(0, tilesBack.length);
}

function finalCheck() {
  const allTiles = document.querySelectorAll(".tileBack");
  console.log(allTiles.length);

  switch (allTiles.length) {
    case 6:
      difficulty = "3 par 2";
      break;
    case 8:
      difficulty = "4 par 2";
      break;
    case 10:
      difficulty = "5 par 2";
      break;
    case 12:
      difficulty = "4 par 3";
      break;
    case 14:
      difficulty = "7 par 2";
      break;
    case 16:
      difficulty = "4 par 4";
      break;
    case 18:
      difficulty = "3 par 6";
      break;
    default:
      difficulty = "4 par 5";
      break;
  }

  if (goodTiles.length == allTiles.length) {
    if (localStorage.getItem("connected")) {
      if (confirm("C'est gagné ! Voulez-vous enregistrer votre score ?")) {
        const user = localStorage.getItem("connected"),
          userData = JSON.parse(localStorage.getItem(user)),
          nom = user,
          taille = difficulty,
          theme = userData[3];
        saveScore(nom, score, taille, theme);
      }
    } else {
      alert("Bravo, vous avez gagné !");
    }
    if (confirm("Encore une ?")) {
      score = 0;
      goodTiles.splice(0, goodTiles.length);
      newGame();
    }
  }
}
