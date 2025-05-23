// 1
const form = document.querySelector('form')
console.log(form)

// 2
const input1 = document.getElementById('fname')
const input2 = document.getElementById('lname')
console.log(input1, input2)

// 3
const inputName1 = document.querySelector('input[name="firstname"]')
const inputName2 = document.querySelector('input[name="lastname"]')
console.log(inputName1, inputName2)

// 4
form.addEventListener('submit', function (event) {
    event.preventDefault()

    const firstName = input1.value.trim()
    const lastName = input2.value.trim()

    if (firstName === '' || lastName === '') {
        alert('Please fill in both first name and last name.')
        return
    }

    const ul = document.querySelector('.usersAnswer')
    ul.innerHTML = ''

    const liFirst = document.createElement('li')
    liFirst.textContent = firstName
    ul.appendChild(liFirst)

    const liLast = document.createElement('li')
    liLast.textContent = lastName
    ul.appendChild(liLast)
})

