// Side Nav-Bar
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("header").style.marginLeft = "250px";
    document.getElementById("header2").style.marginLeft = "250px";


}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("header").style.marginLeft = "0";
    document.getElementById("header2").style.marginLeft = "0";

}


//Quiz 
const startButton = document.getElementById("button");
const startBox = document.getElementById("startBox");
const quizBox = document.getElementById("quizBox");
const answerbutton = document.querySelector("#wrong1");
const wrongAnswerBox = document.getElementById("wrongAnswer");
const correctAnswerBox = document.getElementById("correctAnswer");


function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

const q1 = new Question("We wouldnt be here without ....?", ["Steve Jobs", "Hello World", "Steve Balmer", "Silicon Valley"], "Hello World");

var question = q1.text;
var choices = q1.choices;
var answer = q1.answer;

function loadQuestion() {
    document.getElementById("question").innerHTML = question;
}

function loadAnswers() {
    for (var i = 0; i < choices.length; i++)
        document.getElementById("answer" + i).innerHTML = choices[i];

}

function values() {
    for (var i = 0; i < choices.length; i++)
        document.getElementById("answer" + i).value = choices[i];

}

loadQuestion();
loadAnswers();
values();

function backToQuestions() {
    wrongAnswerBox.classList.add("hide");
    quizBox.classList.remove("hide");
}

function wrongAnswer() {
    quizBox.classList.add("hide");
    wrongAnswerBox.classList.remove("hide");
    setTimeout(backToQuestions, 1100);

}

function correctAnswer() {
    quizBox.classList.add("hide");
    correctAnswerBox.classList.remove("hide");
}

function startQuiz() {

    startBox.classList.add("hide");
    quizBox.classList.remove("hide");

}



function run(event) {
    let x = event.target;

    if (x.value === answer) {
        correctAnswer();
    } else {
        wrongAnswer();

    }

}

startButton.addEventListener("click", startQuiz); // Start Butonu na click eventi ekleyip Quiz i başlatıyoruz