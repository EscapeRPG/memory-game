const board = document.getElementById("board"),
  difficultiesDiv = document.getElementById("difficulties"),
  scoreBoard = document.getElementById("scoreBoard");

export function newGame() {
  difficultiesDiv.style.display = "flex";
  board.style.display = "none";
  scoreBoard.style.display = "none";
  localStorage.setItem("score", "0");
}

export function resetBoard(e) {
  if (e.code === "Space") {
    newGame();
  }
}
