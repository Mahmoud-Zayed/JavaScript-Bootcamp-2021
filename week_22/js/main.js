// Assigment 1  
const myData = new Promise((res, rej) => {
    let json = [
    {
        "userId": 10,
        "title": "Article Title Number 1",
        "description": "Article Description Number 1"
    },
    {
        "userId": 5,
        "title": "Article Title Number 2",
        "description": "Article Description Number 2"
    },
    {
        "userId": 5,
        "title": "Article Title Number 3",
        "description": "Article Description Number 3"
    },
    {
        "userId": 5,
        "title": "Article Title Number 4",
        "description": "Article Description Number 4"
    },
    {
        "userId": 5,
        "title": "Article Title Number 5",
        "description": "Article Description Number 5"
    },
    {
        "userId": 5,
        "title": "Article Title Number 6",
        "description": "Article Description Number 6"
    },
    {
        "userId": 25,
        "title": "Article Title Number 7",
        "description": "Article Description Number 7"
    },
    {
        "userId": 25,
        "title": "Article Title Number 8",
        "description": "Article Description Number 8"
    },
    {
        "userId": 15,
        "title": "Article Title Number 9",
        "description": "Article Description Number 9"
    },
    {
        "userId": 15,
        "title": "Article Title Number 10",
        "description": "Article Description Number 10"
    }
]
    
if (json.length > 0) {
    res(json)
} else {
    rej(Error("No Json"));
};

})
myData.then((resvalue) => {
    resvalue.length = 5
    for (let i = 0; i <= 5; i++) {
        let div = document.createElement("div")
        let h3 = document.createElement("h3")
        let pr = document.createElement("p")
        h3.appendChild(document.createTextNode(resvalue[i]["title"]))
        pr.appendChild(document.createTextNode(resvalue[i]["description"]))
        div.appendChild(h3)
        div.appendChild(pr)
        document.body.appendChild(div)
    }
    console.log(resvalue);
}).catch((rejvalue) => {
    console.log(`Erroe ${rejvalue}`)
});












// Assigment 2 
fetch("https://api.github.com/users/elzerowebschool/repos").then((result) => {
    let myData = result.json();
    console.log(myData)
    return myData
})
.then((myData) => {
    myData.length = 5;
    return myData
})
.then((myData) => {
    for (let i = 0; i <= 5; i++ ) {
        let div = document.createElement("div");
        let h3 = document.createElement("h3");
        let pr = document.createElement("p");
        h3.appendChild(document.createTextNode(myData[i]["name"]));
        pr.appendChild(document.createTextNode(myData[i]["full_name"]));
        div.appendChild(h3);
        div.appendChild(pr);
        document.body.appendChild(div);
    };
});