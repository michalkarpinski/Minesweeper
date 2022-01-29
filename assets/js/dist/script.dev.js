"use strict";

var _minesweeper = require("./minesweeper.js");

var BOARD_SIZE = 10;
var NUMER_OF_MINES = 10;
var board = (0, _minesweeper.createBoard)(BOARD_SIZE, NUMER_OF_MINES);
var boardElement = document.querySelector('.board');
boardElement.style.setProperty('--size', BOARD_SIZE);
board.forEach(function (row) {
  row.forEach(function (tile) {
    boardElement.append(tile.element);
  });
});