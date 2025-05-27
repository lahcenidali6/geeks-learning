// #1
function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}

// Prediction: alerts "inside the funcOne function 3"
// Explanation: 'a' starts at 5, and since 5 > 1, 'a' becomes 3.
funcOne()
// Prediction: It will throw an error
// Explanation: const variables cannot be reassigned (a = 3 is not allowed)

//#2
let a = 0;
function funcTwo() {
    a = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

// #2.1 - run in the console:
funcThree()
funcTwo()
funcThree()
// Prediction: alerts "inside the funcThree function 0"
// Prediction: alerts "inside the funcThree function 5"
// Explanation: funcTwo changes the global variable 'a' from 0 to 5
// Prediction: It will throw an error
// Explanation: const prevents reassignment of the variable 'a'


//#3
function funcFour() {
    window.a = "hello";
}


function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// #3.1 - run in the console:
funcFour()
funcFive()
// Prediction: alerts "inside the funcFive function hello"
// Explanation: funcFour sets 'a' as a global property on the window object

//#4
let a = 1;
function funcSix() {
    let a = "test";
    alert(`inside the funcSix function ${a}`);
}


// #4.1 - run in the console:
funcSix()
// Prediction: alerts "inside the funcSix function test"
// Explanation: Local variable 'a' inside funcSix shadows the outer 'a'

// Prediction: It still works
// Explanation: const is fine as long as the variable is not reassigned
//#5
let a = 2;
if (true) {
    let a = 5;
    alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);

// First alert: "in the if block 5"
// Second alert: "outside of the if block 2"
// Explanation: The 'a' inside the if block is block-scoped and separate from the outer 'a'
// Prediction: Same result
// Explanation: const is also block-scoped, and no reassignment happens, so it works the same
