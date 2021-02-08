const os = require('os');

console.log(os.arch());

const freeMemory = os.freemem();
console.log(freeMemory);

const totalMemory = os.totalmem();
console.log(`${freeMemory / 1024 / 1024 / 1024 / 1024}`);

console.log(os.type());

//operating system