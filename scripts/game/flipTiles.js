import { newGame } from "./reset.js";

const scoreDiv = document.getElementById("score");

let flipNumber = 0,
  isFlipping = false,
  score = 0;
const tilesBack = [],
  goodTiles = [];

export function flipTile(tileBack, tile) {

  if (isFlipping) return;

  tileBack.setAttribute(
    "style",
    "transform: rotateY(-180deg); transition: 0.5s linear; background: none;"
  );
  setTimeout(() => {
    tile.classList.remove("hidden");
    tile.classList.add("flipped");
    tile.setAttribute(
      "style",
      "transform: rotateY(180deg); transition: 0s; background-color: black;"
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

  if (goodTiles.length == allTiles.length) {
    if (confirm("c'est gagné ! encore une ?")) {
      score = 0;
      goodTiles.splice(0, goodTiles.length);
      newGame();
    }
  }
}
