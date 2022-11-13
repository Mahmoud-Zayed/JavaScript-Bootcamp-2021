





// Assignment 1 
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

myFriends.pop()
// Method 1
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// myFriends.slice(num - num, num);
myFriends.splice(num);
// Method 2
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];







// Assignment 2   
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
friends.shift();
friends.pop();

console.log(friends); // ["Eman", "Osama"]




// Assignment 3   
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = arrOne.concat(arrTwo).sort().reverse();

// Write One Single Line Of Code

console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]







// Assignment 4
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[website.length][0][website.length].toUpperCase() + words[website.length][0].slice(website.length + Array.isArray(words)).toUpperCase()); // ZERO









// Assignment 5 
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
console.log(haystack.includes(needle));

if (haystack.includes(needle) === true) {
    console.log(true);
}
if (haystack.includes(needle) !== false) {
    console.log(true);
}






// Assignment 6  
let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = arr1.concat(arr2).sort().slice(arr2.length).join("").toLowerCase();

// Your Code Here

console.log(allArrs); // fxy






// Array Challenges

let zero = 0,
    counter = 3,
    my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here
my.pop();
my.reverse();
my.shift();

console.log(my); // ['Osama', 'Elham', 'Mazero', 'Ahmed']

console.log(my.slice(-counter, counter)); // ['Elham', 'Mazero']

console.log(my[++zero].slice(--zero, --counter) + my[counter].slice(counter)); // "Elzero"

console.log((my[counter].slice(-counter,--zero)) + (my[counter].slice(zero)).toUpperCase()); // rO
