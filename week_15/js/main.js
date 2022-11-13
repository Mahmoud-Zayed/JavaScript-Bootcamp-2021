// Assigment 1
let selectFont = document.querySelector(".select-font");
let selectColor = document.querySelector('.select-color');
let selectSize = document.querySelector('.select-size');


// Change font-family
if (window.localStorage.getItem("font-fam")) {
    document.body.style.fontFamily = window.localStorage.getItem("font-fam");
    selectFont.value = window.localStorage.getItem("font-fam");
} else {
    document.body.style.cssText += `font-family: ${selectFont.value};`;
};
selectFont.addEventListener('change', function () {
    document.body.style.fontFamily = selectFont.value;
    window.localStorage.setItem('font-fam', selectFont.value);
});

// Change color
if (window.localStorage.getItem("color")) {
    document.body.style.color = window.localStorage.getItem("color");
    selectColor.value = window.localStorage.getItem("color");
} else { 
    document.body.style.cssText += `color: ${selectColor.value};`;
}
selectColor.addEventListener('change', function () {
    document.body.style.color = selectColor.value;
    document.body.style.borderColor = selectColor.value;
    window.localStorage.setItem('color', selectColor.value);
});


// Change font-size
if (window.localStorage.getItem("font-size")) {
    document.body.style.fontSize = window.localStorage.getItem("font-size");
    selectSize.value = window.localStorage.getItem("font-size");
} else {
    document.body.style.cssText += `font-size: ${selectSize.value}`
}
selectSize.addEventListener('change', function () {
    document.body.style.fontSize = selectSize.value+"px";
    window.localStorage.setItem("font-size", selectSize.value+"px");
});



































