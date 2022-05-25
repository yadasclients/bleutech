const startButton = document.getElementById('take_quiz')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const e = document.createElement('div');
let shuffledQuestions, currentQuestionIndex
let timerSecs = 0;


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

    if (document.getElementById('next-btn').clicked == true) {
        ;
    }
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
        startButton.innerText = 'Restart'
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


const questions = [{
        question: 'What is HTML in full?',
        answers: [{
                text: 'a) Hyper text markup language',
                correct: true
            },
            {
                text: 'b) Wamunyonyi markup language',
                correct: false
            },
            {
              text: 'b) Mother in law language',
              correct: false
          }
        ]
    },
    {
        question: 'What is JS in full?',
        answers: [{
                text: 'Jamaa script',
                correct: true
            },
            {
                text: 'Pengo kubwa',
                correct: false
            },
            {
                text: 'Practical weird',
                correct: false
            },
            {
                text: 'waah',
                correct: false
            }
        ]
    },
    {
        question: 'Are you a develper?',
        answers: [{
                text: 'Yes',
                correct: false
            },
            {
                text: 'I think so',
                correct: true
            },
            {
                text: 'naaah',
                correct: false
            },
            {
                text: 'probaably',
                correct: false
            }
        ]
    },
    {
        question: 'What is halle berrys name?',
        answers: [{
                text: 'halle berry',
                correct: true
            },
            {
                text: 'halle berry',
                correct: false
            }
        ]
    },
    {
        question: 'What is me?',
        answers: [{
                text: 'haha',
                correct: true
            },
            {
                text: 'kuku',
                correct: false
            }
        ]
    },
    {
        question: 'What is that?',
        answers: [{
                text: 'pipi',
                correct: true
            },
            {
                text: 'kuku',
                correct: false
            }
        ]
    },
    {
        question: 'What is life?',
        answers: [{
                text: 'funny',
                correct: true
            },
            {
                text: 'awsome',
                correct: false
            }
        ]
    },
    {
        question: 'What is nothing?',
        answers: [{
                text: 'something',
                correct: true
            },
            {
                text: 'nothing',
                correct: false
            }
        ]
    },
    {
        question: 'What is my name?',
        answers: [{
                text: 'hehe',
                correct: true
            },
            {
                text: 'hihi',
                correct: false
            }
        ]
    },
    {
        question: 'What is gangnam style?',
        answers: [{
                text: 'whoppa',
                correct: true
            },
            {
                text: 'ganum',
                correct: false
            }
        ]
    }

]