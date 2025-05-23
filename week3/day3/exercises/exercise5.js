//q2
let div = document.querySelector("#container")
let list=document.querySelectorAll(".list")
list[0].children[1].textContent="Richard"
list[1].children[1].remove()
list.forEach(ul => {
    ul.children[0].textContent = 'lahcen';
});

//q3
list[0].classList.add("student_list")
list[1].classList.add("student_list")

list[0].classList.add("university","attendance")


//q4
div.style.backgroundColor = 'lightblue'
div.style.padding='5px'
list[1].style.display="none"

list[0].children[1].style.border = '2px solid black';
document.querySelector("body").style.fontSize="20px"

if (container.style.backgroundColor === 'lightblue') {
    const names = [...list[0].children, ...list[1].children].map(li => li.textContent).filter(name => name !== 'Dan');
    alert(`Hello ${names.join(' and ')}`);
}

