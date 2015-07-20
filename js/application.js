//when the mouse hovers over a column, a token on top is displayed, when a column is clicked, 
//the token is drooped into the lowest row 





"use strict";

function Player(id) {
  this.id = id;
}

// Constructor function will create new Game objects
function Game() {
  // seven columns, six rows
  this.board  =  [[0,0,0,0,0,0],     // column 0
                  [0,0,0,0,0,0],     // column 1
                  [0,0,0,0,0,0],     // column 2
                  [0,0,0,0,0,0],     // column 3
                  [0,0,0,0,0,0],     // column 4
                  [0,0,0,0,0,0],     // column 5
                  [0,0,0,0,0,0]];    // column 6



  var column1 = board[0]
  var column2 = board[1]
  var column3 = board[2]
  var column4 = board[3]
  var column5 = board[4]
  var column6 = board[5]
  var column7 = board[6]

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
    row++;
  }
  this.board[column][row] = player.id;
}

// This function will return true if there are any 4 consecutive elements
// either horizontally, vertically, or diagonally
Game.prototype.checkWinner = function() {
  return (this.checkHorizontal() || this.checkVertical() || this.checkDiagonal());
}
$('#declwinner').css.remove('display:none')
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

// 4 consecutive horizontal elements
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

// 4 consecutive diagonal elements
Game.prototype.checkDiagonal = function() {
  var foundFourConnected = false;
  var row = 0;
  var column = 0;

  while (row < 8 && column <7 && !foundFourConnected) {
    if (this.checkDiagonalArray(this.board[column][row])) {
      foundFourConnected = true; 
    } else {
      diagonal++;
    }
  }
} 

// check vertical array
// This function will return true if there are 4 consecutive elements
// row and column in the array
Game.prototype.checkVertical = function(array) {
  var foundFourConnected = false;
  var row = 0; 

  for(var i = 0; i < array.length-3; i++){
    if (array[i] == array[i+1] && 
        array[i] == array[i+2] && 
        array[i] == array[i+3] && 
        array[i] == array[i+4] && 
        array[i] == array[i+5]){
      return true;
    }
  }
}

/*----------check horizontal array-----------------*/
Game.prototype.checkHorizontal = function(sameindex) {
  var foundFourConnected = false;
  var column = 0;

  for(var i = 0; i< sameindex.length-2; i++){
    if (sameindex[i]   == sameindex[i]   && 
        sameindex[i+1] == sameindex[i+1] &&
        sameindex[i+2] == sameindex[i+2] &&
        sameindex[i+3] == sameindex[i+3] && 
        sameindex[i+4] == sameindex[i+4] && 
        sameindex[i+5] == sameindex[i+5]){
      return true;
    }
  }
}

/*----------check diagonal array-----------------*/
Game.prototype.checkDiagonal = function(index) {
  var foundFourConnected = false;
  var row = 0;

  for(var i = 0; i< index.length-2; i++){
    if ((index[i]  == index[i+1] &&
        index[i+1] == index[i+2] &&
        index[i+2] == index[i+3] &&
        index[i+3] == index[i+4] &&
        index[i+4] == index[i+5]) ||
       (index[i-5] == index[i-4] &&
        index[i-4] == index[i-3] &&
        index[i-3] == index[i-2] &&
        index[i-2] == index[i-1])) {
      return true;
    }
  }
}

var game = new Game();

$(document).ready(fuction(){

$(#column1).hover('highlighted'){

  $(document).ready(fuction(){

$(.column).click(function(){
  $('.displaytoken').toggleclass(.player2);
  $('.hovertoken').toggleclass(.player2);
  $(".emptytoken").remove();
  $('token').toggleclass(.player2);
  


  var player1 = 1
  var player2 = 2

  for (var i=0; i =< 7; i++){
    change column1[0] to 1 or 2, then change column[1] to 1 or 2
     alternate between 1 and 2 for each array until filled

  }

if 4 in a row, input text winner
  add one to the player's score 

})


$('#column1').hover('highlighted')
$('#column2').hover('highlighted')
$('#column3').hover('highlighted')
$('#column4').hover('highlighted')
$('#column5').hover('highlighted')
$('#column6').hover('highlighted')
$('#column7').hover('highlighted')

})
}

  
})

