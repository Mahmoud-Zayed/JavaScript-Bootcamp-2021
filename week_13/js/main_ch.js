



///     chalange    // Assigment 2

let classadd = document.querySelector('.classes-to-add');
let arr =[];
classadd.onblur = function(){
    document.querySelector('.classes-list div').innerHTML = "";
    let elements = this.value.toLowerCase().split(' ');
    
    arr.push(elements);
    arr = arr.flat();
    
    let elementaddto = document.querySelector('.classes-list div');
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == ''){
            continue
        } else{
        arr = arr.sort()
        let spancreated = document.createElement('span');
        spancreated.textContent = arr[i];
        elementaddto.append(spancreated);
        }
    }
    classadd.value= '';
}

let classremove = document.querySelector('.classes-to-remove');
classremove.onblur = function(){
    document.querySelector('.classes-list div').innerHTML = "";

    let elementsremove = this.value.toLowerCase().split(' ');

    let elementaddto = document.querySelector('.classes-list div');

    for (let i = 0; i < elementsremove.length; i++) {
        let index = arr.indexOf(elementsremove[i])
        if (index > -1) {
            arr.splice(index, 1);
        }
    }

    for (let j = 0; j < arr.length; j++) {
        let spancreated = document.createElement('span');
        spancreated.textContent = arr[j];
        elementaddto.append(spancreated);
    }
    classremove.value= '';
}










