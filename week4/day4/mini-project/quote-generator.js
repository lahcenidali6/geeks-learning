const quotes = [
  {
    id: 1,
    author: "Albert Einstein",
    quote:
      "Life is like riding a bicycle. To keep your balance you must keep moving.",
  },
  {
    id: 2,
    author: "Oscar Wilde",
    quote: "Be yourself everyone else is already taken.",
  },
  {
    id: 3,
    author: "Mark Twain",
    quote: "The secret of getting ahead is getting started.",
  },
  {
    id: 4,
    author: "Maya Angelou",
    quote:
      "If you don't like something, change it. If you can't change it, change your attitude.",
  },
  {
    id: 5,
    author: "Walt Disney",
    quote: "The way to get started is to quit talking and begin doing.",
  },
  {
    id: 6,
    author: "Steve Jobs",
    quote: "Innovation distinguishes between a leader and a follower.",
  },
  {
    id: 7,
    author: "Dr. Seuss",
    quote: "Don't cry because it's over, smile because it happened.",
  },
  {
    id: 8,
    author: "Nelson Mandela",
    quote: "It always seems impossible until it is done.",
  },
  {
    id: 9,
    author: "Confucius",
    quote: "It does not matter how slowly you go as long as you do not stop.",
  },
  {
    id: 10,
    author: "Helen Keller",
    quote: "Keep your face to the sunshine and you cannot see a shadow.",
  },
  {
    id: 11,
    author: "Helen Keller",
    quote: "test",
  },
];

const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author").querySelector("span");
const newQuoteBtn = document.getElementById("new-quote");

newQuoteBtn.addEventListener("click", () => {
  const randomId = Math.floor(Math.random() * quotes.length);
  const selected = quotes[randomId];
  quoteText.textContent = `"${selected.quote}"`;
  authorText.textContent = selected.author.toUpperCase();
});

const form = document.getElementById("quote-form");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const quoteInput = document.getElementById("quoteInput").value.trim();
  const authorInput = document.getElementById("authorInput").value.trim();

  if (quoteInput && authorInput) {
    const newQuote = {
      id: quotes.length + 1,
      author: authorInput,
      quote: quoteInput,
    };

    quotes.push(newQuote);
    alert("Quote added successfully!");

    form.reset();
  }
});

let filteredQuotes = [];
let currentIndex = 0;

const filterForm = document.getElementById("filter-form");
const filterInput = document.getElementById("filterAuthor");
const prevBtn = document.getElementById("prev-quote");
const nextBtn = document.getElementById("next-quote");
const navButtons = document.getElementById("nav-buttons");

function displayFilteredQuote(index) {
  const quote = filteredQuotes[index];
  quoteText.textContent = `"${quote.quote}"`;
  authorText.textContent = quote.author.toUpperCase();
}

filterForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const authorQuery = filterInput.value.trim().toLowerCase();

  filteredQuotes = quotes.filter((q) =>
    q.author.toLowerCase().includes(authorQuery)
  );
  currentIndex = 0;

  if (filteredQuotes.length > 0) {
    displayFilteredQuote(currentIndex);
    navButtons.style.display = "block";
  } else {
    quoteText.textContent = `"No quotes found for '${filterInput.value}'."`;
    authorText.textContent = "";
    navButtons.style.display = "none";
  }
});

prevBtn.addEventListener("click", () => {
  if (filteredQuotes.length === 0) return;
  currentIndex =
    (currentIndex - 1 + filteredQuotes.length) % filteredQuotes.length;
  displayFilteredQuote(currentIndex);
});

nextBtn.addEventListener("click", () => {
  if (filteredQuotes.length === 0) return;
  currentIndex = (currentIndex + 1) % filteredQuotes.length;
  displayFilteredQuote(currentIndex);
});
