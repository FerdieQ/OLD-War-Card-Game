console.log("main js loaded.");

//Global Variables
var player1Card;
var player2Card;
var player1Score=0;
var player2Score=0;
var player1Wins=0;
var player2Wins=0;


//Card Values
var cards = [
  {name:"c02", value:2, count:1, suit:"club", image:"images/c02.png"},
  {name:"c03", value:3, count:2, suit:"club", image:"images/c03.png"},
  {name:"c04", value:4, count:3, suit:"club", image:"images/c04.png"},
  {name:"c05", value:5, count:4, suit:"club", image:"images/c05.png"},
  {name:"c06", value:6, count:5, suit:"club", image:"images/c06.png"},
  {name:"c07", value:7, count:6, suit:"club", image:"images/c07.png"},
  {name:"c08", value:8, count:7, suit:"club", image:"images/c08.png"},
  {name:"c09", value:9, count:8, suit:"club", image:"images/c09.png"},
  {name:"c10", value:10, count:9, suit:"club", image:"images/c10.png"},
  {name:"c11", value:11, count:10, suit:"club", image:"images/c11.png"},
  {name:"c12", value:12, count:11, suit:"club", image:"images/c12.png"},
  {name:"c13", value:13, count:12, suit:"club", image:"images/c13.png"},
  {name:"c14", value:14, count:13, suit:"club", image:"images/c14.png"},
  {name:"d02", value:2, count:14, suit:"diamond", image:"images/d02.png"},
  {name:"d03", value:3, count:15, suit:"diamond", image:"images/d03.png"},
  {name:"d04", value:4, count:16, suit:"diamond", image:"images/d04.png"},
  {name:"d05", value:5, count:17, suit:"diamond", image:"images/d05.png"},
  {name:"d06", value:6, count:18, suit:"diamond", image:"images/d06.png"},
  {name:"d07", value:7, count:19, suit:"diamond", image:"images/d07.png"},
  {name:"d08", value:8, count:20, suit:"diamond", image:"images/d08.png"},
  {name:"d09", value:9, count:21, suit:"diamond", image:"images/d09.png"},
  {name:"d10", value:10, count:22, suit:"diamond", image:"images/d10.png"},
  {name:"d11", value:11, count:23, suit:"diamond", image:"images/d11.png"},
  {name:"d12", value:12, count:24, suit:"diamond", image:"images/d12.png"},
  {name:"d13", value:13, count:25, suit:"diamond", image:"images/d13.png"},
  {name:"d14", value:14, count:26, suit:"diamond", image:"images/d14.png"},
  {name:"h02", value:2, count:27, suit:"heart", image:"images/h02.png"},
  {name:"h03", value:3, count:28, suit:"heart", image:"images/h03.png"},
  {name:"h04", value:4, count:29, suit:"heart", image:"images/h04.png"},
  {name:"h05", value:5, count:30, suit:"heart", image:"images/h05.png"},
  {name:"h06", value:6, count:31, suit:"heart", image:"images/h06.png"},
  {name:"h07", value:7, count:32, suit:"heart", image:"images/h07.png"},
  {name:"h08", value:8, count:33, suit:"heart", image:"images/h08.png"},
  {name:"h09", value:9, count:34, suit:"heart", image:"images/h09.png"},
  {name:"h10", value:10, count:35, suit:"heart", image:"images/h10.png"},
  {name:"h11", value:11, count:36, suit:"heart", image:"images/h11.png"},
  {name:"h12", value:12, count:37, suit:"heart", image:"images/h12.png"},
  {name:"h13", value:13, count:38, suit:"heart", image:"images/h13.png"},
  {name:"h14", value:14, count:39, suit:"heart", image:"images/h14.png"},
  {name:"s02", value:2, count:40, suit:"spade", image:"images/s02.png"},
  {name:"s03", value:3, count:41, suit:"spade", image:"images/s03.png"},
  {name:"s04", value:4, count:42, suit:"spade", image:"images/s04.png"},
  {name:"s05", value:5, count:43, suit:"spade", image:"images/s05.png"},
  {name:"s06", value:6, count:44, suit:"spade", image:"images/s06.png"},
  {name:"s07", value:7, count:45, suit:"spade", image:"images/s07.png"},
  {name:"s08", value:8, count:46, suit:"spade", image:"images/s08.png"},
  {name:"s09", value:9, count:47, suit:"spade", image:"images/s09.png"},
  {name:"s10", value:10, count:48, suit:"spade", image:"images/s10.png"},
  {name:"s11", value:11, count:49, suit:"spade", image:"images/s11.png"},
  {name:"s12", value:12, count:50, uit:"spade", image:"images/s12.png"},
  {name:"s13", value:13, count:51, suit:"spade", image:"images/s13.png"},
  {name:"s14", value:14, count:52, suit:"spade", image:"images/s14.png"}
]


//Suffle Deck Function
function shuffleDeck(cards) {
  var i = 0,
      j = 0,
      temp = null
  for (i = cards.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1))
    temp = cards[i]
    cards[i] = cards[j]
    cards[j] = temp
  }
}

//Function Player Battle
function playerBattle() {
  if (player1Card.value > player2Card.value) {
    $("#outcome").text("Player 1 WINS!");
    player1Score = player1Score+2;
    console.log(2);
    console.log(player1Card.image);
  }
  if (player1Card.value < player2Card.value) {
    $("#outcome").text("Player 2 WINS!");
    player2Score = player2Score+2;
    console.log(2);
    console.log(player2Card.image);
  }
  if (player1Card.value === player2Card.value) {
    $("#outcome").text("Play WAR!");
    console.log("tie");

  }
}

//Function Player War
function playerWar() {
  if (player1Card.value > player2Card.value) {
    $("#outcome").text("Player 1 Won War!");
    player1Score = player1Score+6;
    console.log(6);
    console.log(player1Card.image);
  }
  if (player1Card.value < player2Card.value) {
    $("#outcome").text("Player 2 Won War!");
    player2Score = player2Score+6;
    console.log(6);
    console.log(player2Card.image);
  }
  if (player1Card.value === player2Card.value) {
    $("#outcome").text("Play WAR!");
    console.log("tie");
  }
}

//Deal Cards
function dealCards(){
  if ((player1Score<26) || (player2Score<26)) {
    shuffleDeck(cards);
    player1Card = cards[0];
    player2Card = cards[1];
    playerBattle();
    renderDealCards();
    clearWarCards();
  }
  if (player1Score>=26) {
    $("#outcome").text("GAME! Player 1 Wins!");
  }
  if (player2Score>=26) {
    $("#outcome").text("GAME! Player 2 Wins!");
  }

}

//Deal War Cards
function dealWarCards() {
  if ((player1Score<26) || (player2Score<26)) {
    shuffleDeck(cards);
    player1Card = cards[0];
    player2Card = cards[1];
    playerWar();
    renderWarCards();
  }
  if (player1Score>=26) {
    $("#outcome").text("GAME! Player 1 Wins!");
  }
  if (player2Score>=26) {
    $("#outcome").text("GAME! Player 2 Wins!");
  }

}

//Deal Cards Are Shown
function renderDealCards() {
  $("#player1Card img").attr("src",player1Card.image);
  $("#player2Card img").attr("src",player2Card.image);
  $("#player1Score").text(player1Score);
  $("#player2Score").text(player2Score);
}

//War Cards Are Shown
function renderWarCards() {
  $("#player1WarCard img").attr("src",player1Card.image);
  $("#player2WarCard img").attr("src",player2Card.image);
  $("#player1WarExtra img").attr("src","images/card.png");
  $("#player2WarExtra img").attr("src","images/card.png");
  $("#player1Score").text(player1Score);
  $("#player2Score").text(player2Score);
}

//War Cards Are Cleared
function clearWarCards() {
  $("#player1WarCard img").attr("src", " ");
  $("#player2WarCard img").attr("src", " ");
  $("#player1WarExtra img").attr("src", " ");
  $("#player2WarExtra img").attr("src", " ");
}

//Start Button
$("#startButton").click(dealCards);

//War Button
$("#warButton").click(dealWarCards);
