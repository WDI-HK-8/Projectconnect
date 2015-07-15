"use strict";

function Player(id) {
  this.id   = id;
}

// Constructor function will create new Game objectss
function Game() {
  // seven columns, six rows
  this.board  =  [[0,0,0,0,0,0],     // column 0
                  [0,0,0,0,0,0],     // column 1
                  [0,0,0,0,0,0],     // column 2
                  [0,0,0,0,0,0],     // column 3
                  [0,0,0,0,0,0],     // column 4
                  [0,0,0,0,0,0],     // column 5
                  [0,0,0,0,0,0]];    // column 6
}

// Game objects will have a resetBoard() method
Game.prototype.resetBoard = function() {
  this.board  =  [[0,0,0,0,0,0],
                  [0,0,0,0,0,0],
                  [0,0,0,0,0,0],
                  [0,0,0,0,0,0],
                  [0,0,0,0,0,0],
                  [0,0,0,0,0,0],
                  [0,0,0,0,0,0]];
}

Game.prototype.insertToken = function(player, column) {
  var row = 0;
  while (this.board[column][row] > 0 && row < 6) {
    row++
  }
  this.board[column][row] = player.id;
}

// This function will return true if there are any 4 consecutive elements
// either horizontally, vertically, or diagonally
Game.prototype.checkWinner = function() {
  return (this.checkVertical());
  // return (this.checkHorizontal() || this.checkVertical() || this.checkDiagonal());
}

// This function will return true if there are 4 consecutive vertical
// elements in the board
Game.prototype.checkVertical = function() {
  var foundFourConnected = false;
  var column = 0;

  while (column<7 && !foundFourConnected) {
    if (this.checkVerticalArray(this.board[column])) {
      foundFourConnected = true;
    } else {
      column++;
    }
  }

  return foundFourConnected;
}

// This function will return true if there are 4 consecutive elements
// in the array
Game.prototype.checkVerticalArray = function(array) {
  // YOUR CODE HERE
  return false;
}


var game = new Game();
var player1 = new Player(1);
var player2 = new Player(2);

game.insertToken(player1, 0);
game.insertToken(player1, 0);
game.insertToken(player1, 0);
game.insertToken(player1, 0);

console.log("the winner is :", game.checkWinner());
