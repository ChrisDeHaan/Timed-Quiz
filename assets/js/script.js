//variable declaration
var q = document.getElementById("q");
var a1 = document.getElementById("qcButton1");
var a2 = document.getElementById("qcButton2");
var a3 = document.getElementById("qcButton3");
var a4 = document.getElementById("qcButton4");
var timerEl = document.querySelector(".timer");
var finalScoreDisplay = document.querySelector(".finishP") ;
var userSubmissionData = document.querySelector("#initials");
var topScore1 = document.getElementById("topScore1");
var topScore2 = document.getElementById("topScore2");
var topScore3 = document.getElementById("topScore3");
var additiveQuestion = 0;
var additiveTruth = 0;
var trueAnswers = ["alerts", "all of the above", "parenthesis", "console.log", "quotes"];
var highScoreValue = "";

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

//Timer function
var timeLeft = 60;

function setTime() {
    var timerInterval = setInterval( () => {
        timeLeft--;
        timerEl.textContent = `Time: ${timeLeft}`;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timerEl.textContent = `Time: 60`;
            timeLeft = 60;
            questionCardsToggle();
            welcomeToggle();
            viewHighscoresButtonToggle();
            alert("Out of time. Please try again!");
            location.reload(); //only way to avoid the whole page breaking by answering incorrectly on the final question and dipping below 0 seconds
        } else if (document.getElementById("finishPage").style.display === "block") {
            highScoreValue = timeLeft
            clearInterval(timerInterval)        
            //Score display
            finalScoreDisplay.textContent = `Your final score is ${highScoreValue}.`
            timeLeft = 60;
        }
    }, 1000);
}

//Event listener for start quiz button
var startQuizBtn = document.getElementById("wpButton")
startQuizBtn.addEventListener("click", () => {
    welcomeToggle();
    questionCardsToggle();
    dynamicInputElem();
    viewHighscoresButtonToggle();
    setTime();
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

    //if statement to decide right and wrong answers
    //basically use an array with correct answers and check the position of that array on each question
    //if the string is the same as the button clicked, ignore,
    //else if, subtract 10 seconds 
    var selectedButton = event.target.textContent
    if (selectedButton != trueAnswers[additiveTruth]) {
        timeLeft -= 10;
    }

    //variable that we use to move through the array 1 position at a time
    additiveTruth++
    //need a way to move to the next page once all questions have been sorted through, so use the value of our variable
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
    if (userSubmissionData.value == '' ) { //don't want blank space names on the high scores
        alert ("please enter initials")
        return;
    }
    viewHighscoresToggle();
    viewFinishPageToggle();
    headerToggle();
    saveScores();
    displayScores();
    eraseInitials();
})

//Event Listener for Try Again
var tryAgainButton = document.getElementById("tryAgain")
tryAgainButton.addEventListener('click', () => {
    viewHighscoresToggle();
    welcomeToggle();
    headerToggle()
    viewHighscoresButtonToggle();

    //reset my incremental variables back to 0 and reset the time displayed
    additiveTruth = 0
    additiveQuestion = 0
    timerEl.textContent = `Time: 60`;
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
        answers: ["quotes", "curly brackets", "parenthesis", "square brackets"]
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

//Dynamic input of questions and answers loop
function dynamicInputElem () {
    q.textContent = objArray[additiveQuestion].question
    a1.textContent = objArray[additiveQuestion].answers[0]
    a2.textContent = objArray[additiveQuestion].answers[1]
    a3.textContent = objArray[additiveQuestion].answers[2]
    a4.textContent = objArray[additiveQuestion].answers[3]

    //increment this variable by 1 so we move through the array by 1 position everytime the function is called
    additiveQuestion++
}

//HighScores Section
var scoresData
if (localStorage.scores === undefined) {
    localStorage.setItem('scores', JSON.stringify([]))
}

//function for gathering and sorting highscore data
function saveScores ()  {
    var scoreSubmission = {
        name: userSubmissionData.value,
        score: highScoreValue
    }
    if (scoresData === undefined) { //don't want to parse unless there is a localStorage object
    scoresData = JSON.parse(localStorage.getItem('scores', (scoresData)))
    }

    scoresData.push(scoreSubmission) //adds the new data to the array of scores
    
    function sortScores (a,b) { //ranks the items in the array
        if (a.score < b.score) {
            return 1
        } else if (a.score > b.score) {
            return -1
        }
        return 0
    }

    scoresData = scoresData.sort(sortScores) //sorts the scores with the highest score up top
    if (scoresData.length > 3) { //removes any scores outside the top 3
        scoresData.pop()
    }

    localStorage.setItem('scores', JSON.stringify(scoresData)) //updates the local storage with the new top 3
    return scoresData
}

//function for displaying the highscores
function displayScores () {
if (scoresData[0] !== undefined) {
    topScore1.innerHTML = `${scoresData[0].name}   :   ${scoresData[0].score}`;
}
if (scoresData[1] !== undefined) {
    topScore2.innerHTML = `${scoresData[1].name}   :   ${scoresData[1].score}`;
}
if (scoresData[2] !== undefined) {
    topScore3.innerHTML = `${scoresData[2].name}   :   ${scoresData[2].score}`;
}
}

//simple function to erase initials
function eraseInitials() {
    userSubmissionData.value = '';
};
