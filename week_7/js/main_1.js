




// Assignment 1 
let start = 10;
let end = 100;
let exclude = 40;

for (let i = start; i <= end; i += start) {
    if (i === exclude) {
        continue;
    }
    document.write(`<p>/// ${i} </p>`);
}
// Output
// 10
// 20
// 30
// 50
// 60
// 70
// 80
// 90
// 100










// Assignment 2
let start1 = 10;
let end1 = 0;
let stop = 3;

for (let i = start1; i > end1; i--) {
    if (i == start1) {
        console.log(`${i}`);
    }
    if (i < start1) {
        console.log(`0${i}`);
    }
    if (i == stop) {
        break;
    }
}
// Output
// 10
// 09
// 08
// 07
// 06
// 05
// 04
// 03


// Assignment 3
let start2 = 1;
let end2 = 6;
let breaker = 2;

for (let i = start2; i <= end2; i++) {
    console.log(i);
    for (let l = start2; l < end2; l++) {
        if (l == breaker) {
            console.log(`-- ${l}`);
            continue;
        }
        if (l == (end2 - breaker)) {
            console.log(`-- ${l}`);
            break;
        }
    }
}
// Output
// 1
// -- 2
// -- 4
// 2
// -- 2
// -- 4
// 3
// -- 2
// -- 4
// 4
// -- 2
// -- 4
// 5
// -- 2
// -- 4
// 6
// -- 2
// -- 4






// Assignment 4 
let index = 10;
let jump = 2;
let endij = 0;

let ije = index;
for (;;) {
  // Write Your Code Here
    
    console.log(`out--- ${ije}`);
    if (ije === (jump + jump)) {
        break;
    }

    ije = ije - jump;
    if (ije <  endij) break;
};
// Output
// 10
// 8
// 6
// 4







// Assignment 5  
let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
let counter = letter.length;

for (let k = friends.length - friends.length; k < friends.length; k++) {
    if (friends[k][counter - counter] === letter.toUpperCase()) {
        continue;
    } else {
        console.log(`"${counter} => ${friends[k]}"`);
    }
    counter++;
}
// Output
// "1 => Sayed"
// "2 => Eman"
// "3 => Mahmoud"
// "4 => Osama"
// "5 => Sameh"








// Assignment 6    
let startsw = 0;
let swappedName = "elZerO";
let finish = "";

for (let i = startsw; i < swappedName.length; i++) {
    if (swappedName[i] === swappedName[i].toUpperCase()) {
        finish = finish + swappedName[i].toLowerCase();
    } else {
        finish = finish + swappedName[i].toUpperCase();
    }
}
console.log(finish);
// Output
// "ELzERo"







// Assignment 7   
let startmi = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

for (let i = startmi; i < mix.length; i++) { 
    if (typeof mix[i] === "string" || mix[i] === mix[startmi]) {
        continue;
    } else {
        console.log(mix[i]);
    }
}
// Output
// 2
// 3
// 4





















