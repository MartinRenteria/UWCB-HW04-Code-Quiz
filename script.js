
// Variables for the timer, score, questions, and time remaining
const startTime = 75;
let timeRemaining = 0;
let score = 0;
let questionon = 0;
let timer;
let answers = document.querySelectorAll('#quizSection button');

var back = document.getElementById("goBack");
var clear = document.getElementById("clearScores");
var quizlayout = document.getElementById("welcome")

// Once the user clicks the start button, the quiz will begin!

function start() {

    var element = document.getElementById("quizSection");
    element.classList.remove("hide");
    document.getElementById("welcome");
    quizlayout.classList.add("hide");

    timeRemaining = 75;
    document.getElementById("timeRemaining").innerHTML = timeRemaining;

    timer = setInterval(function() {
        timeRemaining--;
        document.getElementById("timeRemaining").innerHTML = timeRemaining;
        //proceed to end the game function when timer is below 0 at any time
        if (timeRemaining <= 0) {
            clearInterval(timer);
        }
    }, 1000);
}

    // Quiz questions 
var questions = [{
    question: "How do we write an IF statement for executing some code if 'i' is NOT equal to 10?",
    choices: ["if (i != 10)", "if i <> 10", "if i =! 10", "if (i <= 10)"],
    answer: "if (i != 10)"
},

{
    question: "How do we write an IF statement for executing some code if 'i' is NOT equal to 10?",
    choices: ["if (i != 10)", "if i <> 10", "if i =! 10", "if (i <= 10)"],
    answer: "if (i != 10)"
},

{
    question: "How do we write an IF statement for executing some code if 'i' is NOT equal to 10?",
    choices: ["if (i != 10)", "if i <> 10", "if i =! 10", "if (i <= 10)"],
    answer: "if (i != 10)"
},

{
    question: "How do we write an IF statement for executing some code if 'i' is NOT equal to 10?",
    choices: ["if (i != 10)", "if i <> 10", "if i =! 10", "if (i <= 10)"],
    answer: "if (i != 10)"
},

{
    question: "How do we write an IF statement for executing some code if 'i' is NOT equal to 10?",
    choices: ["if (i != 10)", "if i <> 10", "if i =! 10", "if (i <= 10)"],
    answer: "if (i != 10)"
},

]


/*
// Potential question loop
function next() {
    questionon++;

    if (questionon > quizQuestions.length - 1) {
        GameOver();
        return;

    var quizlayout = "<h2>" + quizQuestions[questionon].question + "</h2>"
    }

    document.getElementById("welcome").innerHTML = quizlayout;
}
*/