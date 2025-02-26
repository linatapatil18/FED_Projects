const questions = [
    {
        question: "Which is largest animal in the world?",
        answers: [
            { text: "Shark", correct: false},
            { text: "Blue whale", correct: true},
            { text: "Elephant", correct: false},
            { text: "Giraffe", correct: false},
        ]
    },
    {
        question: "Which is the smallest country in the world?",
        answers: [
            { text: "Vatican City", correct: true},
            { text: "Bhutan", correct: false},
            { text: "Nepal", correct: false},
            { text: "Shri Lanka", correct: false},
        ]  
    },
    {
        question: "Which is the largest desert in the world?",
        answers: [
            { text: "Kalahari", correct: false},
            { text: "Gobi", correct: false},
            { text: "Sahara", correct: false},
            { text: "Antarctica", correct: true},
        ]    
    },
    {
        question: "Which is the smallest continent in the world?",
        answers: [
            { text: "Asia", correct: false},
            { text: "Australia", correct: true},
            { text: "Arctic", correct: false},
            { text: "Africa", correct: false},
        ]    
    },
    {
        question: "Which is the name of the weak zone of the earth's crust?",
        answers: [
            { text: "Seismic", correct: true},
            { text: "Cosmic", correct: false},
            { text: "Formic", correct: false},
            { text: "Anaemic", correct: false},
        ]    
    },
    {
        question: "Where was India's first national Museum opened?",
        answers: [
            { text: "Delhi", correct: false},
            { text: "Hyderabad", correct: false},
            { text: "Rajasthan", correct: false},
            { text: "Mumbai", correct: true},
        ]
    },
    {
        question: "In 2019, Which popular singer was awarded the Bharat Ratna award?",
        answers: [
            { text: "Lata Mangeshkar", correct: false},
            { text: "Asha Bhosle", correct: false},
            { text: "Bhupen Hazarica", correct: true},
            { text: "Manna Dey", correct: false},
        ]
    },
    {
        question: "The world's nation 5G mobile network was launched by which country?",
        answers: [
            { text: "Japan", correct: false},
            { text: "Asia", correct: false},
            { text: "South Korea", correct: true},
            { text: "Malaysia", correct: false},
        ]
    },
    {
        question: "When was Pravasi Bhartiya Divas held in Varanasi?",
        answers: [
            { text: "2017", correct: false},
            { text: "2015", correct: false},
            { text: "2019", correct: true},
            { text: "2020", correct: false},
        ]
    },
    {
        question: "Vijay Singh (golf player) is from which country?",
        answers: [
            { text: "UK", correct: false},
            { text: "USA", correct: false},
            { text: "India", correct: false},
            { text: "Fiji", correct: true},
        ]
    }
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}


function resetState() {
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer (e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}


function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
    
})
startQuiz();
