




// Assigment 2  &  1

let myReq = new XMLHttpRequest();
myReq.open("GET", "http://127.0.0.1:5500/week_21/js/articles.json");
myReq.send();
myReq.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
        console.log(typeof this.responseText);
        console.log("Data Loaded");
    };
};    



// Assigment 3
myReq.onload = function () { 
    let mainData = JSON.parse(this.responseText);
    for (let i = 0; i < mainData.length; i++) {
        mainData[i]["category"] = "All";
        mainData[i]["author"] = "Yassin";
    };
    console.log(mainData);
    let updatedData = JSON.stringify(mainData);
    console.log(updatedData);




    // Assigment 4  
    let jsonData = JSON.parse(this.responseText);
    let mainDiv = document.createElement("div");
    mainDiv.id = "main";
    for (let i = 0; i < jsonData.length; i++) {
        let obj = jsonData[i];
        let div = document.createElement("div");
        let insideDiv = `
                        <h2>${obj.title} <span>${obj.id}</span> </h2>
                        <p>${obj.body}</p>
                        <p>Author: ${obj.author}</p>
                        <p>Category: ${obj.category}</p>
                        `;
        div.innerHTML = insideDiv;
        mainDiv.appendChild(div);
    };
    document.body.append(mainDiv);
    };













