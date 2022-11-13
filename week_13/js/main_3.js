


// Assigment 3

let p = document.querySelector("p");
p.remove();



// let div = document.querySelector('.our-element'); 

let start = document.createElement('div');
start.classList.add('start');
start.setAttribute('title' , 'start Element')
start.setAttribute('data-value' , 'start')
start.textContent = 'start';

document.body.prepend(start);

let end = document.createElement("div");
end.classList.add("end");
end.setAttribute("title", "end");
end.setAttribute("data-value", "end");
end.textContent = "end";

document.body.append(end);

//  طريقه اخري /// العكس 
// div.before(end);
// div.after(start);

