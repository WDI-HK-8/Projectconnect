 /*create board please note that the idea and
design of the template was borrowed from 
 http://www.codecademy.com/Smwaters/codebits/Uln4W/edit */
/*control j for js lint*/
"use strict";

var columns = [[], [], [], [], [], [] ,[]];
// seven columns 
var tokens = 0
var playing = true;
var started = false;
var maxHeight = 6;
var winner = false; 
var gameover = false;

$(document).ready(function() {

/* set up board and alternate player by switching the color
 of the token when button is prressed */
/* set up dropping token into each column when button 
is pressed*/  

  $('.displaycontainer.token').click(function(){
  $('.displaycontainer.token').fadeOut('slow');
  });
  });
  


// var switchPlayer = function() {
//     if(started = true) return;
//     tokens++;
//     updateDisplayToken();
// };

//   /* tokens in lowest row only*/ 


// var updateDisplayToken = function() {
//     $(".displaycontainer .token").addClass("deleteme");
//     if($("html").hasClass("ie"))
//      $(".deleteme").remove();
//     else
//         $(".deleteme").effect("fade", function(){
//             $(".deleteme").remove();}); 
//     var player = token%2 ? "player1" : "player2";
//     var newToken = "<div style=\"display:none\"class=\"token"
//        + p + "\"></div>";
//        $('.displaycontainer > div').prepend($(newToken));
//        if(!$("html").hasClass("ie"))
//          $("displaycontainer.token")
//               .css("position", "absolute");
//         $('.displaycontainer.token').show("slide");
//         $('.displaycontainer.token').click(switchPlayer);
// };




//         if(!$("html").hasClass("ie"))
//             $(".displaycontainer .token")
//                 .css("position", "absolute");

//     $(".columncontainer .button").click(function(){
//         var index = $(this).parent().index();
//         if(!updateGame(index)) return;
//         started = true;
//         var player = tokens%2 ? "player2" : "player1";
//         var newToken = "<div class=\"token " + p + "\"></div>";
//         $(this).prev().prepend(newToken);
//         var t = $(this).prev()
//             .children(".token:first-child").position.top;
//         $(this).prev()
//              .children(".token:first-child").css("top",t);
//         if($("html")).hasClass("ie"))
//            $(this).prev().children(".token:first-child")
//                 .animate({top:"+="+dropLength(index)+"px"}, 300);
//         if(!playing) return;
//         updateDisplayToken();
//     });
    

//     $(".reset").click(function() {
//         $(".gamecontainer.token").fadeOut(function()
//             {$(this).remove();});
//     for (var i = 0; i < columns.length; i++) columns[i] = [];
//         $(".win").hide();
//         $("displaycontainer h2").text("winner!");
//     playing = true;
//     started = false;
//     updateDisplayToken();
// });

//  $(".displaycontainer.token").click(switchPlayer);
//     $("button").mouseenter(function(){
//         $(this).addClass("highlighted");
//     });
//     $(".button").mouseleave(function(){
//         $(this).removeClass("highlighted");
//     });
// });









 