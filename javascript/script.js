// Get references to various elements in the HTML
const questionContainer = document.getElementById("question-container");
const questionImage = document.getElementById("question-image");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const correctCount = document.getElementById("correct-count");
const incorrectCount = document.getElementById("incorrect-count");
const resultContainer = document.getElementById("result-container");
const resultMessage = document.getElementById("result-message");
const numQuestions = questions.length; // Get the total number of questions
const happyMusic = document.getElementById("happy-music"); 
const sadMusic = document.getElementById("sad-music"); 

// Initialize variables to keep track of quiz state
let currentQuestionIndex = 0;
let scoreCorrect = 0;
let scoreIncorrect = 0;
let shuffledQuestions = [];

// Function to redirect to the quiz page (quiz.html)
function goToQuizPage() {
    window.location.href = "quiz.html";
}

// Function to redirect to the first page (index.html)
function goToFirstPage() {
    window.location.href = "index.html";
}

// Function to start the quiz
function startQuiz() {
    // Shuffle the array of questions
    shuffledQuestions = shuffleArray(questions);
    currentQuestionIndex = 0; 
    scoreCorrect = 0; 
    scoreIncorrect = 0; 
    updateScore(); 
    resultContainer.style.display = "none"; 
    loadQuestion(currentQuestionIndex); 
}

// Function to load a question
function loadQuestion(index) {
    if (index < shuffledQuestions.length) {
        // Get the current question
        const question = shuffledQuestions[index];
        questionImage.src = questions[currentQuestionIndex].image; 
        questionText.textContent = question.question; 

        // Clear and populate the options for the question
        optionsContainer.innerHTML = "";
        for (let i = 0; i < question.options.length; i++) {
            const option = document.createElement("button");
            option.className = "option";
            option.textContent = question.options[i];
            option.addEventListener("click", () => checkAnswer(i));
            optionsContainer.appendChild(option);
        }
    } else {
        // If all questions are answered, end the quiz
        endQuiz();
    }
}

// Function to check the selected answer
function checkAnswer(selectedIndex) {
    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    if (selectedIndex === currentQuestion.answer) {
        scoreCorrect++; 
    } else {
        scoreIncorrect++; 
    }

    currentQuestionIndex++; // Move to the next question
    updateScore(); 
    loadQuestion(currentQuestionIndex); 
}

// Function to update the displayed scores
function updateScore() {
    correctCount.textContent = scoreCorrect; 
    incorrectCount.textContent = scoreIncorrect; 
}

// Function to end the quiz
function endQuiz() {
    // Check if the user won (scored more than half the questions)
    if (scoreCorrect >= Math.floor(numQuestions / 2) + 1) {
        resultMessage.textContent = "Congratulations, You Won the Game!";
        happyMusic.play(); 
        sadMusic.pause(); 
        document.getElementById("dancing-icon").style.display = "block"; 
        document.getElementById("sad-icon").style.display = "none"; 
        document.getElementById("happy-music-container").style.display = "block"; 
        document.getElementById("sad-music-container").style.display = "none"; 
        // Change the background color to green for a win
        document.getElementById("quiz-container").style.backgroundColor = "rgba(4, 161, 17, 0.7)";
    } else {
        resultMessage.textContent = "You did good but not enough for this time. Try Again!";
        sadMusic.play(); 
        happyMusic.pause(); 
        document.getElementById("dancing-icon").style.display = "none"; 
        document.getElementById("sad-icon").style.display = "block"; 
        document.getElementById("happy-music-container").style.display = "none"; 
        document.getElementById("sad-music-container").style.display = "block"; 
        // Change the background color to red for a loss
        document.getElementById("quiz-container").style.backgroundColor = "rgba(228, 33, 33, 0.7)";
    }

    // Get the user's score history from local storage or initialize an empty array
    const scores = JSON.parse(localStorage.getItem("quizScores")) || [];
    scores.push({
        correctAnswers: scoreCorrect,
        incorrectAnswers: scoreIncorrect
    });
    // Store the updated score history in local storage
    localStorage.setItem("quizScores", JSON.stringify(scores));

    resultContainer.style.display = "block"; 
    updateScoreTable(); 
}

// Function to reset the quiz
function resetQuiz() {
    startQuiz(); 
    happyMusic.pause(); 
    happyMusic.currentTime = 0; 
    sadMusic.pause(); 
    sadMusic.currentTime = 0; 
    // Reset the background color to its default value
    document.getElementById("quiz-container").style.backgroundColor = "rgba(0, 0, 61, 0.75)";
}

// Event listener to start the quiz when the page loads
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

// Function to update the score history table
function updateScoreTable() {
    const scoreTable = document.getElementById("score-table");
    const tbody = scoreTable.querySelector("tbody");

    // Get the user's scores from local storage or initialize an empty array
    const scores = JSON.parse(localStorage.getItem("quizScores")) || [];

    // Clear the existing table content
    tbody.innerHTML = "";

    // Populate the table with the user's scores for each attempt
    for (let i = 0; i < scores.length; i++) {
        const score = scores[i];
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${i + 1}</td>
            <td>${score.correctAnswers}</td>
            <td>${score.incorrectAnswers}</td>
        `;
        tbody.appendChild(row);
    }
}

// Call the updateScoreTable() function when the page loads
window.addEventListener("load", updateScoreTable);

// Event listener to clear scores when the window is closed
window.addEventListener("beforeunload", () => {
    localStorage.removeItem("quizScores"); 
});
