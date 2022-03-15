var startButton = document.querySelector(".start-button");
var questions = [
    {
        questionTitle: 'Commonly used data types DO Not include_______.',
        choices: ["string", "booleans", "alerts", "numbers"]
    }
]
var newQuestSection = document.querySelector(".newQuest0");


startButton.addEventListener("click", function(){
    document.querySelector(".center").style.display = "none";
    newQuest1()
})

var  newQuest1 = function () {
    var quest0 = document.querySelector(".question");
    quest0.textContent = questions[0].questionTitle 
 
    for (var i=0; i < 4; i++) {
        var choiceButton = document.createElement("button");
        choiceButton.textContent = questions[0].choices[i];
        choiceButton.addEventListener("click", function(){
            document.querySelector(".newQuest0").style.display = "none";
        })
        newQuestSection.appendChild(choiceButton)
    }
}















































//  const myQuestions = [
//     {

//     }
// ]
//         question: "Commonly used data types DO Not include:",
//         answers: {
//             a: "strings",
//             b: "booleans",
//             c: "alerts",
//             d: "numbers"
//         },
//         correctAnswer: "c"
//     },
//     {
//         question: "The condition in an if/ else statement is enclosed with_______.",
//         answers: {
//             a: "quotes",
//             b: "curly brackets",
//             c: "parenthesis",
//             d: "square brackets"
//         },
//         correctAnswer: "c" 
//     },
    
    
// ]

