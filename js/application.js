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

/*-----4 consecutive vertical elements----------*/

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
/*-----4 consecutive horizontal elements----------*/

Game.prototype.checkHorizontal = function() {
  var foundFourConnected = false;
  var row = 0; 

  while (row<8 &&!foundFourConnected) {
    if (this.checkHorizontalArray(this.board[row])) {
      foundFourConnected = true;
    } else {
      row++;
    }
  }

  return foundFourConnected;
}

/*-----4 consecutive diagonal elements----------*/

Game.prototype.checkDiagonal = function() {
  var foundFourConnected = false;
  var row = 0;
  var column = 0;

   while (row < 8 && column <7 && !foundFourConnected) {
       if (this.checkDiagonalArray(this.board[column][row])) {
        foundFourConnected = true; 
  }   else {
        diagonal++;
      }
  }
} 


/*----------check vertical array------*/
// This function will return true if there are 4 consecutive elements
// row and column in the array
Game.prototype.checkVerticalArray = function(element, column) {
  
  var element = 0;
  var player1 = 1;
  var player2 = 2; 

  while (column < 8 && element = 4) {
     if (this.board[column][element])){
     foundFourConnected = true;
} 
  return element;
  }
}

/*----------check horizontal array-----------------*/
Game.prototype.checkHorizontalArray = function(element, row) {
  
  var element = 0;
  var player1 = 1;
  var player2 = 2; 

  while (row < 7 && element = 4) {
     if (this.board[row][element])){
     foundFourConnected = true;
} 
  // YOUR CODE HERE
  return element;
  }
}
/*----------check diagonal array(NEED HELP)-----------------*/
Game.prototype.checkDiagonalArray = function(element, diagonal) {

  var element = 0; 
  var player1 = 1;
  var player2 = 2; 
  curCol = column + 1;
  curRow = row + 1;
  countBack = 0
  countForward = 0


  while (curRow < 7 && curCol < 8 && board[curRow][curCol] == player) {
      backCount++
      curRow--;
      curCol--;
  }

  backCount = 0;
  forwardCount = 0;
  curCol = column - 1;
  curRow = row - 1;
}


// $(document).ready(function() {



//   $('.button').mouseenter(function(){
//     $(this).addClass("highlighted");
   
//   });
  
//   $('.button').mouseleave(function(){
//     $(this).removeClass("highlighted");
//   }); 

//   $(".button").click(function(){
//     $(".displaycontainer .token").toggleClass("player1");
//     $(".displaycontainer .token").toggleClass("player2");



