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
  return (this.checkHorizontal() || this.checkVertical() || this.checkDiagonal());
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
Game.prototype.checkVertical = function(array) {
  var foundFourConnected = false;
  var row = 0; 

for(var i = 0; i< array.length-3; i++){
    if (array[i]==array[i+1] && array[i]==array[i+2] && array[i]==array[i+3] && array[i]==array[i+4] && array[i]==array[i+5]){
      return true
    }
  }
 
}

/*----------check horizontal array-----------------*/
  
Game.prototype.checkHorizontal = function(sameindex) {
  var foundFourConnected = false;
  var column = 0;

  for(var i = 0; i< sameindex.length-2; i++){
    if (sameindex[i]==sameindex[i] && sameindex[i+1]==sameindex[i+1] && sameindex[i+2]==sameindex[i+2] && sameindex[i+3]==sameindex[i+3] && sameindex[i+4]==sameindex[i+4] && sameindex[i+5]==sameindex[i+5]){
      return true
    }
  }
/*----------check diagonal array(NEED HELP)-----------------*/
Game.prototype.checkDiagonal = function(index) {
  var foundFourConnected = false;
  var row = 0;
 
 board[0]


for(var i = 0; i< index.length-2; i++){
    if (index[i]==index[i+1] && index[i+1]==index[i+2] && index[i+2]==index[i+3] && index[i+3]==index[i+4] && index[i+4]==index[i+5])|| (index[i-5]==index[i-4]&&index[i-4]==index[i-3]&&index[i-3]==index[i-2]&&index[i-2]==index[i-1])
      return true
    }
  }
}

/*----jquery,actions,displays----*/

$(document).ready(function() {


/*-----hightlights all buttons------*/

  $('.button').mouseenter(function(){
    $(this).addClass("highlighted");
   
  });
  
  $('.button').mouseleave(function(){
    $(this).removeClass("highlighted");
  }); 

/*-------switch the player----------*/

  $(".button").click(function(){
    $(".displaycontainer .token").toggleClass("player1");

    $(".displaycontainer .token").toggleClass("player2");
  });
 
 /*--------reset button--------------*/

   $('.button.reset').click(function()){
     $(this).hide("token.player1");
      $(this).hide("token.player2");
      $('this').hide("display.win");
   } 
/*---------connect the column to the arrays and call attributes to get the div of the column------*/

$('div .column').attr('dataindex')

//<div data_index = "0"></div>  call attributes of div to get container


   }













