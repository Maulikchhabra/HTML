var scores,roundScore,activePlayer,dice,gamePlaying;
var lastDice;

init();
//dice =Math.floor(Math.random()*6) +1;
//console.log(dice);

//document.querySelector("#current-" + activePlayer).textContent =dice; //setter//
//document.querySelector("#current-"+activePlayer).innerHTML ="<em>"+ dice+ "</em>";

//var x = document.querySelector("#score-0").textContent; //getter//
//console.log(x);

document.querySelector(".dice").style.display ="none";

function btn() {
  //do something here//
}
btn();

//document.querySelector(".btn-roll").addEventListener("click",btn);

document.getElementById("score-0").textContent ="0";
document.getElementById("score-1").textContent ="0";
document.getElementById("current-0").textContent ="0";
document.getElementById("current-1").textContent ="0";



document.querySelector(".btn-roll").addEventListener("click",function() {
   if(gamePlaying){
     //1. random number//
     var dice1 =Math.floor(Math.random()*6) +1;
     var dice2 =Math.floor(Math.random()*6) +1;

     //2.display the result
     document.getElementById("dice-1").style.display ="block";
     document.getElementById("dice-2").style.display ="block";
     document.getElementById("dice-1").src ="images/dice-"+dice1+".png";
     document.getElementById("dice-2").src ="images/dice-"+dice2+".png";

     //3.update the round score if rolled number was not a 1.//
     /*
     if(dice ===6 && lastDice ===6){
       //player loses score
       scores[activePlayer] =0;
       document.querySelector("#score-"+ activePlayer).textContent ="0";
       nextPlayer();
     }
     else if(dice!==1){
       //add score
       roundScore +=dice;
       document.querySelector("#current-" + activePlayer).textContent=roundScore;
       //roundScore =roundScore+ dice;
     }
     else{
       //next player//
      nextPlayer();
     }
     lastDice =dice;
     */
     if(dice1!==1 && dice2!==1){
       //add score
       roundScore +=dice1 +dice2;
       document.querySelector("#current-" + activePlayer).textContent=roundScore;
       //roundScore =roundScore+ dice;
     }
     else{
       //next player//
      nextPlayer();
     }
   }
});

document.querySelector(".btn-hold").addEventListener("click",function(){
     if(gamePlaying){
       //Add current score to global score
       scores[activePlayer] += roundScore;
      //scores[activePlayer] =scores[active] +roundScore;

      //Update the UI
      document.querySelector("#score-"+ activePlayer).textContent =scores[activePlayer];

      var input =document.querySelector(".final-score").value;
      var winningScore;
      //console.log(input);

      //undefined ,0,null or " " are COERCED to flase//
      //anything else is COERCED true//
      if(input){
         winningScore =input;
      }
      else{
        winningScore =100;
      }

      //Check if player won the game
      if(scores[activePlayer] >= winningScore){
        document.querySelector("#name-"+activePlayer).textContent ="Winner!";
        document.getElementById("dice-1").style.display ="none";
        document.getElementById("dice-2").style.display ="none";
        document.querySelector(".player-"+activePlayer +"-panel").classList.add("winner");
        document.querySelector(".player-"+activePlayer +"-panel").classList.remove("winner");
        gamePlaying =false;
      }
      else{
        //next player//
        nextPlayer();
      }
     }
});

function nextPlayer(){
  //next player//
  activePlayer ===0 ? activePlayer =1 :activePlayer =0; //ternary perator//
  roundScore =0;
  document.getElementById("current-0").textContent ="0";
  document.getElementById("current-1").textContent ="0";
 //document.querySelector(".player-0-panel").classList.remove("active");
 //document.querySelector(".payer-1-panel").classList.add("active")
  document.querySelector(".player-0-panel").classList.toggle("active");  //to transfer active from one player to other on his turn//
  document.querySelector(".player-1-panel").classList.toggle("active");  //.................||...........//
  document.getElementById("dice-1").style.display ="none";
  document.getElementById("dice-2").style.display ="none";}
//this is called anonymous function where it is defined inside event listner without any name//

document.querySelector(".btn-new").addEventListener("click",init);

function init() { //initialize variable function//
  scores =[0,0];
  activePlayer =0;
  roundScore =0;
  gamePlaying =true;

  document.getElementById("dice-1").style.display ="none";
  document.getElementById("dice-2").style.display ="none";

  document.getElementById("score-0").textContent ="0";
  document.getElementById("score-1").textContent ="0";
  document.getElementById("current-0").textContent ="0";
  document.getElementById("current-1").textContent ="0";
  document.getElementById("name-0").textContent ="Player 1";
  document.getElementById("name-1").textContent ="Player 2";
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");

}
