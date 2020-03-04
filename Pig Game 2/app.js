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
