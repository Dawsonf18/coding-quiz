var currentQuestion = -1;
var initials = "";
var score = 0;

// localStorage.setItem("")

var answer1 = document.querySelector("#answer1");
var answer2 = document.querySelector("#answer2");
var answer3 = document.querySelector("#answer3");
var answer4 = document.querySelector("#answer4");

var ans = [answer1, answer2, answer3, answer4];

var currentButton = 0;
var userAnswers = [];
var startButton = document.querySelector(".start-quiz");

var scorePage = document.querySelector(".score-page");

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
    
    removeEventListeners();
    
    answer1.addEventListener("click", clickAnswer1);
    answer2.addEventListener("click", clickAnswer2);
    answer3.addEventListener("click", clickAnswer3);
    answer4.addEventListener("click", clickAnswer4);
}

function nextQuestion (){
    document.querySelector(".center").style.display = "none";
    currentQuestion++;
    showQuestion (questions [currentQuestion]); 
}

startButton.addEventListener("click", function () {
    nextQuestion();
});

function removeEventListeners() {
    answer1.removeEventListener("click", clickAnswer1);
    answer2.removeEventListener("click", clickAnswer2);
    answer3.removeEventListener("click", clickAnswer3);
    answer4.removeEventListener("click", clickAnswer4);
}

function userChoiceAction (answerButton) {
    if (currentQuestion >= questions.length - 1) {
        showScoreInput()
    } 
    else {
        userAnswers.push(answerButton.textContent);
        nextQuestion();
    }
}

function clickAnswer1() {
    userChoiceAction (ans[0]);
}

function clickAnswer2() {
    userChoiceAction (ans[1]);
}

function clickAnswer3() {
    userChoiceAction (ans[2]);
}

function clickAnswer4() {
    userChoiceAction (ans[3]);
}


function showScoreInput () {
    var questionDiv = document.querySelector("#question");
    questionDiv.remove();


    for(var i = 0; i < questions.length; i++) {
        if (questions[i].answer === userAnswers[i]){
            score = score + 5;
        }
    } 


    var inp = document.createElement("input");

    inp.addEventListener("keydown", function(key) {
        if(key.code === "Enter") {
           initials = document.querySelector("input").value;
           showScore();
        }
    });

    scorePage.appendChild(inp);
    scorePage.style.display = "flex";

}

function showScore() {
    scorePage.innerHTML = "Your score is " + score + "  " + initials;
    document.querySelector('#restart-button').addEventListener('click', function(){
        window.location.reload();
        return false;
    });   

    const timeH = document.querySelector("h2");
    let timeSecond = 75;

    timeH.innerHTML = "00:${timeSecond}";

    const countDown = setInterval (()=>{
        timeSecond--; 
        if(timeSecond <= 0 || timeSecond < 1){
            clearInterval(countDown);
        }
    },1000);
}























