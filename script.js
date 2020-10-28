// Variables for the timer, score, questions, and time remaining
var timer;
var timeRemaining = 0;
var score = 0;
var questionon = 0;

// Once the user clicks the start button, the quiz will begin!
function start() {

    timeRemaining = 75;
    document.getElementById("timeRemaining").innerHTML = timeRemaining;

    timer = setInterval(function() {
        timeRemaining--;
        document.getElementById("timeRemaining").innerHTML = timeRemaining;
        //When the timer hits zero, the game will end 
        if (timeRemaining <= 0) {
            clearInterval(timer);
            GameOver();
        }
    }, 1000);

    next();
}