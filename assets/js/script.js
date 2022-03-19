var currentQuestion = -1;
var answer1 = document.querySelector("#answer1");
var answer2 = document.querySelector("#answer2");
var answer3 = document.querySelector("#answer3");
var answer4 = document.querySelector("#answer4");
var ans = [answer1, answer2, answer3, answer4];
var currentButton = 0;
var userAnswers = [];
var startButton = document.querySelector(".start-quiz");
var questions = [
    {
        questionTitle: "Commonly used data types DO Not include_______.", 
        choices: ["string", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        questionTitle: "The condition in an if / else statement is enclosed with _____.",
        choices: ["quotes", "curly brackets", "parenthesis", "square brackets"],
        answer: "parenthesis"
    },
    {
        questionTitle: "Arrays in JavaScript can be used to store _______.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        questionTitle: "String values must be enclosed within _______ when being assigned to variables",
        choices: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: "quotes"
    },
    {
        questionTitle: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript", "terminal/bash", "for loops", "console.log"],
        answer: "console.log"
    }  
]

function showQuestion (question) {
    var h2 = document.querySelector("#question > h2");
    h2.textContent = question.questionTitle;

    answer1.textContent = question.choices[0];
    answer2.textContent = question.choices[1];
    answer3.textContent = question.choices[2];
    answer4.textContent = question.choices[3];

    var questionDiv = document.querySelector("#question");
        
    questionDiv.style.display = "flex";
    for(var i = 0; i < 4; i++){
        ans[i].addEventListener("click", clickAnswer);
       
    };

    currentButton = 0;
    console.log(userAnswers);
}

function nextQuestion (){
    document.querySelector(".center").style.display = "none";
    currentQuestion = currentQuestion + 1;
    showQuestion (questions [currentQuestion]); 
}

startButton.addEventListener("click", function (){
    nextQuestion();
});

function userChoiceAction (answerButton){
    console.log(currentQuestion);
    if (currentQuestion >= questions.length - 1) {
        showScore()
    }else{
        userAnswers.push(answerButton.textContent);
        nextQuestion();
    }
}

function clickAnswer () {
    console.log("button" + currentButton);
    currentButton++;
    userChoiceAction (ans[currentButton]);
}

function showScore () {
    var questionDiv = document.querySelector("#question");
    questionDiv.remove();
    var score = 0;
    for(var i = 0; i < questions.length; i++) {
        if (questions[i].answer===userAnswers[i]){
            score = score + 5;
        }
        console.log(questions[i].answer + " - " + userAnswers[i]);
    } 
    var scorePage = document.querySelector(".score-page");
    scorePage.innerHTML += "Your score is " + score;
}




















// var newQuestSection = document.querySelector(".question");
// var qNumber = 0;

// startButton.addEventListener("click", function(){
//     document.querySelector(".center").style.display = "none";
//     makeQuestion(qNumber);
// })

// function makeQuestion (questionNumber) {
//     var quest0 = document.querySelector("div#newQuest0 > h2");
//     quest0.textContent = questions[questionNumber].questionTitle; 
 
//     for (var i=0; i < 4; i++) {
//         var choiceButton = document.createElement("button");
//         choiceButton.textContent = questions[questionNumber].choices[i];
//         choiceButton.addEventListener("click",   function(){
//             newQuestSection.textContent = "";
//             makeQuestion(qNumber);
//         })
//         newQuestSection.appendChild(choiceButton);
//     } 
//     qNumber += 1;
// }




