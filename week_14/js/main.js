
// Assigment 1
let splitValue = prompt("Print Number From – To", "Example: 5-20").split("-");

let firstNumber = splitValue[0];
let seconedNumber = splitValue[1];

function bigNumber() {
    let bigNum;
    let samllNum;
    if (firstNumber <= seconedNumber) {
        bigNum = seconedNumber;
        samllNum = firstNumber;
    } else if (firstNumber >= seconedNumber) {
        bigNum = firstNumber;
        samllNum = seconedNumber;
    }
    return {
        bigNum,
        samllNum,
    }
};
let ValueFunctionResult = bigNumber();
let outNumberInDoc = document.querySelector(".nembers-count-dwon");
function result() {
    for (let i = ValueFunctionResult.samllNum; i <= ValueFunctionResult.bigNum; i++) {
        console.log(i); // testing code
        outNumberInDoc.innerHTML += `</br>${i}`;
    }
};
result();


// Assigment 2
let divPoupp = document.querySelector("section");
let closePoupp = document.querySelector(".popup span");


setTimeout(displayPoupp, 15000);

function displayPoupp() {
    divPoupp.style.display = "block";
}


closePoupp.onclick = function () {
    divPoupp.style.display = "none";
};














// // Assigment 3
let div = document.querySelector("div");

function countDwon() {
    div.innerHTML -= 1;
    if (div.innerHTML === "0") {
        clearInterval(counter);
    };
};
let counter = setInterval(countDwon, 1000);



// Assigment 4
let div_1 = document.querySelector("div.one");
function countDwonLink() {
    div_1.innerHTML -= 1;
    if (div_1.innerHTML === "0") {
        window.open("https://elzero.org/");
    } if (div_1.innerHTML === "0") {
        clearInterval(counter_1);
    }
};
let counter_1 = setInterval(countDwonLink, 1000);



// Assigment 5
let div_2 = document.querySelector("div.two");
function countDwonWindow() {
    div_2.innerHTML -= 1;
    if (div_2.innerHTML === "0") {
        window.open("https://elzero.org/", "", "left= 200, top= 200, width= 400, height= 400");
    } if (div_2.innerHTML === "0") {
        clearInterval(counter_2);
    }
};
let counter_2 = setInterval(countDwonWindow, 1000);




// Assigment  حل اخر كويس جدا بال ارروو فانكشن  5
// let ele = document.createElement('div');
// ele.textContent = 10;
// document.body.append(ele);

// let counter = setInterval(() => {
//     ele.textContent--;
//     if (ele.textContent === '0') {
//         window.open('https://elzero.org/', '', 'width:400 ; height:400;')
//     } if (ele.textContent === '0') {
//         clearInterval(counter);
//     }
// }, 1000);
