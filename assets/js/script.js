var startButton = document.querySelector(".start-button");
var questions = [
    {
        questionTitle: "Commonly used data types DO Not include_______.", 
        choices: ["string", "booleans", "alerts", "numbers"]
    },
    {
        questionTitle: "The condition in an if / else statement is enclosed with _____.",
        choices: ["quotes", "curly brackets", "parenthesis", "square brackets"]
    },
    {
        questionTitle: "Arrays in JavaScript can be used to store _______.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"]
    },
    {
        questionTitle: "String values must be enclosed within _______ when being assigned to variables",
        choices: ["commas", "curly brackets", "quotes", "parenthesis"]
    },
    {
        questionTitle: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript", "terminal/bash", "for loops", "console.log"]
    }
          
]
var newQuestSection = document.querySelector(".question");
var qNumber = 0;

startButton.addEventListener("click", function(){
    document.querySelector(".center").style.display = "none";
    makeQuestion(qNumber);
})

function makeQuestion (questionNumber) {
    var quest0 = document.querySelector("div.newQuest0 > h2");
    quest0.textContent = questions[questionNumber].questionTitle; 
 
    for (var i=0; i < 4; i++) {
        var choiceButton = document.createElement("button");
        choiceButton.textContent = questions[questionNumber].choices[i];
        choiceButton.addEventListener("click",   function(){
            newQuestSection.textContent = "";
            makeQuestion(qNumber);
        })
        newQuestSection.appendChild(choiceButton);
    } 
    qNumber += 1;
}




