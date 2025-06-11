import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());

const emojiList = [
  { emoji: "😀", name: "Grinning Face" },
  { emoji: "😃", name: "Grinning Face with Big Eyes" },
  { emoji: "😄", name: "Grinning Face with Smiling Eyes" },
  { emoji: "😁", name: "Beaming Face with Smiling Eyes" },
  { emoji: "😆", name: "Grinning Squinting Face" },
  { emoji: "😅", name: "Grinning Face with Sweat" },
  { emoji: "🤣", name: "Rolling on the Floor Laughing" },
  { emoji: "😂", name: "Face with Tears of Joy" },
  { emoji: "🙂", name: "Slightly Smiling Face" },
  { emoji: "🙃", name: "Upside-Down Face" },
];

let leaderboard = [];

function generateQuestion() {
  const correctIndex = Math.floor(Math.random() * emojiList.length);
  const correct = emojiList[correctIndex];

  const distractors = emojiList
    .filter((emoji, i) => i !== correctIndex)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  const options = [...distractors, correct].sort(() => 0.5 - Math.random());

  return {
    emoji: correct.emoji,
    correctAnswer: correct.name,
    options: options.map((option) => option.name),
  };
}

app.get("/api/question", (req, res) => {
  const question = generateQuestion();
  res.json(question);
});

app.post("/api/answer", (req, res) => {
  const { guess, correctAnswer, name } = req.body;
  const isCorrect = guess === correctAnswer;

  if (name != null) {
    var idx = leaderboard.findIndex((p) => p.name === name);
    if (idx !== -1) {
      if(isCorrect) leaderboard[idx].score +=1;
    } else {        
      leaderboard.push({ name, score: isCorrect? 1:0 });
    }
    leaderboard.sort((a, b) => b.score - a.score);
    leaderboard = leaderboard.slice(0, 5);
  }

  res.json({isCorrect, score: leaderboard[idx]?.score });
});


app.get("/api/leaderboard", (req, res) => {
  res.json(leaderboard);
});

app.listen(port, () => {
  console.log(`Server is running`);
});
