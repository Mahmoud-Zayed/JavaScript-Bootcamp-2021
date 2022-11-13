

// Assigment 1
let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
let ipRe = /\d{4}:\w{3}:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}/ig;

console.log(ip.match(ipRe));



// Assigment 2
let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
let specialNRex = /Os\d*O/ig;

console.log(specialNames.match(specialNRex));

// Output
// ['Os10O', 'OsO', 'Os100O']






// Assigment 3  
let phone = "+(995)-123 (4567)";
let phoneRex = /\W\(\d{3}\)-\d{3}\s\(\d{4}\)/g;
console.log(phone.match(phoneRex));







// Assigment 4 
let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;
// https? ==> http or https
// :\/\/ ==> ://
// (?:[-\w]+\.)? ==> (?    :    [-\w]+    \.    )?
// ([-\w]+) ==>    ([-\w]+)
// \.\w+ ==> .wordMore
// (?:\.\w+)? ==> (?    :    ..    wordMore    )?
// \/?.* == / or none/    .    *All













// Assigment 5
let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";

let re_1 = /\d{2}\/?\s?\-?\s?\d{2}\/?\s?\-?\s?\d{2,4}/g; // Write Pattern Here
// another solution
// let re_1 = /\d{2}(\/|\s|\s-\s)\d{2}(\/|\s|\s-\s)\d{2,4}/g; // Write Pattern Here

console.log(date1.match(re_1)); // "25/10/1982"
console.log(date2.match(re_1)); // "25 - 10 - 1982"
console.log(date3.match(re_1)); // "25 10 1982"
console.log(date4.match(re_1)); // "25 10 82"










// Assigment 6
let url1 = 'elzero.org';
let url2 = 'http://elzero.org';
let url3 = 'https://elzero.org';
let url4 = 'https://www.elzero.org';
let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';

let re_2 = /(https?:\/\/)?(\w+.)?\w+.org(:?\d{4}\/\w+.\w+\?\w+=\d{3}&\w+=\w+)?/ig; // Write Your Pattern Here

console.log(url1.match(re_2));
console.log(url2.match(re_2));
console.log(url3.match(re_2));
console.log(url4.match(re_2));
console.log(url5.match(re_2));



















