const fs = require("fs");


// fs.writeFile("read,txt","today is a very good day)", (err) => {
//     console.log("files is creadted");
// })

// fs.appendFile("read,txt" , "appinding data", (err) => {
//     console.log("appinded succesfully");
// })

fs.readFile("read.txt",'utf-8',(err,data) => {
    console.log(data);
})