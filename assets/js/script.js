//variable declaration
var q = document.getElementById("q");
var a1 = document.getElementById("qcButton1");
var a2 = document.getElementById("qcButton2");
var a3 = document.getElementById("qcButton3");
var a4 = document.getElementById("qcButton4");
var additiveQuestion = 0
var additiveTruth = 0
var trueAnswers = ["alerts", "all of the above", "curly brackets", "console.log", "quotes"]

//Toggle Functions
function ifElseDisplay (toggle) { // if/else function for toggling visibility
    if (toggle.style.display === "none") {
        toggle.style.display = "block";
    } else {
        toggle.style.display = "none";
    }
}

function welcomeToggle () { // Welcome button's  toggle
    var toggle = document.getElementById("welcomePage");
    ifElseDisplay (toggle);
}

function questionCardsToggle () { // question card's toggle
    var toggle = document.getElementById("questCardsPage")
    ifElseDisplay (toggle);
}

function viewHighscoresToggle () { // View Highscores toggle
    var toggle = document.getElementById("highScoresPage")
    ifElseDisplay (toggle);
}

function viewHighscoresButtonToggle() { //actual View Highscores button toggle
    var toggle = document.getElementById("viewHighscores")
    ifElseDisplay (toggle);
}

function viewFinishPageToggle () { //Finish page toggle
    var toggle = document.getElementById("finishPage")
    ifElseDisplay (toggle);
}

function headerToggle () {//header toggle
    var toggle = document.getElementById("header")
    if (toggle.style.display === "none") {
        toggle.style.display = "flex";
    } else {
        toggle.style.display = "none";
    }
}

//Event listener for start quiz button
var startQuizBtn = document.getElementById("wpButton")
startQuizBtn.addEventListener("click", () => {
    welcomeToggle();
    questionCardsToggle();
    dynamicInputElem();
    viewHighscoresButtonToggle();
} );

//Event listener for View Highscores
var viewHighScores = document.getElementById("viewHighscores")
viewHighScores.addEventListener("click", () => {
    welcomeToggle();
    viewHighscoresToggle();
    headerToggle();
    viewHighscoresButtonToggle();
})

//Event listener for the answer buttons
var quizButtons = document.getElementById('questCardsPage')
quizButtons.addEventListener('click', (event) => { //begin code from Aliaksandr Sushkevich
    var isButton = event.target.nodeName === 'BUTTON';
    if (!isButton) {
        return;
    } //end code from Aliaksandr Sushkevich

    var selectedButton = event.target.textContent
    if (selectedButton != trueAnswers[additiveTruth]) {
        console.log ("wrong answer")
    } else {
        console.log ("correct")
    }
    additiveTruth++
    console.log (additiveTruth);
    if (additiveTruth === 5) {
        questionCardsToggle();
        viewFinishPageToggle();
        return;
    }

    dynamicInputElem();
})

//Event listener for submit button on the finish page
var submissionButton = document.getElementById("submissionButton")
submissionButton.addEventListener('click', () => {
    viewHighscoresToggle();
    viewFinishPageToggle();
    headerToggle();
})

//Event Listener for Try Again
var tryAgainButton = document.getElementById("tryAgain")
tryAgainButton.addEventListener('click', () => {
    viewHighscoresToggle();
    welcomeToggle();
    headerToggle()
    viewHighscoresButtonToggle();
    additiveTruth = 0
    additiveQuestion = 0
})

//my array of objects for the 5 questions
var objArray = [
    {
        question: "Commonly used data types do NOT include:",
        answers: ["strings", "booleans", "alerts", "numbers"]
    },
    {
        question: "Arrays in JavaScript can be used to store _____.",
        answers: ["numbers and strings", "other arrays", "booleans", "all of the above"]
    },
    {
        question: "The condition in an if / else statement is enclosed with _____.",
        answers: ["quotes", "curly brackets", "paranthesis", "square brackets"]
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: ["JavaScript", "terminal/bash", "for loops", "console.log"]
    },
    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        answers: ["commas", "curly brackets", "quotes", "parenthesis"]
    },
]
 console.log(objArray[0].answers[3].a4)
//Dynamic input of questions and answers
function dynamicInputElem () {
    q.textContent = objArray[additiveQuestion].question
    a1.textContent = objArray[additiveQuestion].answers[0]
    a2.textContent = objArray[additiveQuestion].answers[1]
    a3.textContent = objArray[additiveQuestion].answers[2]
    a4.textContent = objArray[additiveQuestion].answers[3]

    additiveQuestion++
}