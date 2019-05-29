//variables declaration//
var johnWeight, johnHeight, markWeight, markHeight ,BMI,greaterBMI;

//John's //
johnHeight =1.7;
johnWeight =60;
console.log("John's height and weight");
console.log(johnHeight +" "+ "meters");
console.log(johnWeight +" "+ "kilograms");

//Mark's//
markHeight =1.67;
markWeight =62;
console.log("Mark's height and weight");
console.log(markHeight +" "+ "meters");
console.log(markWeight +" "+ "kilograms");

//body mass index of both //
BMIJohn =johnWeight/(johnHeight^2);
console.log(BMIJohn +" "+"kg/m^2");
BMIMark =markWeight/(markHeight^2);
console.log(BMIMark+" "+"kg/m^2");

//first method//
greaterBMI =BMIJohn < BMIMark;
console.log(greaterBMI);
console.log("Is Mark's BMI higher than John's?" +" "+ greaterBMI);

//second method//
if(BMIMark>BMIJohn){
  console.log("Mark's BMI is higher");
}
else {
  console.log("John's BMI is higher");
}

