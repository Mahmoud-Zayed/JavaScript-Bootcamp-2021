
// Ass1
var numberOne = 10,
    numberTwo = 20;

console.log(numberOne + "" + numberTwo); // Normal Concatenate => 1020
console.log(typeof "numberOne + '' + numberTwo"); // Normal Concatenate => String
console.log(`${numberOne}${numberTwo}`); // Template Literals Way => 1020
console.log(typeof `${numberOne}${numberTwo}`); // Template Literals Way => String
console.log(numberTwo + "\n" + numberOne);
                                        /*
                                            Normal Concatenate
                                            20
                                            10
                                        */
console.log(`${numberTwo} 
${numberOne}`);
                                        /*
                                            Template Literals Way
                                            20
                                            10
                                        */


// Ass2
console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object



// Ass3
console.log("\`I\'m In \n \\\\ \n Love \\\\ \"\"\" \'\'\' \n \+\+ Whith \+\+ \\\"\"\"\\\"\"\" \n \"\"JavaScript\"\"\`\`");
                                        // `I'm In
                                        // \\
                                        // Love \\ """ '''
                                        // ++ With ++
                                        // \"""\"""
                                        // ""JavaScript""``


// Ass4
let a = 21;
let b = 20;

let c = b + "" + a + "_";

console.log("_" + a + "_" + c.repeat(3) + b + "_"); // _21_2021_2021_2021_20_




//Chalenge1
let title = "Elzero",
    description = "Elzero Web School",
    date = "25/10";

let divContins = `  <div class="card">
                        <h3>${title}</h3>
                        <p>${description}</p>
                        <span>${date}</span>
                    </div>`;

document.write(divContins.repeat(6));





