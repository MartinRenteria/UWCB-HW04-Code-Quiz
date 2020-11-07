var highScore = document.querySelector("#High-Scores");
var clearHighScores = document.querySelector("#clear");

function highscores() {
    if (localStorage.getItem("High-Scores") === null) {
        highScore.textContent = "No highscores available.";
    } 
    else {

    var HighScoreEL = localStorage.getItem("High-Scores");
    var HighScoreObject = JSON.parse(HighScoreEL);

    var highscoreLi = document.createElement("ol");
    highscoreLi.classList.add("highscoreBackground");
    highScore.appendChild(highscoreLi);
    var questionList;

    for(var x in HighScoreObject) {
        questionList = document.createElement("li");
        questionList.innerHTML = `initials: ${HighScoreObject[x].initials} | score: ${HighScoreObject[x].score}`;
        highscoreLi.appendChild(questionList);
        } 
    }
}

clearHighScores.addEventListener("click", function(){
    localStorage.clear();
    highscores();
})

highscores();


