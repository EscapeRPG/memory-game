import { tileSetManager } from "./tileSetManager.js";
import { setBoard } from "./setBoard.js";
import { resetBoard } from "./reset.js";

const difficultyLevels = document.querySelectorAll(".difficultyLevel");

difficultyLevels.forEach((button) => {
  button.addEventListener("click", () => {
    setBoard(tileSetManager(button.id), button.id);
  });
});

window.addEventListener("keydown", resetBoard);
