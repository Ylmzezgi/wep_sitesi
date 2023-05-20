const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

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
    startButton.innerText = 'Tekrar Başlatmak İçin Tıkla'
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

const questions = [
  {
    question: 'Sivas ne zaman kurulmuştur?',
    answers: [
      { text: '1967', correct: false },
      { text: '1461', correct: true },
      { text: '1453', correct: false },
      { text: '2023', correct: false }
    ]
  },
  {
    question: 'Sivasın kaç ilçesi vardır?',
    answers: [
      { text: '22', correct: false },
      { text: '31', correct: false },
      { text: '17', correct: true },
      { text: '61', correct: false }
    ]
  },
  {
    question: 'Hangisi Sivasın ilçelerinden biri değildir?',
    answers: [
      { text: 'Yıldızeli', correct: false },
      { text: 'Gürün', correct: false },
      { text: 'Kocaeli', correct: true },
      { text: 'Divriği', correct: false }
    ]
  },
  {
    question: 'Sivasın plaka kodu kaçtır?',
    answers: [
      { text: '41', correct: false },
      { text: '82', correct: false },
      { text: '34', correct: false },
      { text: '58', correct: true }
    ]
  },
  {
    question: 'Sivas hangi bölgede yer almaktadır?',
    answers: [
      { text: 'İç Anadolu', correct: true },
      { text: 'Doğu Anadolu', correct: false },
      { text: 'Marmara', correct: false },
      { text: 'Ege', correct: false }
    ]
  }
]