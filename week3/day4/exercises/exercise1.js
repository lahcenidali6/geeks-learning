//1
const h1 = document.querySelector('h1')
console.log(h1)

// 2
const article = document.querySelector('article')
const paragraphs = article.querySelectorAll('p')
const lastParagraph = paragraphs[paragraphs.length - 1]
lastParagraph.remove()

// 3
const h2 = article.querySelector('h2')
h2.addEventListener('click', () => {
    h2.style.backgroundColor = 'red'
})

// 4
const h3 = article.querySelector('h3')
h3.addEventListener('click', () => {
    h3.style.display = 'none'
})

// 5
const button = document.getElementById('button')
button.addEventListener('click', () => {
    article.querySelectorAll('p').forEach(p => {
        p.style.fontWeight = 'bold'
    })
})

// 6 
const title = article.querySelector('h1')
title.addEventListener('mouseenter', () => {
    const randomSize = Math.floor(Math.random() * 101)
    title.style.fontSize = randomSize + 'px'
})
// 7
const secondParagraph = paragraphs[1];
secondParagraph.addEventListener('mouseenter', () => {
    secondParagraph.classList.add('fade-out');
})
