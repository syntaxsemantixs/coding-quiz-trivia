var startScreen = document.querySelector("#startscreen");
var questionPage = document.querySelector("#question-page");
var timeLeft = document.querySelector("#timer");
var finish = document.querySelector("#finish");
var scoreBoard = document.querySelector("#submit-page")
var finalScore = document.querySelector("#final-score")
var startBtn = document.querySelector("#start-button")
var askQuestion = document.querySelector("#ask-question")
var choices = document.querySelector("#choices")
var responses = document.querySelector("#responses")
var correct = document.querySelector("#correct")
var incorrect = document.querySelector("#incorrect")

var secondsLeft = 59;
var totalScore = 0;
var questionIndex = 0
var timeOut = 3

var questions = [
    {
        question: "Question 1 : What symbols do you use to signify a string?",
        choices: ["Commas", "Parenthesis", "Asterisks", "Quotes"],
        answer: "Quotes"
    },
    {
        question: "Question 2 : Which of the following is the proper syntax to reference a class in CSS?",
        choices: [".start", "#start", "!start", "*start"],
        answer: ".start"
    },
    {
        question: "Question 3 : What programming language is the property display used for? ",
        choices: ["HTML", "CSS", "JavaScript", "Pyton"],
        answer: "CSS"
    },
    {
        question: "Question 4 : When in doubt, what is a great resource to find coding answers you may not have learned yet?",
        choices: ["Book", "Magazine", "Google", "The Library"],
        answer: "Google"
    },
    {
        question: "Question 5 : What is a good function in JavaScript to use when you do not know what a variable or message does?",
        choices: ["Console.log()", "document.querySelector()", "variable.getElementID()", "variable.textContent"],
        answer: "Consolle.log()"
    },
    {
        question: "Question 6 : What do HTML elements allow you to put into them?",
        choices: ["Text", "Toast", "Styles", "Logic"],
        answer: "Text"
    },
    {
        question: "Question 7 : What is a way to view the current code acting upon a page?",
        choices: ["Search Bar", "Inspect", "Console,", "Application"],
        answer: "Inspect"
    },
    {
        question: "Question 8 : What website can be used to store open source projects?",
        choices: ["Youtube", "Google Docs", "Microsoft Teams", "GitHub"],
        answer: "GitHub"
    },
    {
        question: "Question 9 : What command can you use in the terminal to make a directory?",
        choices: ["cd", "cp","pwd","mkdir"],
        answer: "mkdir"
    },
    {
        question: "Question 10 : What acroynm does not contain the word INTERFACE in it?",
        choices: ["API","KPI","UI","SPI"],
        answer: "KPI"
    }
]

function start() {
    startScreen.style.display = "none";
    questionPage.style.display = "block";
    timercountdown();
    displayquestion ();

}

function displayquestion () {
    choices.innerHTML = ""
    var currentQuestion = questions[questionIndex]
    askQuestion.textContent = currentQuestion.question
    for (let i = 0; i < currentQuestion.choices.length; i++) {
        var answerbutton = document.createElement("button")
        answerbutton.textContent = currentQuestion.choices[i]
        choices.append(answerbutton)
        answerbutton.addEventListener("click",function (e) {
            var buttontext = e.target.textContent
            var answer = questions[questionIndex].answer
            if (answer === buttontext) {
                incorrect.style.display = "none"
                correct.style.display = "block"
                totalScore = totalScore + 10
            }else {
                correct.style.display = "none"
                incorrect.style.display = "block"
                secondsLeft = secondsLeft -10
            }
            questionIndex++;
            displayquestion();
        })
    }

}



function timercountdown() {

    var timeInterval = setInterval(function () {

        secondsLeft--;
        timeLeft.textContent = "Seconds: " + secondsLeft;

        if (secondsLeft <= 0) {
            clearInterval(timeInterval);
            timeLeft.textContent = "Time's up!"
            finish.textContent = "Time's up!"
            endquiz()
        }
    }, 1000)
}

function endquiz() {
    questionPage.style.display = "none";
    scoreBoard.style.display = "block";
    finalScore.textContent = "Final Score = " + totalScore;
    timeLeft.style.display = "none";

}

function saveScores () {
    
}

startBtn.addEventListener("click", start);