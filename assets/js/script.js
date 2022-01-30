import { createBoard } from "./minesweeper.js";

const BOARD_SIZE = 10;
const NUMER_OF_MINES = 10;

const board = createBoard(BOARD_SIZE, NUMER_OF_MINES);
const boardElement = document.querySelector(".board");
const minesLeftText = document.querySelector("[data-mine-count]");

board.forEach((row) => {
  row.forEach((tile) => {
    boardElement.append(tile.element);

    tile.element.addEventListener("click", () => {});

    tile.element.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      markTile(tile);
    });
  });
});
boardElement.style.setProperty("--size", BOARD_SIZE);
minesLeftText.textContent = NUMER_OF_MINES;
