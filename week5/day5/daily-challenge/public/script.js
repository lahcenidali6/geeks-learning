let currentCorrect = "";

async function loadQuestion() {
  const res = await fetch("/api/question");
  const data = await res.json();
  currentCorrect = data.correctAnswer;

  document.getElementById("emoji").textContent = data.emoji;
  const optionsEl = document.getElementById("options");
  optionsEl.innerHTML = "";

  data.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => handleGuess(option);
    optionsEl.appendChild(btn);
  });
}

async function handleGuess(guess) {
  const name = document.getElementById("playerName").value.trim();
  const res = await fetch("/api/answer", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      guess,
      correctAnswer: currentCorrect,
      name: name || "Anonymous",
    })
  });

  const data = await res.json();
  const feedback = document.getElementById("feedback");
  if (data.isCorrect) {
    feedback.textContent = "✅ Correct!";
  } else {
    feedback.textContent = `❌ Wrong! Answer was: ${currentCorrect}`;
  }

  document.getElementById("score").textContent = data.score;
  loadQuestion();
  loadLeaderboard();
}

async function loadLeaderboard() {
  const res = await fetch("/api/leaderboard");
  const data = await res.json();
  console.log(data)
  const board = document.getElementById("leaderboard");
  board.innerHTML = "";
  data.forEach((entry, i) => {
    const li = document.createElement("li");
    li.textContent = `${i + 1}. ${entry.name} — ${entry.score}`;
    board.appendChild(li);
  });
}

loadQuestion();
loadLeaderboard();
