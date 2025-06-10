const cells = document.querySelectorAll(".cell")
let index = 0
let board = Array(9).fill(null)
let winner = false
const winningCombos = [
  [0, 1, 2], 
  [3, 4, 5], 
  [6, 7, 8], 
  [0, 3, 6], 
  [1, 4, 7], 
  [2, 5, 8], 
  [0, 4, 8], 
  [2, 4, 6], 
]

cells.forEach((cell, i) => {
  cell.addEventListener("click", () => {
    if (winner) return
    if (index % 2) {
      if (cell.children[0].classList.length == 0) {
        cell.children[0].classList.add("o")
        board[i] = "o"
        index++
      }
    } else {
      if (cell.children[0].classList.length == 0) {
        cell.children[0].classList.add("x")
        board[i] = "x"
        index++
      }
    }
    console.log(board)
    checkWinner()
  })
})

function checkWinner() {
  for (let combo of winningCombos) {
    const [a, b, c] = combo
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      const comboStr = combo.toString()
      winner = true
      switch (comboStr) {
        case "0,1,2":
          showWinnerLine("row", 0)
          break
        case "3,4,5":
          showWinnerLine("row", 1)
          break
        case "6,7,8":
          showWinnerLine("row", 2)
          break
        case "0,3,6":
          showWinnerLine("col", 0)
          break
        case "1,4,7":
          showWinnerLine("col", 1)
          break
        case "2,5,8":
          showWinnerLine("col", 2)
          break
        case "0,4,8":
          showWinnerLine("diag", 0)
          break
        case "2,4,6":
          showWinnerLine("diag", 1)
          break
      }
    }
  }
  return null
}

function showWinnerLine(type, index) {
  const line = document.querySelector(".winning-line")
  const cellSize = 100
  const gap = 5


  line.style.transform = ""
  line.style.top = ""
  line.style.left = ""
  line.style.width = ""


  if (type === "row") {
    const top =
      (cellSize * index) / 2 + (cellSize * (index + 1)) / 2 + gap * index
    console.log(top)
    line.style.width = `100%`
    line.style.top = `${top}px`
    line.style.left = `0px`
    line.style.transform = "rotate(0deg)"
  }

  else if (type === "col") {
    const left =
      (cellSize * index) / 2 + (cellSize * (index + 1)) / 2 + gap * index
    line.style.width = `${cellSize * 3 + gap * 2}px`
    line.style.top = `0px`
    line.style.left = `${left}px`
    line.style.transform = "rotate(90deg)"
  }


  else if (type === "diag" && index === 0) {
    line.style.width = "424.2px"
    line.style.top = `0px`
    line.style.left = `0px`
    line.style.transform = "rotate(45deg)"
  }


  else if (type === "diag" && index === 1) {
    line.style.width = "424.4px"
    line.style.top = `0px`
    line.style.left = `310px`
    line.style.transform = "rotate(-225deg)"
  }

  line.classList.add("winning-line-display")
  console.log(line)
}
