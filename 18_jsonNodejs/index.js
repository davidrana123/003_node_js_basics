

 //console.log(bioData.name);

// //1-stap
// //converting to object to json 
// // jsonData = JSON.stringify

// const jsonData = JSON.stringify(bioData);
// console.log(jsonData)

// //2-stap
// //json to object

// const objData = JSON.parse(jsonData);
// console.log(objData);

const fs = require('fs');
const bioData = {
    name : "david",
    age : 21,
    channel : "thapa techial"
};

// challenge 
// 1: convert to JSON
// 2: save to other file 
// 3 : read file
//4 : again conver back to json obj 
// 5 : console.log

const jsonData = JSON.stringify(bioData);
fs.writeFile('json1.json',jsonData, (err) => {
    console.log("done");
})

fs.readFile('json1.json','utf-8',(err,data) => {
    console.log(data);
    const objson = JSON.parse(data);
console.log(objson);
})




