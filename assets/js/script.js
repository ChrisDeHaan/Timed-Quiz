//variable declaration
var q = document.getElementById("q");
var a1 = document.getElementById("qcButton1");
var a2 = document.getElementById("qcButton2");
var a3 = document.getElementById("qcButton3");
var a4 = document.getElementById("qcButton4");
var additive = 0

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


//my array of objects for the 5 questions
var objArray = [
    {
        question: "Commonly used data types do NOT include:",
        answers: [
            {a1: "strings", correct: false},
            {a2: "booleans", correct: false},
            {a3: "alerts", correct: true},
            {a4: "numbers", correct: false}
        ]
    },
    {
        question: "Arrays in JavaScript can be used to store _____.",
        answers: [
            {a1: "numbers and strings", correct: false},
            {a2: "other arrays", correct: false},
            {a3: "booleans", correct: false},
            {a4: "all of the above", correct: true}
        ]
    },
    {
        question: "The condition in an if / else statement is enclosed with _____.",
        answers: [
            {a1: "quotes", correct: false},
            {a2: "curly brackets", correct: true},
            {a3: "paranthesis", correct: false},
            {a4: "square brackets", correct: false}
        ]
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: [
            {a1: "JavaScript", correct: false},
            {a2: "terminal/bash", correct: false},
            {a3: "for loops", correct: false},
            {a4: "console.log", correct: true}
        ]
    },
    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        answers: [
            {a1: "commas", correct: false},
            {a2: "curly brackets", correct: false},
            {a3: "quotes", correct: true},
            {a4: "parenthesis", correct: false}
        ]
    },
]
 console.log(objArray[0].answers[3].a4)
//Dynamic input of questions and answers
function dynamicInputElem () {
    q.textContent = objArray[additive].question
    a1.textContent = objArray[additive].answers[0].a1
    a2.textContent = objArray[additive].answers[1].a2
    a3.textContent = objArray[additive].answers[2].a3
    a4.textContent = objArray[additive].answers[3].a4

    additive++

    // if (additive === 6) {

    // }
}