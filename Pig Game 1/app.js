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
