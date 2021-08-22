var startButton = document.getElementById('start-btn')
var nextButton = document.getElementById('next-btn')
var questionContainerElement = document.getElementById('question-container')
var questionElement = document.getElementById('question')
var answerButtonsElement = document.getElementById('answer-buttons')

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Replay'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

var questions = [
  {
    question: 'A loop that never ends is referred to as a(n)_________.',
    answers: [
      { text: 'While loop', correct: false },
      { text: 'Infinite loop', correct: true },
      { text: 'Recursive loop', correct: false},
      { text: ') for loop', correct: false },
    ]
  },
  {
    question: 'Kim has just constructed her first for loop within the Java language.  Which of the following is not a required part of a for loop?',
    answers: [
      { text: 'Variable', correct: true },
      { text: 'Initilization', correct: false },
      { text: ') increment', correct: false },
      { text: 'Condition', correct: false }
    ]
  },
  {
    question: '_______ is the process of finding errors and fixing them within a program.',
    answers: [
      { text: 'Compiling', correct: false },
      { text: 'Debugging', correct: true },
      { text: 'Scanning', correct: false },
      { text: 'Executing', correct: false }
    ]
  },
  {
    question: 'How Old Am I?',
    answers: [
      { text: '24', correct: false },
      { text: '21', correct: false },
      { text: '18', correct: true },
      { text: '19', correct: false}
    ]
  }
]
var timeEl = document.getElementById("timer")
var secondsLeft = 60;
function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " time remaining.";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
    }

  }, 1000);
}