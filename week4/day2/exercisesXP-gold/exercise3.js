const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
    console.log(num, i);
    alert(num);
    return num * 2;
})

//the value of i is the value of index of array when map the array so tha value of i  starts at 0 for the first element to end 