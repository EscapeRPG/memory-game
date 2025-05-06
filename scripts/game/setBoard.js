import { flipTile } from "./flipTiles.js";

const board = document.getElementById("board"),
  difficultyButtons = document.getElementById("difficulties"),
  scoreBoard = document.getElementById("scoreBoard");

export function setBoard(tileSet, difficulty) {
  switch (difficulty) {
    case "6":
      board.style.gridTemplateColumns = "repeat(3, 1fr)";
      break;
    case "8":
      board.style.gridTemplateColumns = "repeat(4, 1fr)";
      break;
    case "10":
      board.style.gridTemplateColumns = "repeat(5, 1fr)";
      break;
    case "12":
      board.style.gridTemplateColumns = "repeat(3, 1fr)";
      break;
    case "14":
      board.style.gridTemplateColumns = "repeat(7, 1fr)";
      break;
    case "16":
      board.style.gridTemplateColumns = "repeat(4, 1fr)";
      break;
    case "18":
      board.style.gridTemplateColumns = "repeat(3, 1fr)";
      break;
    case "20":
      board.style.gridTemplateColumns = "repeat(4, 1fr)";
      break;
    default:
      board.style.gridTemplateColumns = "repeat(5, 1fr)";
      break;
  }

  difficultyButtons.style.display = 'none';
  if (board.style.display === 'none') {
    board.style.display = 'grid';
  }

  board.innerHTML = "";

  let tileNumber = 1;

  tileSet.forEach((tile) => {
    board.innerHTML += `<div class="tileBack" id="tile${tileNumber}">${tile}</div>`;
    tileNumber++;
  });

  const tiles = document.querySelectorAll(".tileBack");

  tiles.forEach((tile) => {
    tile.addEventListener("click", () => {
      flipTile(tile, tile.firstChild);
    });
  });

  let score;

  if (localStorage.getItem("score")) {
    score = localStorage.getItem("score");
  } else {
    score = 0;
  }

  const scoreDiv = document.getElementById("score");
  scoreDiv.innerText = score;
  scoreBoard.style.display = "block";
}
