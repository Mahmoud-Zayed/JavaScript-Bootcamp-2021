



























// Assigment 1
let one1 = document.getElementById("elzero");
console.log(one1);

let two1 = document.getElementsByClassName("element")[0];
console.log(two1);

let three1 = document.getElementsByTagName("div")[0];
console.log(three1);

let four1 = document.getElementsByName("js")[0];
console.log(four1);

let five1 = document.querySelector("div");
console.log(five1);

let six1 = document.querySelector("[id = 'elzero']");
console.log(six1);

let seven1 = document.querySelector("[class = 'element']");
console.log(seven1);

let eight1 = document.querySelector("[name = 'js']");
console.log(eight1);

let nine1 = document.querySelectorAll("div")[0];
console.log(nine1);

let ten1 = document.querySelectorAll("[id = 'elzero']")[0];
console.log(ten1);

let eleven1 = document.querySelectorAll("[class = 'element']")[0];
console.log(eleven1);

let twelve1 = document.querySelectorAll("[name = 'js']")[0];
console.log(twelve1);

let therteen1 = document.body.children[0];
console.log(therteen1);

let fourteen1 = document.body.childNodes[1];
console.log(fourteen1);

let fiften1 = document.body.firstElementChild;
console.log(fiften1);











// Assigment 2

for (let i = 0; i < 10; i++) {
    let photo = document.querySelectorAll("img")[i]
    photo.src = "https://www.google.com.eg/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
    photo.alt = "Google Logo"
}




// Assigment 3

let dollarInput = document.querySelector("[name = 'dollar']");
let myDiv = document.querySelector("[class = 'result']");

dollarInput.oninput = function  () {
  myDiv.innerHTML = `{${dollarInput.value}} USD Dollar = {${(dollarInput.value * 15.6).toFixed(2)}} Egyptian Pound`;
}




// Assigment 4
let one = document.querySelector("[class = 'one']");
let two = document.querySelector("[class = 'two']");

two.textContent = one.textContent + " " + 2;
one.title = two.title;
one.textContent = one.title;
two.title = two.className;





// Assigment 5

let imgPhoto = document.querySelectorAll(".images_alt img");
for (let i = 0; i <= imgPhoto.length; i++) {  
    imgPhoto[i].src = "https://img.freepik.com/free-vector/gradient-triangle-molecule-editable-slogan-logo-design_53876-116040.jpg?w=1060&t=st=1666047252~exp=1666047852~hmac=65fb014ed9f5ad8a6279a508c93c1ca4da763e972a41f24f171242e1ee27c80b"
    if (imgPhoto[i].hasAttribute("alt")) {
        imgPhoto[i].alt = "Old"
    } else {
        imgPhoto[i].alt = "Elzero New" 
    }
}














