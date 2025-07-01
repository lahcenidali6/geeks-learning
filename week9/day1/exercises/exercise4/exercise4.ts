let input = prompt("Enter random Number");
let num = Number(input); 

if (isNaN(num)) {
    alert("Invalid number!");
} else {
    if (num > 0) alert("Positive");
    else if (num < 0) alert("Negative");
    else alert("Zero");
}
