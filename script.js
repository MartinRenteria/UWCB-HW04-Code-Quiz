
// Variables for the timer, score, questions, and time remaining
var time = 0;
let score = 0;
let currentQuestion;
let randomQuestion;
let questionIndex;
let timer;

// Starting page variables 
var startBtn = document.getElementById("start");
startBtn.addEventListener("click", start);
var quizStart = document.getElementById("welcome");
document.getElementById("timeRemaining").innerHTML = time;

// Question and choice buttons 
var quizLayout = document.getElementById("quizSection");
var questionTitle = document.getElementById("quizQuestion");
var choiceBtn1 = document.getElementById("btn1");
var choiceBtn2 = document.getElementById("btn2");
var choiceBtn3 = document.getElementById("btn3");
var choiceBtn4 = document.getElementById("btn4");

// Correct or incorrect display when answering quiz questions
var correctDisplay = document.getElementById("correct");
var wrongDisplay = document.getElementById("wrong");

// Post quiz variables
var endPage = document.getElementById("end");
var inputInitials = document.getElementById("userInitials");
var submit = document.getElementById("submitBtn");

// Highscore page variables
var highscorePage = document.getElementById("highScores");
var back = document.getElementById("goBack");
var clear = document.getElementById("clearScores");

// Once the user clicks the start button, the quiz will begin!
    function start() {

        //Time will start at 75 seconds 
        time = 75;
        document.getElementById("timeRemaining").innerHTML = time;
        // When the quiz starts, the starting page will disappear and the question page will display
        quizLayout.classList.remove("hide");
        welcome.classList.add("hide");
        // Starts the quiz in a random array so that it's never the same questions and answers starting out
        questionIndex = 0;
        randomQuestion = questions.sort(() => Math.random() - .5);
                    
        // Starting questions will be displayed to the appropriate html background
        questionDisplay(randomQuestion, questionIndex);
    
        // Time will go down by 1 second each time and if it goes below 0 the quiz will stop and go to the score page
        timer = setInterval(function() {
            time--;
            document.getElementById("timeRemaining").innerHTML = time;
            //proceed to end the game function when timer is below 0 at any time
            if (time <= 0) {
                clearInterval(timer);
                finish(); 
            }
        }, 1000);
    
    }

function questionDisplay(randomQuestion, questionIndex) {

    // The user is presented with a question. 
    let currentQuestion = randomQuestion[questionIndex];
    questionTitle.innerText = currentQuestion.question

    // The innerText of each btn is set to the currentQuestions answers.
    choiceBtn1.innerText = '1. ' + currentQuestion.choices[0] 
    choiceBtn2.innerText = '2. ' + currentQuestion.choices[1]
    choiceBtn3.innerText = '3. ' + currentQuestion.choices[2]
    choiceBtn4.innerText = '4. ' + currentQuestion.choices[3]

    // The questions will be presented with the appropriate button
    choiceBtn1.value = currentQuestion.choices[0]
    choiceBtn2.value = currentQuestion.choices[1]
    choiceBtn3.value = currentQuestion.choices[2]
    choiceBtn4.value = currentQuestion.choices[3]

    let answer = currentQuestion.answer

    console.log(answer)
    console.log(choiceBtn1.value)
    console.log(choiceBtn2.value)
    console.log(choiceBtn3.value)
    console.log(choiceBtn4.value)

    answerClick(answer)

};

function correct() {

    // increment question index
    questionIndex++;

    // This will remove the hide class attached to these elements so the user knows they are wrong.
    correctDisplay.classList.remove('hide')

    setTimeout(() => {
        // This will add the hide class again
        correctDisplay.classList.add('hide')
    }, 1000);

    resetQuestions();

    // Runs the next array of questions 
    setTimeout(questionDisplay(randomQuestion, questionIndex), 1000);
}

function resetQuestions() {
    
    choiceBtn1.removeAttribute('value');
    choiceBtn2.removeAttribute('value');
    choiceBtn3.removeAttribute('value');
    choiceBtn4.removeAttribute('value');
};

function incorrect() {

    // Decreases 10 seconds off the timer for an incorrect answer
     time -= 10;

    // Displays 'wrong' letting user know they were incorrect
    wrongDisplay.classList.remove('hide')

    // This will add the hide class again
    setTimeout(() => {
        wrongDisplay.classList.add('hide')
    }, 1000);
};


function answerClick(answer) {
    
    choiceBtn1.addEventListener('click', () => {
        // Correct will be displayed to the screen when the correct answer is clicked
        if (choiceBtn1.value == answer) {
            correct();
        }
        // Incorrect will be displayed to the screen when the wrong answer is clicked
        else {
            incorrect();
            return;
        };
    });
    choiceBtn2.addEventListener('click', () => {
        if (choiceBtn2.value == answer) {
            correct();
        }
        else {
            incorrect();
            return;
        };
    });
    choiceBtn3.addEventListener('click', () => {
        if (choiceBtn3.value == answer) {
            correct();
        }
        else {
            incorrect()
            return;
        };
    });
    choiceBtn4.addEventListener('click', () => {
        if (choiceBtn4.value == answer) {
            correct();
        }
        else {
            incorrect()
            return;
        };
    });
};

function finish() {
    clearInterval(timer);
    quizLayout.classList.add("hide");
    endPage.classList.remove("hide");
}
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
