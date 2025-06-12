const quizform = document.getElementById("quizForm");
const resultDiv = document.querySelector(".result");
const quizBox = document.querySelector(".quiz-box");
async function getQuestions(url) {
  try {
    const res = await fetch(url);
    if (!res.ok)
      throw new Error("somthing went happen when fetching the question!");
    else {
      const data = await res.json();
      return data;
    }
  } catch (err) {
    console.log(`Error when fetching : ${err}`);
  }
}
function renderQuestion(data) {
  const question = (document.createElement("p").innerText = data.question);
  const options = data.options.sort(() => 0.5 - Math.random());
  const optionsDiv = document.createElement("div");
  optionsDiv.className = "options";
  optionsDiv.append(question);
  options.forEach((option) => {
    const label = document.createElement("label");
    const input = document.createElement("input");
    input.setAttribute("type", "radio");
    input.setAttribute("value", `${option}`);
    input.setAttribute("name", "q");
    const span = document.createElement("span");
    span.innerText = option;

    label.appendChild(input);
    label.appendChild(span);
    optionsDiv.appendChild(label);
  });

  quizform.innerHTML = "";
  const button = document.createElement("button");
  button.innerText = "Submit Answer";
  button.setAttribute("type", "submit");
  button.className = "submit-btn";
  quizform.appendChild(optionsDiv);
  quizform.appendChild(button);
}

async function handleStart() {
  const url = "/quiz";
  const data = await getQuestions(url);
  renderQuestion(data);
}
quizform.addEventListener("submit", async (event) => {
  event.preventDefault();
  resultDiv.textContent = "";

  const selected = quizform.querySelector('input[name="q"]:checked');

  if (!selected) {
    resultDiv.textContent = "❗ Please select an answer!";
    resultDiv.style.color = "red";
    return;
  }

  const userAnswer = selected.value;

  try {
    const res = await fetch("/quiz", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ answer: userAnswer }),
    });

    var result = await res.json();

    if (result.isCorrect) {
      resultDiv.textContent = "Correct!";
      resultDiv.style.color = "green";
    } else {
      resultDiv.textContent = `Incorrect! Correct answer is: ${result.correctAnswer}`;
      resultDiv.style.color = "red";
    }
  } catch (err) {
    console.error("Failed to submit answer:", err);
  } finally {
    if (result.end) {
      renderComplete();
    } else {
      renderQuestion(result.nextQuestion);
    }
  }
});
async function renderComplete() {
  quizBox.innerHTML = "";

  try {
    const res = await fetch("/quiz/score");
    if (!res.ok) throw new Error("Something went wrong when fetching score!");
    var data = await res.json();
  } catch (err) {
    console.log(err);
    return;
  }

  const head = document.createElement("h2");
  head.innerText = "🎉 Quiz Completed!";

  const summary = document.createElement("div");
  summary.className = "score-summary";
  summary.innerHTML = `You scored <span id="finalScore">${data.score}</span> out of <span id="totalQuestions">${data.total}</span>`;

  const button = document.createElement("button");
  button.innerText = "Restart Quiz";
  button.className = "restart-btn";
   button.addEventListener("click", restart);
  quizBox.appendChild(head);
  quizBox.appendChild(summary);
  quizBox.appendChild(button);
}

function restart(){
  location.reload();
}
