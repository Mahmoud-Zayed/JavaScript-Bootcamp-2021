



// Assignment 1

let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;
let outside = [];

while (index < friends.length) {

    if (typeof friends[index] === "number") {
        outside.push(friends[index]);
    } else if (friends[index][friends.length - friends.length] === "A") {
        outside.push(friends[index]);
    } else {
        console.log(`${++counter} => ${friends[index]}`);
    }
    index++;
};

// Output
// "1 => Sayed"
// "2 => Mahmoud"






