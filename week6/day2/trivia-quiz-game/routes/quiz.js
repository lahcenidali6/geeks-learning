import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const triviaQuestions = [
  {
    question: "What is the capital of France?",
    correct: "Paris",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
  },
  {
    question: "Which planet is known as the Red Planet?",
    correct: "Mars",
    options: ["Venus", "Saturn", "Mars", "Jupiter"],
  },
  {
    question: "What is the largest mammal in the world?",
    correct: "Blue whale",
    options: ["Elephant", "Giraffe", "Blue whale", "Hippopotamus"],
  },
  {
    question: "Who wrote 'Hamlet'?",
    correct: "William Shakespeare",
    options: [
      "Charles Dickens",
      "Leo Tolstoy",
      "William Shakespeare",
      "Mark Twain",
    ],
  },
  {
    question: "Which country is home to the kangaroo?",
    correct: "Australia",
    options: ["India", "South Africa", "Australia", "Canada"],
  },
  {
    question: "What is the smallest prime number?",
    correct: "2",
    options: ["0", "1", "2", "3"],
  },
  {
    question: "Which ocean is the largest?",
    correct: "Pacific Ocean",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Pacific Ocean",
      "Arctic Ocean",
    ],
  },
  {
    question: "How many continents are there?",
    correct: "7",
    options: ["5", "6", "7", "8"],
  },
  {
    question: "What gas do plants absorb from the atmosphere?",
    correct: "Carbon Dioxide",
    options: ["Oxygen", "Hydrogen", "Carbon Dioxide", "Nitrogen"],
  },
  {
    question: "Which instrument has keys, pedals, and strings?",
    correct: "Piano",
    options: ["Guitar", "Drums", "Piano", "Violin"],
  },
];
let score = 0;
let index = 0;
let end = false;

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
router.use(express.json());

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/quiz", (req, res) => {
  index = 0;
  score = 0;
  end = false;
  const { question, options } = triviaQuestions[0];
  res.send({ question, options });
});

router.post("/quiz", (req, res) => {
  let isCorrect = null;
  if (req.body.answer == triviaQuestions[index].correct) {
    isCorrect = true;
    score++;
  } else {
    isCorrect = false;
  }

  const correctAnswerForCurrentQuestion = triviaQuestions[index].correct;

  if (index < triviaQuestions.length - 1) {
    index++;
    end = false;
  } else {
    end = true;
  }

  let responsePayload = {
    isCorrect,
    end,
    correctAnswer: correctAnswerForCurrentQuestion,
  };

  if (!end) {
    const { question, options } = triviaQuestions[index];
    responsePayload.nextQuestion = { question, options };
  }

  res.status(200).send(responsePayload);
});

router.get("/quiz/score", (req, res) => {
  res.send({ score, total: triviaQuestions.length });
});

export default router;