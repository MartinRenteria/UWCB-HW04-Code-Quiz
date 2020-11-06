// Starting page variables 
var startBtn = document.querySelector("start");
startBtn.addEventListener("click", start);
var quizStart = document.querySelector("main");
var timeEl = document.querySelector("#timeRemaining");

//Variables for timer, questions list/answers, and for end result
var timeLeft = 0;
var score = 0;
var initialTime =  75;
var questionEl;
var answerEl;
var Output;
var ListEl
var button


    // Quiz questions 
var questions = [{
    question: "How do we write an IF statement for executing some code if 'i' is NOT equal to 10?",
    choices: ["if (i != 10)", "if i <> 10", "if i =! 10", "if (i <= 10)"],
    answer: "if (i != 10)",
},

{
    question: "Inside which HTML element do we put the JavaScript?",
    choices: ["<script>", "<scripting>", "<javascript", "<js>"],
    answer: "<script>",
},

{
    question: "What is the correct JavaScript syntax to change the content of the HTML element below?",
    choices: ["document.getElementById('quiz').innerHTML = 'Hello World!'", "document.getElement('p').innerHTML = 'Hello World!';", "#quiz.innerHTML = 'Hello World!'';", "document.getElement('quiz').innerHTML = 'Hello World!'"],
    answer: "document.getElementById('quiz').innerHTML = 'Hello World!'",
},

{
    question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
    choices: ["<script src='xxx.js'>", "<script href='xxx.js'>", "<script name='xxx.js'>", "script type='javascript'"],
    answer: "<script src='xxx.js'>",
},

{
    question: "Where is the correct place to insert a JavaScript?",
    choices: ["The <body> section", "The <head> section", "Both the <head> section and the <body> section are correct", "The <header> section"],
    answer: "Both the <head> section and the <body> section are correct",
},

]

function start() {
    var questionIndex = 0;

    start();

    questionEl = document.createElement("h2");
    answerList = document.createElement("ol");
    result = document.createElement("p");

    makeQuestionsAppear(questionIndex);
}

function makeQuestionsAppear(questionIndex) {
    quizStart.innerHTML  = "";
    questionEl.innerHTML = "";
    answerList.innerHTML = "";

}