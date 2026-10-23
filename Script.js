const homeScreen = document.getElementById("home-screen");
const rulesScreen = document.getElementById("rules-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const startBtn = document.getElementById("start-btn");
const playBtn = document.getElementById("play-btn");
const backBtn = document.getElementById("back-btn");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");
const homeBtn = document.getElementById("home-btn");

const questionNumber = document.getElementById("question-number");
const scoreDisplay = document.getElementById("score");
const progressFill = document.getElementById("progress-fill");
const questionIcon = document.getElementById("question-icon");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options");

const feedback = document.getElementById("feedback");
const feedbackTitle = document.getElementById("feedback-title");
const feedbackText = document.getElementById("feedback-text");

const resultArt = document.getElementById("result-art");
const resultTitle = document.getElementById("result-title");
const resultDescription = document.getElementById("result-description");
const finalScore = document.getElementById("final-score");
const correctCount = document.getElementById("correct-count");
const wrongCount = document.getElementById("wrong-count");

let currentQuestion = 0;
let score = 0;
let correctAnswers = 0;
let answered = false;

const letters = ["A", "B", "C", "D"];

function showScreen(screen) {
  [homeScreen, rulesScreen, quizScreen, resultScreen].forEach(item => {
    item.classList.add("hidden");
  });

  screen.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

startBtn.addEventListener("click", () => {
  showScreen(rulesScreen);
});

backBtn.addEventListener("click", () => {
  showScreen(homeScreen);
});

playBtn.addEventListener("click", () => {
  startGame();
});

restartBtn.addEventListener("click", () => {
  startGame();
});

homeBtn.addEventListener("click", () => {
  showScreen(homeScreen);
});

nextBtn.addEventListener("click", () => {
  currentQuestion++;

  if (currentQuestion < questions.length) {
    renderQuestion();
  } else {
    showResult();
  }
});

function startGame() {
  currentQuestion = 0;
  score = 0;
  correctAnswers = 0;
  answered = false;

  scoreDisplay.textContent = "0";
  showScreen(quizScreen);
  renderQuestion();
}

function renderQuestion() {
  answered = false;

  const q = questions[currentQuestion];

  questionNumber.textContent =
    `NHIỆM VỤ ${String(currentQuestion + 1).padStart(2, "0")} / ${questions.length}`;

  scoreDisplay.textContent = score;
  progressFill.style.width =
    `${(currentQuestion / questions.length) * 100}%`;

  questionIcon.textContent = q.icon || "🧠";
  questionText.textContent = q.question;

  optionsContainer.replaceChildren();

  feedback.classList.add("hidden");
  feedback.classList.remove("good", "bad");
  nextBtn.classList.add("hidden");

  q.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option-btn";

    const letter = document.createElement("span");
    letter.className = "option-letter";
    letter.textContent = letters[index];

    const text = document.createElement("span");
    text.textContent = option;

    button.append(letter, text);

    button.addEventListener("click", () => {
      chooseAnswer(index);
    });

    optionsContainer.appendChild(button);
  });
}

function chooseAnswer(selectedIndex) {
  if (answered) return;

  answered = true;

  const q = questions[currentQuestion];
  const buttons = optionsContainer.querySelectorAll(".option-btn");
  const isCorrect = selectedIndex === q.answer;

  buttons.forEach((button, index) => {
    button.disabled = true;

    if (index === q.answer) {
      button.classList.add("correct");
    }

    if (index === selectedIndex && !isCorrect) {
      button.classList.add("wrong");
    }
  });

  if (isCorrect) {
    score += 10;
    correctAnswers++;

    feedback.classList.add("good");
    feedbackTitle.textContent = "✦ CHÍNH XÁC! +10 ĐIỂM";
  } else {
    feedback.classList.add("bad");
    feedbackTitle.textContent = "♡ CHƯA CHÍNH XÁC RỒI!";
  }

  scoreDisplay.textContent = score;
  feedbackText.textContent = q.explanation;
  feedback.classList.remove("hidden");

  nextBtn.textContent =
    currentQuestion === questions.length - 1
      ? "XEM KẾT QUẢ ✨"
      : "CÂU TIẾP THEO →";

  nextBtn.classList.remove("hidden");
  progressFill.style.width =
    `${((currentQuestion + 1) / questions.length) * 100}%`;
}

function showResult() {
  showScreen(resultScreen);

  finalScore.textContent = score;
  correctCount.textContent = correctAnswers;
  wrongCount.textContent = questions.length - correctAnswers;

  if (score === 100)
