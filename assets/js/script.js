var currentQuestion = -1;
var userAnswers = [];
var startButton = document.querySelector(".start-quiz");
var questions = [
    {
        questionTitle: "Commonly used data types DO Not include_______.", 
        choices: ["string", "booleans", "alerts", "numbers"],
        answer: 2
    },
    {
        questionTitle: "The condition in an if / else statement is enclosed with _____.",
        choices: ["quotes", "curly brackets", "parenthesis", "square brackets"],
        answer: 2
    },
    {
        questionTitle: "Arrays in JavaScript can be used to store _______.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: 3
    },
    {
        questionTitle: "String values must be enclosed within _______ when being assigned to variables",
        choices: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: 2
    },
    {
        questionTitle: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript", "terminal/bash", "for loops", "console.log"],
        answer: 3
    }  
]

function showQuestion (question) {
    var h2 = document.querySelector("#question > h2");
    h2.textContent = question.questionTitle;

    var answer1 = document.querySelector("#answer1");
    var answer2 = document.querySelector("#answer2");
    var answer3 = document.querySelector("#answer3");
    var answer4 = document.querySelector("#answer4");

    answer1.textContent = question.choices[0];
    answer2.textContent = question.choices[1];
    answer3.textContent = question.choices[2];
    answer4.textContent = question.choices[3];

    var questionDiv = document.querySelector("#question");
        
    questionDiv.style.display = "flex";
    var ans = [answer1, answer2, answer3, answer4];
    for(var i = 0; i < 4; i++){
        var temp = ans[i];
        ans[i].removeEventListener("click", )
        ans[i].addEventListener("click", function(){
            console.log(i);
            userChoiceAction(temp);
        });
    }

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
    console.log(answerButton);
    userAnswers.push(answerButton.textContent);
    nextQuestion();
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




