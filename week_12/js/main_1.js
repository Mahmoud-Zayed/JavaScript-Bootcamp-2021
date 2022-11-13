


// Assigment 6


let elements = document.querySelector("[name=elements]");
let texts = document.querySelector("[name=texts]");
let submit = document.querySelector("[name=create]");
let selectValue = document.querySelector("[name=type]");

let results = document.querySelector(".results");


submit.addEventListener("click", (e) => {
    e.preventDefault();
    if (results.hasChildNodes()) {
        results.innerHTML = ""
    }
    if (elements.value !== "" && texts.value !== "") {
        for (let i = 0; i < elements.value; i++) {
            let ele = document.createElement(selectValue.value);
            ele.className = "box";
            ele.title = "Element";
            ele.id = `id-${i}`;
            ele.innerHTML = texts.value;
            results.appendChild(ele);
        }
    }
});






