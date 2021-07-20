const questionElement = document.querySelector(".question");
const answer_container = document.querySelector(".answer-container");
var shuffledQuestions, QuestionIndex, score;
var click = false;
var i = 0;
var txt = "QUIZ APP"+" ✔";
var speed = 100;

window.onload = () => {
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  QuestionIndex = 0;
  score = 0;
  showQuestion(shuffledQuestions[QuestionIndex]);
  heading_animation();
};

const heading_animation = () => {
  if (i < txt.length) {
    document.getElementById("quiz-heading").innerHTML += txt.charAt(i);
    i++;
    setTimeout(heading_animation, speed);
  }
};

function showQuestion(q) {
  questionElement.innerHTML = "Q: " + q.question;
  q.answer.forEach((answer) => {
    const buttonElement = document.createElement("button");
    buttonElement.setAttribute("class", "answer-button");
    buttonElement.innerHTML = answer.text;
    answer_container.appendChild(buttonElement);
    if (answer.correct) {
      // linking the correct answer to the respective option
      buttonElement.dataset.correct = answer.correct;
    }
    buttonElement.addEventListener("click", checkAnswer);
    click = true;
  });
}

const checkAnswer = (e) => {
  const selectedButton = e.target;
  if (selectedButton.dataset.correct) {
    score += 1;
  }
  if (shuffledQuestions.length > QuestionIndex + 1) {
    while (answer_container.firstChild) {
      answer_container.removeChild(answer_container.firstChild);
    }
    QuestionIndex += 1;
    showQuestion(shuffledQuestions[QuestionIndex]);
  } else {
    alert("Quiz Over. Your score: " + score + "/6");
  }
};

const questions = [
  {
    question: "FMGB, HMIB, JMKB, ____, NMOA",
    answer: [
      {
        text: "LMMB",
        correct: true,
      },
      {
        text: "LMNB",
        correct: false,
      },
      {
        text: "MMNB",
        correct: false,
      },
      {
        text: "PMQB",
        correct: false,
      },
    ],
  },
  {
    question:
      "Look at this series: 20, 15, 20, 17, 20, __. What number should come next?",
    answer: [
      {
        text: "23",
        correct: false,
      },
      {
        text: "21",
        correct: false,
      },
      {
        text: "19",
        correct: true,
      },
      {
        text: "18",
        correct: false,
      },
    ],
  },
  {
    question:
      "If in a certain language ENGLISH is coded as FOHMJTI, how is SCIENCE coded in that language?",
    answer: [
      {
        text: "TDJFOOD",
        correct: true,
      },
      {
        text: "DTJFODF",
        correct: false,
      },
      {
        text: "LMNBTTG",
        correct: false,
      },
      {
        text: "TDJFODF",
        correct: true,
      },
    ],
  },
  {
    question:
      "If WORD is coded as 8153 and APPLE is coded as 72246, then how would you encode READ?",
    answer: [
      {
        text: "4567",
        correct: false,
      },
      {
        text: "5673",
        correct: true,
      },
      {
        text: "1234",
        correct: false,
      },
      {
        text: "5678",
        correct: true,
      },
    ],
  },
  {
    question: "6, 3, 3/2, 3/4, ____",
    answer: [
      {
        text: "1/8",
        correct: false,
      },
      {
        text: "2/8",
        correct: false,
      },
      {
        text: "3/8",
        correct: true,
      },
      {
        text: "4/8",
        correct: false,
      },
    ],
  },
  {
    question:
      "How many times 45 should be added to itself such that their sum becomes 405?",
    answer: [
      {
        text: "6",
        correct: false,
      },
      {
        text: "9",
        correct: true,
      },
      {
        text: "5",
        correct: false,
      },
      {
        text: "8",
        correct: false,
      },
    ],
  },
];
