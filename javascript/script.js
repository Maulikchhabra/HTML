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
