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
    ifElseDisplay(toggle);
}

//Event listener for start quiz button
var startQuizBtn = document.getElementById("wpButton")
startQuizBtn.addEventListener("click", () => {
    welcomeToggle();
    questionCardsToggle();
    dynamicInputElem();
} );

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

    dynamicInputElem();
})

//my array of objects for the 5 questions
var objArray = [
    {
        question: "Commonly used data types do NOT include:",
        answers: [
            {a1: "strings"},
            {a2: "booleans"},
            {a3: "alerts"},
            {a4: "numbers"}
        ]
    },
    {
        question: "Arrays in JavaScript can be used to store _____.",
        answers: [
            {a1: "numbers and strings"},
            {a2: "other arrays"},
            {a3: "booleans"},
            {a4: "all of the above"}
        ]
    },
    {
        question: "The condition in an if / else statement is enclosed with _____.",
        answers: [
            {a1: "quotes"},
            {a2: "curly brackets"},
            {a3: "paranthesis"},
            {a4: "square brackets"}
        ]
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: [
            {a1: "JavaScript"},
            {a2: "terminal/bash"},
            {a3: "for loops"},
            {a4: "console.log"}
        ]
    },
    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        answers: [
            {a1: "commas"},
            {a2: "curly brackets"},
            {a3: "quotes"},
            {a4: "parenthesis"}
        ]
    },
]
 console.log(objArray[0].answers[3].a4)
//Dynamic input of questions and answers
function dynamicInputElem () {
    q.textContent = objArray[additiveQuestion].question
    a1.textContent = objArray[additiveQuestion].answers[0].a1
    a2.textContent = objArray[additiveQuestion].answers[1].a2
    a3.textContent = objArray[additiveQuestion].answers[2].a3
    a4.textContent = objArray[additiveQuestion].answers[3].a4

    additiveQuestion++

    // if (additive === 6) {

    // }
}