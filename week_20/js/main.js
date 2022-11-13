


// Assigment 1
let dateNow = new Date();
let birthDay = new Date("Aug 11 ,2000");
let Age = dateNow - birthDay;

let seconds = Age / 1000;
console.log(`${Math.trunc(seconds)} Seconds`);

let minutes = seconds / 60;
console.log(`${Math.trunc(minutes)} Minutes`);

let hours = minutes / 60;
console.log(`${Math.trunc(hours)} Hours`);

let days = hours / 24;
console.log(`${Math.trunc(days)} Days`);

let months = days / 30;
console.log(`${Math.trunc(months)} Months`);

let years = months / 12;
console.log(`${Math.trunc(years)} Years`);

// Needed Output ( You )
// "1247939400 Seconds"
// "20798990 Minutes"
// "346650 Hours"
// "14444 Days"
// "481 Months"
// "40 Years"







// Assigment 2
let dateOne = new Date("1980-06-01T00:00:01");
console.log(dateOne);
// // Needed Output
// "Tue Jan 01 1980 00:00:01 GMT+0200 (Eastern European Standard Time)"






// Assigment 3
let lastedMonth = new Date();
lastedMonth.setFullYear(2022, 8, 30);
console.log(lastedMonth);

let monthes = ["January","February","March","April","May","June","July","August","September","October","November","December"];
lastedMonth.setDate(0);
console.log(`"Previous Month Is ${monthes[lastedMonth.getMonth()]} And Last Day Is ${lastedMonth.setDate(30)}"`);

// Other Solution
// console.log(`"Previous Month Is ${monthes[lastedMonth.getMonth() - 1]} And Last Day Is ${lastedMonth.setDate(30)}"`);

// Needed Output
// "Sat Apr 30 2022 18:13:20 GMT+0200 (Eastern European Standard Time)"
// "Previous Month Is April And Last Day Is 30"







// Assigment 4
// 1
let myDate = new Date('Aug 10 2000');
console.log(myDate);
// 2
let myDate2 = new Date(Date.parse('Aug 10 2000'));
console.log(myDate2);
//3
let myDate33 = new Date(2000, 7, 10);
console.log(myDate33);







// Assigment 5

            // // Start Time
            // let start = new Date();
            // // Operation
            // for (let j = 1; j <= 9999; j++) {
            //     console.log(j)
            // }
            // // End Time
            // let end = new Date();
            // // Operation Duration
            // let duration = end - start;
            // console.log(`Loop Took ${duration} Milliseconds`);

// Other Solution
// let t1 = performance.now();
// function Time() {
//     for(let i =1 ; i <=9999;i++){
//         console.log(i);
//     }
// }
// Time();
// let t2 = performance.now();
// console.log(`Loop Took ${(t2 - t1).toFixed()} Milliseconds`);
// // Needed Output
// "Loop Took 1921 Milliseconds."


















// Assigment 6
// Write Your Generator Function Here
function* gen() {
    let i =14;
    let addI = 140;
    while(true){
        yield i;
        i += addI;
        addI += 200;
    }
}
let generator = gen();
console.log(generator.next()); // {value: 14, done: false}
console.log(generator.next()); // {value: 154, done: false}
console.log(generator.next()); // {value: 494, done: false}
console.log(generator.next()); // {value: 1034, done: false}
console.log(generator.next()); // {value: 1774, done: false}
console.log(generator.next()); // {value: 2714, done: false}
console.log(generator.next()); // {value: 3854, done: false}
console.log(generator.next()); // {value: 5194, done: false}
console.log(generator.next()); // {value: 6734, done: false}














// Assigment 7
function* genNumbers() {
    yield* [1, 2, 2, 2, 3, 4, 5];
}
function* genLetters() {
    yield* ["A", "B", "B", "B", "C", "D"];
}
// Write Your Generator Function Here
function* genAll() { 
    yield* new Set(genNumbers());
    yield* new Set(genLetters());
}
let generator_1 = genAll();
console.log(generator_1.next()); // {value: 1, done: false}
console.log(generator_1.next()); // {value: 2, done: false}
console.log(generator_1.next()); // {value: 3, done: false}
console.log(generator_1.next()); // {value: 4, done: false}
console.log(generator_1.next()); // {value: 5, done: false}
console.log(generator_1.next()); // {value: "A", done: false}
console.log(generator_1.next()); // {value: "B", done: false}
console.log(generator_1.next()); // {value: "C", done: false}
console.log(generator_1.next()); // {value: "D", done: false}















// Assigment 8
import { a as numOne, b as numTwo, c as numThree } from "./mod_two.js";
import calc from "./mod_one.js";

console.log(calc(numOne, numTwo, numThree));

// Other Solution (My Best)
// import * as all from "./mod_two.js";
// import * as all_1 from "./mod_one.js";

// console.log(all_1.calc(all.a, all.b, all.c));
// console.log(all_1.calc_1(all.a, all.b, all.c));



































































