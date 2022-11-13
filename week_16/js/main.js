


// Assigment 1
let myNumbers = [1, 2, 3, 4, 5];

// Write Your Destructuring Assignment Here
let [a_a, , , , e_e] = myNumbers;
console.log(a_a * e_e); // 5






// Assigment 2
let mySkills = ["HTML", "CSS", "JavaScript", ["PHP", "Python", ["Django", "Laravel"]]];

// Write Your Destructuring Assignment Here
let [a, b, c, [d, e, [f, g]]] = mySkills;

console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);

// My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel







// Assigment 3 
let arr1 = ["Ahmed", "Sameh", "Sayed"];
let arr2 = ["Mohamed", "Gamal", "Amir"];
let arr3 = ["Haytham", "Shady", "Mahmoud"];

// Play With Arrays To Prepare For Destructuring
// Write Your Destructuring Assignment Here

// [a_1, b_2, c_3] = ["Shady", "Mahmoud", "Ahmed"]
let [[c_3, ,], [], [, a_1, b_2]] = [arr1, arr2, arr3];

console.log(`My Best Friends: ${a_1}, ${b_2}, ${c_3}`);

// My Best Friends: Shady, Mahmoud, Ahmed





// Assigment 4
const member = {
    age: 30,
    working: false,
    country: "Egypt",
    hobbies: ["Reading", "Swimming", "Programming"],
};

// Write Your Destructuring Assignment Here
const {
    age: a_a_a,
    working: w,
    country: c_c,
    hobbies: [h1, , h3]
} = member;

console.log(`My Age Is ${a_a_a} And Iam ${w ? "" : "Not"} Working`);
// My Age Is 30 And Iam Not Working

console.log(`I Live in ${c_c}`);
// I Live in Egypt

console.log(`My Hobbies: ${h1} And ${h3}`);
// My Hobbies: Reading And Programming








// Assigment 5
const game = {
    title: "YS",
    developer: "Falcom",
    releases: {
        "Oath In Felghana": ["USA", "Japan"],
        "Ark Of Napishtim": {
            US: "20 USD",
            JAP: "10 USD",
        },
        Origin: "30 USD",
    },
};

// Write Your Destructuring Assignment/s Here
// [1]
const {
    title: t,
    developer: d_p,
} = game;
// [2]
let {
    "Oath In Felghana": [u, j],
    "Ark Of Napishtim": { US: u_price, JAP: j_price },
} = game.releases;
// [3]
let [o, a_p, or] = Object.keys(game.releases);


console.log(`My Favourite Games Style Is ${t} Style`);
// My Favourite Games Style Is YS Style

console.log(`And I Love ${d_p} Games`);
// And I Love Falcom Games

console.log(`My Best Release Is ${o} It Released in ${u} & ${j}`);
// My Best Release Is Oath In Felghana It Released in USA & Japan

console.log(`Although I Love ${a_p}`);
// Although I Love Ark Of Napishtim

console.log(`${a_p} Price in USA Is ${u_price}`);
// Ark Of Napishtim Price in USA Is 20 USD

console.log(`${a_p} Price in Japan Is ${j_price}`);
// Ark Of Napishtim Price in Japan Is 10 USD

console.log(`Origin Price Is ${or}`);
// Origin Price Is 30 USD






// Assigment 6 
let chosen = 2;
let myFriends = [
    { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
    { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
    { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

// Write Your Code Here
function details({
    title: name,
    age: age,
    available: av,
    skills: [, two],}) {
    // inennr function
    console.log(name);
    console.log(age);
    if (av === true) {
        console.log("Available");
    } else {
        console.log("Not available");
    }
    console.log(two);
};


// If chosen === 1
if (chosen === 1) {
    details(myFriends[0]);
}
// "Osama"
// 39
// "Available"
// "CSS"

// If chosen === 2
else if (chosen === 2) {
    details(myFriends[1]);
}
// "Ahmed"
// 25
// "Not Available"
// "Django"

// If chosen === 3
else if (chosen === 3) {
    details(myFriends[2]);
}
// "Sayed"
// 33
// "Available"
// "Laravel"

