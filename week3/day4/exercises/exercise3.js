// 1
let allBoldItems

// 2
function getBoldItems() {
  allBoldItems = document.querySelectorAll('#bold-paragraph strong')
}

// 3
function highlight() {
  getBoldItems()
  allBoldItems.forEach(item => {
    item.style.color = 'blue'
  })
}

// 4
function returnItemsToDefault() {
  allBoldItems.forEach(item => {
    item.style.color = 'black'
  })
}

// 5
const paragraph = document.getElementById('bold-paragraph')
paragraph.addEventListener('mouseover', highlight)
paragraph.addEventListener('mouseout', returnItemsToDefault)

