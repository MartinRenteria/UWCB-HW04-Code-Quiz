// Quiz questions 
var quizQuestions = [{
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

// Variables for the timer, score, questions, and time remaining
var timer;
var startTimer = 75;
var score = 0;
var questionon = 0;
document.getElementById("start").addEventListener("click", start)

// Once the user clicks the start button, the quiz will begin!

function start() {

    document.getElementById("startTimer").innerHTML = startTimer;

    timer = setInterval(function() {
        startTimer--;
        document.getElementById("startTimer").innerHTML = startTimer;
        //When the timer hits zero, the game will end 
        if (startTimer <= 0) {
            clearInterval(timer);
            GameOver();
        }
    }, 1000);

    next();
}

// If the answer is correct, no changes will be made to the timer and the user will receive 10 points 
function correctAnswer() {
    score += 20;
    next();
}

// If the answer gets the answer wrong, the user will lose 10 seconds on the timer and not receive points. 
function incorrectAnswer() {
    startTimer -= 10;
    next();
}

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