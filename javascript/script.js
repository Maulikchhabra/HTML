console.log("Hello world!");

//variables and datatypes//
var firstName ="john";
var lastName ="smith";
var age =28;
var job;
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);

console.log(firstName +" "+lastName +" "+ age);//type coercion//

var age="twenty eight";
console.log(age); //variable mutation//

job="teacher";
console.log(job);

var married=false;
console.log(married);

//single line comment//

/*
multiline comment

*/
/*special types to show a message or output

alert(firstName +" "+lastName +" "+ age);

prompt("What is his job?");

*/

//basic operators//
var year, yearJohn, yearMark ,ageJohn ,ageMark;
year=2019;
ageJohn=28;
ageMark=30;
yearJohn =year-ageJohn;
yearMark =year-ageMark;
console.log(yearJohn);
console.log(yearMark);
console.log(year+10);
console.log(year*2);
console.log(year/10);

//logical operators//
var markOlder =yearMark < yearJohn;;
console.log(markOlder);

//typeof operators//
//higher the precedence =the first the operator works//
console.log(typeof markOlder);
console.log(typeof ageJohn);
console.log(typeof firstName);

//Operator precedence starts//
var now =2019;
var yearSmith =1989;
var fullAge =18;
var ageSmith =now-yearSmith;
var ageHarry =35;
       //Multiple operators//
var isFullAge =now-yearSmith >= fullAge;
console.log(isFullAge);//precedence of - is greater than >=//
       //Grouping//
var average =(ageHarry+ageSmith)/2;//with brackets//
var wrongAverage =ageHarry+ageSmith/2;//without brackets//
console.log(wrongAverage);//precedence of / is greater tha +//
console.log(average);//precedence of brackets is greater than / //
      //Multiple assignments//
var x,y;
x= y=(3+5)*4-6; //26//
console.log(x,y);

      //More operators//
x=x+2;//Changed to 28//
console.log(x);
x += 2; //28+2=30//
console.log(x);
// x=x+2 and x+=2 performs same operations//
//for increasing or decreasing value just by 1 use x++ and x--//
y++;//27//
console.log(y);
y--;//26//
console.log(y);

//if else statements//
firstName ="John";
var civilStatus ="single";

if(civilStatus ==="married")
{
  console.log(firstName +" "+ "is married");
}
else {
  console.log(firstName +" "+"will hopefully marry soon");
}

var isMarried =true;
if(isMarried)
{
  console.log(firstName +" "+ "is married");
}
else {
  console.log(firstName +" "+"will hopefully marry soon");
}

//Boolean logic//
firstName="Will";
age=20;
if(age<13){
  console.log(firstName +" "+"is a boy");
}
else if(age>13 && age<20){
  console.log(firstName +" "+"is a teenager");
}
else if(age>=20 && age<30){
  console.log(firstName +" "+"is a young man");
}
else{
  console.log(firstName +" "+"is a man");
}

//Ternary operator and swith statements//
//Ternary operator//
firstName ="John";
age =16;

age>=18 ? console.log(firstName +" drinks beer"):console.log(firstName+" drinks juice");

age =22;
age>=18 ? console.log(firstName +" drinks beer"):console.log(firstName+" drinks juice");

var drink =age>=18 ? "beer":"juice"; //alternate way//
console.log(drink);
   //changing age to 14 years//
age =14;
drink =age>=18 ? "beer":"juice";
console.log(age + drink);

/*
if(age>=18){
  drink="beer";
}
else{
  drink="juice";
}
Can also use it
*/

//Switch statement//
job ="teacher";
switch (job)
{
  case "teacher":console.log(firstName+" teaches kids how to code");
                break;
  case "driver":console.log(firstName+" drives the school bus");
                break;
  default:console.log(firstName+" has no job");
}

//Truthy and Falsy values and equality operators//
//Falsy values:undefined,null,0,"",NaN//
//truthy values:not falsy ones//
var height;//case 1//
if(height||height ===0){
  console.log("Variable is defined");
}
else {
  console.log("Variable has not been defined");
}

height =23;//case 2//
if(height||height ===0){
  console.log("Variable is defined");
}
else {
  console.log("Variable has not been defined");
}
