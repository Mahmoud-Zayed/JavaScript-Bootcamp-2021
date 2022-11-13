







// Assignment 1 
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(1_000_00); // 100000
console.log(1e5); // 100000
console.log(10 * 10 * 10 * 10 * 10); // 100000
console.log(10 ** 5); // 100000
console.log(Math.min(1000000 , 100000 , 10000000)); // 100000
console.log(Math.max(100000 , 10000 , 50000)); // 100000
console.log(+"100000"); // 100000
console.log(Math.pow(10 , 5)); // 100000
console.log(100000.0); // 100000
console.log(Math.trunc(100000.2355)); // 100000









// Assignment 2
console.log(-Number.MIN_SAFE_INTEGER); // 9007199254740991









// Assignment 3
console.log(Math.ceil(Number.MAX_SAFE_INTEGER / Number.MAX_SAFE_INTEGER)); // 1
console.log(Math.ceil(Number.MAX_SAFE_INTEGER / --Number.MAX_SAFE_INTEGER)); // 2
console.log(Math.pow(Math.ceil((Number.MAX_SAFE_INTEGER / --Number.MAX_SAFE_INTEGER)), 4));  // 16
console.log(Math.pow(Math.ceil((Number.MAX_SAFE_INTEGER / Number.MAX_SAFE_INTEGER)) + Math.ceil((Number.MAX_SAFE_INTEGER / Number.MAX_SAFE_INTEGER)) , 4)); // 16
console.log(Math.ceil(Number.MAX_SAFE_INTEGER / --Number.MAX_SAFE_INTEGER) ** Math.ceil(Number.MAX_SAFE_INTEGER / --Number.MAX_SAFE_INTEGER) ** Math.ceil(Number.MAX_SAFE_INTEGER / --Number.MAX_SAFE_INTEGER));  // 16








// Assignment 4  
let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(typeof parseInt(myVar)); // 100
console.log(Number(parseFloat(myVar).toFixed(2))); // 100.57
console.log(typeof Number(parseFloat(myVar).toFixed(2))); // 100.57
console.log(+parseFloat(myVar).toFixed(2)); // 100.57
console.log(typeof +parseFloat(myVar).toFixed(2)); // 100.57









// Assignment 5
let num = 10;

console.log(Number.isInteger(num) + Number.isInteger(num)); // 2








// Assignment 6
let flt = 10.4;

console.log(Math.round(flt)); // 10
console.log(Math.ceil(flt) - true); // 10
console.log(Math.ceil(flt) + -true); // 10
console.log(Math.floor(flt)); // 10
console.log(parseInt(flt)); // 10

// Assignment 7 
console.log(Math.round(Math.random() * 4)); // 0 || 1 || 2 || 3 || 4