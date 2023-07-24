//Functions
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

function questionGenerationInit (q, a1, a2, a3, a4, btnID1, btnID2) {
    document.getElementById("q").textContent = q;
    document.getElementById("a1").textContent = a1;
    document.getElementById("a2").textContent = a2;
    document.getElementById("a3").textContent = a3;
    document.getElementById("a4").textContent = a4;
    
    document.getElementById(btnID1).id= btnID2
}

//Event listener for start quiz button
var startQuizBtn = document.getElementById("wpButton")
startQuizBtn.addEventListener("click", () => {
    welcomeToggle();
    questionCardsToggle();
    questionGenerationInit("Commonly used data types do NOT include:", "strings", "booleans", "alerts", "numbers", "qcButtonLoop", "qcButtonLoop1");
} );

//Event listener for the questions
var question1Btn = document.getElementById("qcButtonLoop1")
question1Btn.addEventListener("click", () => {
    questionGenerationInit("Arrays in JavaScript can be used to store ____.", "numbers and strings", "other arrays", "booleans", "all of the above", "qcButtonLoop1", "qcButtonLoop2");
})
