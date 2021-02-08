const http = require('http')


const server = http.createServer((req,res) => {
    res.end("hellow from the other side David jii");
})

server.listen(8000,"127.0.0.1" , () => {
    console.log("lisining to the port num 8000");
});

