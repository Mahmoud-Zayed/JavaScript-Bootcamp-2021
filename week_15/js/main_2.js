// Assigment 2
let threeInput = document.querySelectorAll(".container-form input");
let selectOption = document.querySelector("#option");



// input one
threeInput[0].addEventListener("blur", function () {
    window.sessionStorage.setItem("inputValue_1", this.value)
});
if (window.sessionStorage.inputValue_1) {
    threeInput[0].value = window.sessionStorage.inputValue_1;
};

// input two
threeInput[1].addEventListener("blur", function () {
    window.sessionStorage.setItem("inputValue_2", this.value)
});
if (window.sessionStorage.inputValue_2) {
    threeInput[1].value = window.sessionStorage.inputValue_2;
};

// input three
threeInput[2].addEventListener("blur", function () {
    window.sessionStorage.setItem("inputValue_3", this.value)
});
if (window.sessionStorage.inputValue_3) {
    threeInput[2].value = window.sessionStorage.inputValue_3;
};

// select option
selectOption.addEventListener("change", function () {
    window.sessionStorage.setItem("finalValue",this.value);
});
if(window.sessionStorage.finalValue){
    selectOption.value = window.sessionStorage.finalValue;
};











