
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

console.log(firstName +" "+lastName +" "+ age);//type coersion//

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

     //Equality operators//
if(height=="23"){
  console.log("== does type coercion");
}
//== performs type coercion and === is strictly equal//
/*
23 =="23" type coercion
23 == 23  simple holds true
23 ==="23" strictly equality (false)
23 ===23  strictly equal (true)
*/

//Functions//
function calculateAge(birthYear) {
  return 2018-birthYear;
}
var ageJohn =calculateAge(1990);
var ageSmith =calculateAge(1995);
var ageMax =calculateAge(2000);
console.log(ageJohn);
console.log(ageSmith);
console.log(ageMax);

function yearsUntilRetirement(year,firstName) {
  var age =calculateAge(year);
  var retirement =65-age;
  if(retirement>0){
    console.log(firstName+" retires in "+retirement+" years");
  }
  else{
    console.log(firstName+" is already retired");
  }
}

yearsUntilRetirement(1990,"John");
yearsUntilRetirement(2000,"Max");
yearsUntilRetirement(2010,"Jane");
yearsUntilRetirement(1940,"Tony");

//Function statements and expressions//
/*
function declaration =
function whatDoYouDo(job,firstName) {

}
*/

//function expression//
var whatDoYouDo = function(job,firstName) {
  switch (job) {
    case "teacher":return firstName +" teaches kids how to code";

    case "driver":return firstName +" drives school bus";

    case "designer":return firstName +" designs good websites";

    default:return firstName+" does something else";

  }
}
console.log(whatDoYouDo("teacher","John")+" and " + whatDoYouDo("driver","Mark"));

//Arrays//
    //Initialize the array//
var names =["John","Mark","Jane"];
var years =new Array(1990,1969,1948);

console.log(names);
console.log(names[2]);
console.log(names.length); //tells no of elements//

    //Mutate the data//
names[1]="Ben";
names[5]="Mary";
console.log(names);

names[names.length-2]="Mary"; //pushing in (no of elements-2) position//
console.log(names);

    //Different datatypes//
var john=["john","smith",1990,"teacher",false];

john.push("blue");//add at end//
john.unshift("Mr.")//add at beginning//
console.log(john);

john.pop();//deletes last element//
console.log(john);
john.shift();//deletes first element//
console.log(john);
console.log(john.indexOf(1990)); //shows index of the element//
console.log(john.indexOf(23)); //because 23 is not present in the array//

var isDesigner =john.indexOf("designer") ===-1 ? "John is not a designer":"John is a designer"
console.log(isDesigner);//Ternary operator//

//Objects and properties//
    //object literal//
var john ={
  firstName:"John",
  lastName:"Smith",
  birthYear:1990,
  family:["Jane","Mark","Bob"],
  job:"teacher",
  isMarried:false
};
console.log(john);
console.log(john.firstName);
console.log(john.lastName);

//Another way of calling//
console.log(john["lastName"]);
var x ="birthYear";
console.log(john[x]);

john.job ="designer";
john["isMarried"] =true;
console.log(john);

   //new object syntax//
var jane = new Object();
jane.name="jane";
jane.birthYear=1969;
jane[lastName]="smith";
console.log(jane);

//Objects and methods//
var john ={
  firstName:"John",
  lastName:"Smith",
  birthYear:1990,
  family:["Jane","Mark","Bob"],
  job:"teacher",
  isMarried:false,
  calcAge:function(birthYear) {
    this.age =2018-this.birthYear;
  }
};
john.calcAge();
console.log(john);

//Loops and iteration//
for(var i=0; i<10; i++){
  console.log(i);
}
/*
i =0,0<10,log i to console, i++
i =1,1<10,log i to console, i++
i =2,2<10,log i to console, i++
i =3,3<10,log i to console, i++
i =4,4<10,log i to console, i++
.
.
.
i =9,9<10,log i to console, i++
i =10,10<10, FALSE loop breaks
*/

var john=["john","smith",1990,"teacher",false];
for (var i = 0; i <=john.length ; i++) {
  console.log(john[i]);
}

//while loop
var i=0;
while (i<john.length) {
  console.log(john[i]);
  i++;
}

//continue and break statement//
var john=["john","smith",1990,"teacher",false];
for (var i = 0; i <john.length ; i++) {
  if(typeof john[i] !== "string") continue;
  console.log(john[i]);
}

for (var i = 0; i <john.length ; i++) {
  if(typeof john[i] !== "string") break;
  console.log(john[i]);
}

var john=["john","smith",1990,"teacher",false];
for (var i = john.length;i>=0 ; i--) {
  console.log(john[i]);
}

//Hoisting//

    //Functions//
calculateAge(1965);

function calculateAge(year){
  console.log(2016-year);
}

//retirement(1965);  will not work because hoisting does nt work for function expression//

var retirement =function(year) {
  console.log(65-(2016-year));
}

retirement(1990);

     //Variables//
console.log(age);
var age =23;
console.log(age);

function foo() {
  var age =65;
  console.log(age);
}
foo();
console.log(age);

//The this keyword//
//console.log(this);
function calculateAge(year){
  console.log(2016-year);
  console.log(this);
}
calculateAge(1985);

var john={
  name:"john",
  yearOfBirth:1990,
  calculateAge:function() {
    console.log(this);
    console.log(2016-this.yearOfBirth);
    /*function innerFuntion() {
      console.log(this);
    }
    innerFuntion();*/
  }
}
john.calculateAge();

var mike={
  name:"mike",
  yearOfBirth:1984,
};

mike.calculateAge=john.calculateAge;
mike.calculateAge();

//Inheritance//
/*
NOTES ==

1 every js object has a prototype property which makes inheritnce possible in js.

2 prototype property of an object is where we put methods and properties that we want other Objects to inherit.

3 constructor prototype property is not prototype of constructor itself, its prototype of all instances that are created through it.

4 when a certain method or property is called the search starts in the object itself and if cannot be found the search moves on the object's prototype. This continues until method is found :prototype chain.
*/

//Function constructor//
var john ={
  name :"john",       //..................//
  yearOfBirth:1990, //what we did from start//
  job: "teacher"   //...................//
};

//how it should be done when more than one objects are needed//
var Person = function(name ,yearOfBirth ,job) {
  this.name =name;
  this.yearOfBirth =yearOfBirth;
  this.job =job;
}

//using prototype function//
Person.prototype.calculateAge =
function() {
  console.log(2016-this.yearOfBirth);
};

//using property property//
Person.prototype.lastName = "Smith";

var john = new Person("john",1990,"teacher");
john.calculateAge();
var mike = new Person("mike",1965,"designer");
mike.calculateAge();
var jane = new Person("jane",1985,"driver");
jane.calculateAge();

console.log(john.lastName);
console.log(mike.lastName);
console.log(jane.lastName);

//Object.create//
var personProto ={
  calculateAge: function() {
    console.log(2016-this.yearOfBirth);
  }
};

var john =Object.create(personProto);
john.name ="john";
john.yearOfBirth =1990;
john.job = "teacher";

var jane = Object.create(personProto,{
  name :{value: "jane"},
  yearOfBirth:{value: 1969},
  job:{value:"designer"}
});

//Primitives vs objects//
     //Primitives
var a =23;
var b =a;
a =46;
console.log(a);
console.log(b);


     //Objects
var obj1 ={
  name:"john",
  age:26
};

var obj2 =obj1;
obj1.age =30;
console.log(obj1.age);
console.log(obj2.age);

     //Functions
var age =27;
var obj ={
  name:"jonas",
  city:"lisbon"
};

function change(a,b){
  a=30;
  b.city ="san francisco";
}

change(age,obj);

console.log(age);
console.log(obj.city);

//Function and also objects//
/*
NOTES==
1 function is an instance of object type.

2 function behaves like any other objects.

3 we can store Functions in variable.

4 we can pass a function as an argument to another function.

5 we can return function from a function.
*/
