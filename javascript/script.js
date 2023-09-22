const questionContainer = document.getElementById("question-container");
const questionImage = document.getElementById("question-image");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const correctCount = document.getElementById("correct-count");
const incorrectCount = document.getElementById("incorrect-count");
const resultContainer = document.getElementById("result-container");
const resultMessage = document.getElementById("result-message");
const numQuestions = questions.length;
const happyMusic = document.getElementById("happy-music");
const sadMusic = document.getElementById("sad-music");

let currentQuestionIndex = 0;
let scoreCorrect = 0;
let scoreIncorrect = 0;
let shuffledQuestions = [];

function goToQuizPage() {
    // Redirect to the quiz page (quiz.html)
    window.location.href = "quiz.html";
}

function startQuiz() {

    shuffledQuestions = shuffleArray(questions);
    currentQuestionIndex = 0;
    scoreCorrect = 0;
    scoreIncorrect = 0;
    updateScore();
    resultContainer.style.display = "none";
    loadQuestion(currentQuestionIndex);
}

function loadQuestion(index) {
    if (index < shuffledQuestions.length) {
        const question = shuffledQuestions[index];
        questionImage.src = questions[currentQuestionIndex].image;
        questionText.textContent = question.question;

        optionsContainer.innerHTML = "";
        for (let i = 0; i < question.options.length; i++) {
            const option = document.createElement("button");
            option.className = "option";
            option.textContent = question.options[i];
            option.addEventListener("click", () => checkAnswer(i));
            optionsContainer.appendChild(option);
        }
    } else {
        endQuiz();
    }
}

function checkAnswer(selectedIndex) {
    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    if (selectedIndex === currentQuestion.answer) {
        scoreCorrect++;
    } else {
        scoreIncorrect++;
    }

    currentQuestionIndex++;
    updateScore();
    loadQuestion(currentQuestionIndex);
}

function updateScore() {
    correctCount.textContent = scoreCorrect;
    incorrectCount.textContent = scoreIncorrect;
}

function endQuiz() {


    if (scoreCorrect >= (Math.floor(numQuestions / 2)) + 1) {
        resultMessage.textContent = "Congratulations, You Won the Game!";
        happyMusic.play(); // Play happy music
        sadMusic.pause(); // Pause sad music
        document.getElementById("dancing-icon").style.display = "block"; // Show the dancing icon
        document.getElementById("sad-icon").style.display = "none"; // Hide the sad icon
        document.getElementById("happy-music-container").style.display = "block"; // Show happy music controls
        document.getElementById("sad-music-container").style.display = "none"; // Hide sad music controls
    } else {
        resultMessage.textContent = "You did good but not enough for this time. Try Again!";
        sadMusic.play(); // Play sad music
        happyMusic.pause(); // Pause happy music
        document.getElementById("dancing-icon").style.display = "none"; // Hide the dancing icon
        document.getElementById("sad-icon").style.display = "block"; // Show the sad icon
        document.getElementById("happy-music-container").style.display = "none"; // Show happy music controls
        document.getElementById("sad-music-container").style.display = "block"; // Hide sad music controls
    }

    resultContainer.style.display = "block";
}


function resetQuiz() {
    startQuiz();
    happyMusic.pause(); // Play happy music
    sadMusic.pause(); // Pause sad music
}

// Start the quiz when the page loads
window.addEventListener("load", startQuiz);

// Function to shuffle an array using Fisher-Yates algorithm
function shuffleArray(array) {
    const shuffled = array.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}
