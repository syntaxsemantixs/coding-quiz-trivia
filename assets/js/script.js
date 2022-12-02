var startScreen = document.querySelector("#startscreen");
var questionPage = document.querySelector("#question-page");
var timeLeft = document.querySelector("#timer");
var finish = document.querySelector("#finish");
var scoreBoard = document.querySelector("#submit-page")
var finalScore = document.querySelector("#final-score")
var startBtn = document.querySelector("#start-button")

var secondsLeft = 59;
var totalScore = 0;

    function start() {
        startScreen.style.display = "none";
        questionPage.style.display = "block";
        timercountdown();
    }

   function timercountdown() {
    
    var timeInterval = setInterval(function (){

        secondsLeft--;
        timeLeft.textContent = "Seconds: "  + secondsLeft;

        if (secondsLeft <= 0) {
            clearInterval(timeInterval);
            timeLeft.textContent = "Time's up!"
            finish.textContent = "Time's up!"
            endquiz();
        }
    }, 1000)
   }

   function endquiz() {
    questionPage.style.display = "none";
    scoreBoard.style.display = "block";
    finalScore.textContent = "Final Score = " + totalScore ;
    timeLeft.style.display = "none";

   }

startBtn.addEventListener("click", start);