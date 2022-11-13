

// Assigment 1

let setOfNumbers = new Set([10]);
setOfNumbers.add(20).add(setOfNumbers.size);
console.log(setOfNumbers);
// [1]
if (setOfNumbers.has(2)) {
    console.log(setOfNumbers.size - 1);
}
// [2]
console.log(Array.from(setOfNumbers)[2]);
// [3]
console.log([...setOfNumbers].pop());

// // Needed Output
// Set(3) {10, 20, 2}
// 2





// Assigment 2
let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];
console.log(Array.from(new Set(myFriends)).sort());
// // Needed Output
// (4) ['Ahmed', 'Mahmoud', 'Osama', 'Sayed']










// Assigment 3  
let myInfo = {
    username: "Osama",
    role: "Admin",
    country: "Egypt",
};
// 1 
let map = new Map(Object.entries(myInfo));
console.log(map);
console.log(map.size);
console.log(map.has("role"));
// 2 
let myMap = new Map([
    ["username " ,"osama"],
    ["role" , "Admin"],
    ["country" , "Egypt"],
]);
console.log(myMap);



// // Needed Output
// Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
// 3
// true


// Assigment 4    
let theNumber = 100020003000;

let num = +[...new Set(theNumber.toString())].filter(e => e !== '0').join('');
console.log(num);


// // Needed Output
// 123



// Assigment 5  
let theName = "Elzero";

console.log(Array.from(theName.toLowerCase()));
console.log(Array.from(theName));
console.log([...theName]);
console.log(theName.split(""));


// // Needed Output
// ['E', 'l', 'z', 'e', 'r', 'o']




// Assigment 6  
let chars = ["A", "B", "C", "D", "E", 10, 15, 6];

chars.copyWithin(3, -8);
console.log(chars);
// // Needed Output
// ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']






// Assigment 7  
let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

// 1
console.log(numsOne.concat(numsTwo));
// 2
console.log([...numsOne, ...numsTwo]);
// 3
console.log([].concat(numsOne, numsTwo));
// 4
console.log(Array.of(...numsOne, ...numsTwo));
// 5
numsOne.push(...numsTwo);
console.log(numsOne);

// // Needed Output
// [1, 2, 3, 4, 5, 6]





// Assigment 8
let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

console.log([...n1, ...n2].length * Math.max(...n1));
// // Needed Output
// 210
