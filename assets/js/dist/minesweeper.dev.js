"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createBoard = createBoard;
var TILE_STATUSES = {
  HIDDEN: 'hidden',
  MINE: 'mine',
  NUMBER: 'number',
  MARKED: 'marked'
};

function createBoard(boardSize, numberOfMines) {
  var board = [];

  for (var x = 0; x < boardSize; x++) {
    var row = [];

    for (var y = 0; y < boardSize; y++) {
      var element = document.createElement("div");
      element.dataset.status = TILE_STATUSES.HIDDEN;
      var tile = {
        element: element,
        x: x,
        y: y
      };
      row.push(tile);
    }

    board.push(row);
  }

  return board;
}