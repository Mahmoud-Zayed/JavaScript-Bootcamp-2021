





// Assignment 1 
let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let resultMix = mix.map(function (element) {
    return isNaN(parseInt(element)) ? element : "";
}).reduce(function (acc, curr) {
    return acc + curr;
});
console.log(resultMix);
// Elzero















// Assignment 2  
let myString = "EElllzzzzzzzeroo";

let resultString = myString.split("").filter(function (ele, index, arr) {
    return ele === arr[index + 1] ? "" : ele;
}).join("");
console.log(resultString);
// Elzero




















// Assignment 3
let myArray = ["E", "l", "z", ["e", "r"], "o"];

let totalMyArray = myArray.join("").split("").filter(function (ele) {
    return ele !== ",";
}).reduce(function (acc, curr) {
    return acc + curr;
});
console.log(totalMyArray);
// Elzero















// Assignment 4
let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let totalNumsAndStrings = numsAndStrings.map(function (el, index, ar) {
    return !isNaN(parseInt(el)) ? -el : "";
}).filter(function (el) {
    return el;
});

console.log(totalNumsAndStrings); 
// [-1, -10, 10, 20, -5, -3]











// Assignment 5   
let nums = [2, 12, 11, 5, 10, 1, 99];

let totalNums = nums.reduce(function (acc, curr) {
    return curr % 2 === 1 ? acc + curr : acc * curr;
}, 1);
console.log(totalNums);
// 500









































