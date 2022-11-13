












// Assignment 1 
function sayHello(theName, theGender) {
    // Your Code Here
    if (theGender === "Male") {
        console.log(`Hello Mr ${theName}`);
    } else if (theGender === "Female") {
        console.log(`Hello Mr ${theName}`);
    } else {
        console.log(`Hello ${theName}`);
    }
}
// // Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"














// Assignment 2

function calculate(firstNum = "undefined", secondNum = "undefined", operation) {
    // Your Code Here
    if (firstNum === "undefined" || secondNum === "undefined") {
        console.log("Not Found Nember");
    } else if (operation === "undefined") {
        console.log(firstNum + secondNum);
    } else if (operation === "+") {
        console.log(firstNum + secondNum);
    } else if (operation === "-") {
        console.log(firstNum - secondNum);
    } else if (operation === "*") {
        console.log(firstNum * secondNum);
    }

}
// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, '+'); // 50
calculate(20, 30, '-'); // -10
calculate(20, 30, '*'); // 600






// Assignment 3
function ageInTime(theAge) {
    // Your Code Here
    if (theAge <= 10 || theAge >= 100) {
        console.log("Age Out Of Range");
    } else {
        console.log(`Your Age Is ${theAge} Years \n ${theAge * 12} Months \n ${theAge * 52} Weeks \n ${theAge * 364} Days \n ${theAge * 8736} Hour \n ${theAge * 524160} Minites \n ${theAge * 31449600} Secends`);
    }


}
// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(10); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months










// Assignment 4 //// Random Arguments Function Challenge
function checkStatus(a, b, c) {
    // Your Code Here
    if (typeof(a) === "string" && typeof(b) === "number" && typeof(c) === "boolean") {
        if (c === true) {
            console.log(`Hello ${a}, Your Age Is ${b}, You Are Available For Hire`);
        } else if (c === false) {
            console.log(`Hello ${a}, Your Age Is ${b}, You Are Not Available For Hire`);
        }
    } else if (typeof(b) === "string" && typeof(a) === "number" && typeof(c) === "boolean") {
        if (c === true) {
            console.log(`Hello ${b}, Your Age Is ${a}, You Are Available For Hire`);
        } else if (c === false) {
            console.log(`Hello ${b}, Your Age Is ${a}, You Are Not Available For Hire`);
        }
    } else if (typeof(c) === "string" && typeof(b) === "number" && typeof(a) === "boolean") {
        if (a === true) {
            console.log(`Hello ${c}, Your Age Is ${b}, You Are Available For Hire`);
        } else if (a === false) {
            console.log(`Hello ${c}, Your Age Is ${b}, You Are Not Available For Hire`);
        }
    } else if (typeof(c) === "string" && typeof(a) === "number" && typeof(b) === "boolean") {
        if (b === true) {
            console.log(`Hello ${c}, Your Age Is ${a}, You Are Available For Hire`);
        } else if (b === false) {
            console.log(`Hello ${c}, Your Age Is ${a}, You Are Not Available For Hire`);
        }
    } else if (typeof(a) === "string" && typeof(c) === "number" && typeof(b) === "boolean") {
        if (b === true) {
            console.log(`Hello ${a}, Your Age Is ${c}, You Are Available For Hire`);
        } else if (b === false) {
            console.log(`Hello ${a}, Your Age Is ${c}, You Are Not Available For Hire`);
        }
    } else if (typeof(b) === "string" && typeof(c) === "number" && typeof(a) === "boolean") {
        if (a === true) {
            console.log(`Hello ${b}, Your Age Is ${c}, You Are Available For Hire`);
        } else if (a === false) {
            console.log(`Hello ${b}, Your Age Is ${c}, You Are Not Available For Hire`);
        }
    }
}
// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"





// Assignment 5
function createSelectBox(startYear, endYear) {
    // Your Code Here
    document.write("<select>");
    for(let i = startYear; i <= endYear; i++){
        document.write(`<option value=${i}>${i}</option>`);
    }
    document.write("</select>")

}
createSelectBox(2000, 2021);










// Assignment 6
function multiplay(...aa) {
    let nanana = 1;
    for (let i = 0; i < aa.length; i++) {
        if (typeof aa[i] === "number") {
            nanana = nanana * Math.floor(aa[i]);
        } else if (typeof aa[i] === "string") {
            continue;
        }
    }
    console.log(`Totale Mltiplay Is ${nanana}`);
};

multiplay(10, 20); // 200
multiplay("A", 10, 30); // 300
multiplay(100.5, 10, "B"); // 1000