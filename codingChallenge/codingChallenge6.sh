/*SIMPLE LEVEL

(function(){
  function Question(question,answers,correct) {
    this.question =question;
    this.answers =answers;
    this.correct =correct;
  }

  Question.prototype.displayQuestion =function() {
    console.log(this.question);
    for(var i=0; i < this.answers.length; i++){
      console.log(i+" : "+this.answers[i]);
    }
  }

  Question.prototype.checkAnswer = function (ans) {
    if(ans === this.correct){
      console.log("correct answer");
    }
    else{
      console.log("wrong answer");
    }
  };

  var q1 =new Question("Is javascript the coolest programming language in the world.", ["yes","no"],0);
  var q2 =new Question("What is the name of this course\'s teacher",["john","michael","jonas"],2);
  var q3 =new Question("What does best describe coding",["boring","fun","hard","tediuos"],1);

  var questions =[q1,q2,q3];
  var n =Math.floor(Math.random()*questions.length); //to randomly choose a question out of the three given//

  questions[n].displayQuestion();

  var answer = parseInt(prompt("Please select the correct answer")); //parse int was used to change the number from string to integer//

  questions[n].checkAnswer(answer);

})();
*/

//EXPERT LEVEL//
(function(){
  function Question(question,answers,correct) {
    this.question =question;
    this.answers =answers;
    this.correct =correct;
  }

  Question.prototype.displayQuestion =function() {
    console.log(this.question);
    for(var i=0; i < this.answers.length; i++){
      console.log(i+" : "+this.answers[i]);
    }
  }

  Question.prototype.checkAnswer = function (ans, callback) {
    var sc;
    if(ans === this.correct){
      console.log("correct answer");
      sc =callback(true);
    }
    else{
      console.log("wrong answer");
      sc =callback(false);
    }
    this.displayScore(sc);
  };

  Question.prototype.displayScore =function(score){
    console.log("Your current score is "+score);
    console.log("--------------------");
  }

  var q1 =new Question("Is javascript the coolest programming language in the world.", ["yes","no"],0);
  var q2 =new Question("What is the name of this course\'s teacher",["john","michael","jonas"],2);
  var q3 =new Question("What does best describe coding",["boring","fun","hard","tediuos"],1);

  var questions =[q1,q2,q3];

function score(){
  var sc =0;
  return function(correct){
    if(correct){
      sc++;
    }
    return sc;
  }
}

var keepScore =score();

  function nextQuestion(){

    var n =Math.floor(Math.random()*questions.length); //to randomly choose a question out of the three given//

    questions[n].displayQuestion();

    var answer = prompt("Please select the correct answer"); //parse int was used to change the number from string to integer//

    if(answer !== "exit"){
      questions[n].checkAnswer(parseInt(answer),keepScore);
      nextQuestion();
    }
  }
  nextQuestion();
})();
