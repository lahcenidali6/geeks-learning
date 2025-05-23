
const form = document.getElementById("libform")
const libBtn = document.getElementById("lib-button")
const shuffleBtn = document.getElementById("shuffle-button")
const storySpan = document.getElementById("story")

let userWords = {}
let currentStories = []

const storis = [
    (w) => `${w.person} went to ${w.place} with a ${w.adjective} ${w.noun} and decided to ${w.verb}.`,
    (w) => `In the middle of ${w.place}, ${w.person} found a ${w.noun} that was incredibly ${w.adjective} and started to ${w.verb} with joy.`,
    (w) => `Once upon a time, ${w.person} ${w.verb} their ${w.adjective} ${w.noun} all the way to ${w.place}.`
]

form.addEventListener("submit", function (event) {
    event.preventDefault()

    const noun = document.getElementById("noun").value.trim()
    const adjective = document.getElementById("adjective").value.trim()
    const person = document.getElementById("person").value.trim()
    const verb = document.getElementById("verb").value.trim()
    const place = document.getElementById("place").value.trim()

    if (!noun || !adjective || !person || !verb || !place) {
        alert("Please fill in all fields.")
        return
    }

    userWords = { noun, adjective, person, verb, place }
    currentStories = [...storis] 
    shuffleAndDisplay()
})

function shuffleAndDisplay() {
    if (currentStories.length === 0) {
        storySpan.textContent = "No more new stories to display. Try changing your words!"
        return
    }

    const index = Math.floor(Math.random() * currentStories.length)
    const storyFunc = currentStories.splice(index, 1)[0]
    const newStory = storyFunc(userWords)
    storySpan.textContent = newStory
}

shuffleBtn.addEventListener("click", function () {
    if (Object.keys(userWords).length === 0) {
        alert("Please generate a story first using the 'Lib it!' button.")
        return
    }
    shuffleAndDisplay()
})

