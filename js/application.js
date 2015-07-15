

//  /*create board please note that the idea and
// design of the template was borrowed from 
//  http://www.codecademy.com/Smwaters/codebits/Uln4W/edit */
// /*control j for js lint*/
"use strict";

// var board  =  [ [0,0,0,0,0,0]
//                 [0,0,0,0,0,0]
//                 [0,0,0,0,0,0]
//                 [0,0,0,0,0,0]
//                 [0,0,0,0,0,0]
//                 [0,0,0,0,0,0]
//                 [0,0,0,0,0,0]
// ];

// seven columns, six rows 
var tokens = 0
var playing = true;
var started = false;
var maxHeight = 6;
var winner = false; 
var gameOver = false;
var playersTurn = true;
var victor = false;
var player1 = 1;
var player2 = 2;

$(document).ready(function() {

   //  $('.button reset').click(function(){
   //  board = [
   //              [0,0,0,0,0,0]
   //              [0,0,0,0,0,0]
   //              [0,0,0,0,0,0]
   //              [0,0,0,0,0,0]
   //              [0,0,0,0,0,0]
   //              [0,0,0,0,0,0]
   //              [0,0,0,0,0,0]
   //  ];
   // playersTurn = true; 
   // gameOver = false; 
   //  });

  $('.button').mouseenter(function(){
    $(this).addClass("highlighted");
  });
  
  $('.button').mouseleave(function(){
    $(this).removeClass("highlighted");
  }); 

  $(".button").click(function(){
    $(".displaycontainer .token").toggleClass("player1");
    $(".displaycontainer .token").toggleClass("player2");

  });
  

});
   


//     ]

// })


// })

// var droptoken = function(){
//     if 
//         $(".displaycontainer .token").click(function(){
//             var results = columns.filter(function(x) { return x.ID == id });
//         })
// }

// /*define each column, each column's b,c,d,f should be excluded*/

// For columns( i= 0; i<7; i++)

// var 

// $(document).ready(function() {

// /* set up board and alternate player by switching the color
//  of the token when button is prressed */
// /* set up dropping token into each column when button 
// is pressed*/  

// var updateDisplayToken = function() {
//     if $(".displaycontainer .token").click(function(){
     

//     })
//     if($("html").hasClass("ie"))
//      $(".deleteme").remove();
//   $('.displaycontainer.token').click(function(){
//   $('.displaycontainer.token').fadeOut('slow');
//   });
//   });
  


// // var switchPlayer = function() {
// //     if(started = true) return;
// //     tokens++;
// //     updateDisplayToken();
// // };

// //   /* tokens in lowest row only*/ 


// // var updateDisplayToken = function() {
// //     $(".displaycontainer .token").addClass("deleteme");
// //     if($("html").hasClass("ie"))
// //      $(".deleteme").remove();
// //     else
// //         $(".deleteme").effect("fade", function(){
// //             $(".deleteme").remove();}); 
// //     var player = token%2 ? "player1" : "player2";
// //     var newToken = "<div style=\"display:none\"class=\"token"
// //        + p + "\"></div>";
// //        $('.displaycontainer > div').prepend($(newToken));
// //        if(!$("html").hasClass("ie"))
// //          $("displaycontainer.token")
// //               .css("position", "absolute");
// //         $('.displaycontainer.token').show("slide");
// //         $('.displaycontainer.token').click(switchPlayer);
// // };




// //         if(!$("html").hasClass("ie"))
// //             $(".displaycontainer .token")
// //                 .css("position", "absolute");

// //     $(".columncontainer .button").click(function(){
// //         var index = $(this).parent().index();
// //         if(!updateGame(index)) return;
// //         started = true;
// //         var player = tokens%2 ? "player2" : "player1";
// //         var newToken = "<div class=\"token " + p + "\"></div>";
// //         $(this).prev().prepend(newToken);
// //         var t = $(this).prev()
// //             .children(".token:first-child").position.top;
// //         $(this).prev()
// //              .children(".token:first-child").css("top",t);
// //         if($("html")).hasClass("ie"))
// //            $(this).prev().children(".token:first-child")
// //                 .animate({top:"+="+dropLength(index)+"px"}, 300);
// //         if(!playing) return;
// //         updateDisplayToken();
// //     });
    

// //     $(".reset").click(function() {
// //         $(".gamecontainer.token").fadeOut(function()
// //             {$(this).remove();});
// //     for (var i = 0; i < columns.length; i++) columns[i] = [];
// //         $(".win").hide();
// //         $("displaycontainer h2").text("winner!");
// //     playing = true;
// //     started = false;
// //     updateDisplayToken();
// // });

// //  $(".displaycontainer.token").click(switchPlayer);
// //     $("button").mouseenter(function(){
// //         $(this).addClass("highlighted");
// //     });
// //     $(".button").mouseleave(function(){
// //         $(this).removeClass("highlighted");
// //     });
// // });









//  