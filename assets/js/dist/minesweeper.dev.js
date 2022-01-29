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
  var minePositions = getMinePositions(boardSize, numberOfMines);

  for (var x = 0; x < boardSize; x++) {
    var row = [];

    for (var y = 0; y < boardSize; y++) {
      var element = document.createElement("div");
      element.dataset.status = TILE_STATUSES.HIDDEN;
      var tile = {
        element: element,
        x: x,
        y: y,
        mine: minePositions.some(positionMatch.bind(null, {
          x: x,
          y: y
        })),

        get status() {
          return this.element.dataset.status;
        },

        set status(value) {
          this.element.dataset.status = value;
        }

      };
      row.push(tile);
    }

    board.push(row);
  }

  return board;
}

function getMinePositions(boardSize, numberOfMines) {
  var positions = [];

  while (positions.length < numberOfMines) {
    var position = {
      x: randomNumber(boardSize),
      y: randomNumber(boardSize)
    };

    if (!positions.some(positionMatch.bind(null, position))) {
      positions.push(position);
    }
  }

  return positions;
}

function positionMatch(a, b) {
  return a.x === b.x && a.y === b.y;
}

function randomNumber(size) {
  return Math.floor(Math.random() * size);
}