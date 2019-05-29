//John's//
var johnFirst,johnSecond,johnThird,averageJohn;
johnFirst=89;
johnSecond=120;
johnThird=103;
averageJohn=(johnFirst+johnSecond+johnThird)/3;
console.log("John's average"+averageJohn);

//Mike's//
var mikeFirst,mikeSecond,mikeThird,averageMike;
mikeFirst=116;
mikeSecond=94;
mikeThird=123;
averageMike=(mikeFirst+mikeSecond+mikeThird)/3;
console.log("Mike's average"+averageMike);


//winner//
if(averageJohn >averageMike){console.log("John is winner with average score of "+averageJohn);}
else if(averageJohn ===averageMike){console.log("Draw");}
else{console.log("Mike is winner with average score of "+averageMike);}

//Change scores//
johnFirst=128;
if(averageJohn >averageMike){console.log("John is winner with average score of "+averageJohn);}
else if(averageJohn ===averageMike){console.log("Draw");}
else{console.log("Mike is winner with average score of "+averageMike);}

//Mary's//
var maryFirst,marySecond,maryThird,averageMary;
maryFirst=97;
marySecond=134;
maryThird=105;
averageMary=(maryFirst+marySecond+maryThird)/3;
console.log("Mary's average"+averageMary);

//winner//
if(averageJohn>averageMike && averageJohn>averageMary){
  console.log("John is winner with average score of "+averageJohn);
}
else if(averageMike>averageJohn && averageMike>averageMary){
  console.log("Mike is winner with average score of "+averageMike);
}
else if(averageMary>averageJohn && averageMary>averageMike){
  console.log("Mary is winner with average score of "+averageMary);
}
else if(averageJohn ===averageMike && averageJohn>averageMary){
  console.log("Draw");
}
else if(averageJohn ===averageMary && averageJohn>averageMike){
  console.log("Draw");
}
else if(averageMary ===averageMike && averageMary>averageJohn){
  console.log("Draw");
}
else (averageJohn ===averageMary ===averageMike){
  console.log("Draw");
}

