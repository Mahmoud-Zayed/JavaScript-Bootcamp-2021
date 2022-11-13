
window.alert("Hello Worled")


document.getElementById("el").style.color = "red";


document.write("<h2>Elzero</h2>");
document.querySelector("h2").style.color = "white";
document.querySelector("h2").style.textAlign = "center";
document.querySelector("h2").style.backgroundColor = "black";
document.querySelector("h2").style.padding = "15px 5px";
document.querySelector("h2").style.fontFamily = "Arial";
document.querySelector("h2").style.fontWeight = "bold";


console.log("%cElzero %cWeb %cSchool", "color: green; font-size: 40px", "color: blue; font-weight: bolder; font-size: 40px", "color: white; background-color: red; font-size: 40px" );




console.group("Group1");
console.log("M1");
console.log("M2");
console.group("Group2");
console.log("M1");
console.log("M2");
console.group("Group3");
console.log("M1");
console.log("M2");
console.groupEnd();
console.groupEnd();
console.groupEnd();
console.group("Group11");
console.log("M1");
console.log("M2");


console.table(["a", "b", "c", "d", "e"]);


console.log("Iam In Console");
document.write("Iam In Page");
