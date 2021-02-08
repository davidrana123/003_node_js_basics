const EventEmitter = require("events");

const event = new EventEmitter();


//round 1 and 2


// event.on("sayMyName", () => {
//     console.log("your name is david");
// })

// //multial call ---one click err pop up other

// event.on("sayMyName", () => {
//     console.log("your name is singh");
// })

// event.on("sayMyName", () => {
//     console.log("your name is rana");
// })

// event.emit("sayMyName");

//round 3

event.on("chackpage", (sc , msg) => {
    console.log(`states code is ${sc} and it is ${msg}`);
})

event.emit("chackpage",200,"ok");


