var scores,roundScore,activePlayer,dice,gamePlaying;


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
     var dice =Math.floor(Math.random()*6) +1;

     //2.display the result
     var diceDOM =document.querySelector(".dice");
     diceDOM.style.display ="block";
     diceDOM.src ="images/dice-"+dice+".png"


     //3.update the round score if rolled number was not a 1.
     if(dice!==1){
       //add score
       roundScore +=dice;
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

      //Check if player won the game
      if(scores[activePlayer] >= 20){
        document.querySelector("#name-"+activePlayer).textContent ="Winner!";
        document.querySelector(".dice").style.display ="none";
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

