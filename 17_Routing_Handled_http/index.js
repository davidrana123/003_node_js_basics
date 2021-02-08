const http = require('http');

const server = http.createServer((req,res) => {
    if(req.url == "/"){
        res.end("Hellow from the home side");
    }else if (req.url == "/about"){
        res.end("hellow from thr about us ");
    }else if (req.url == "/contect"){
        res.end("hellow from thr contect us ");
    }else {
        res.writeHead(404 , {"content-type" : "text/html"});
        res.end("<h1>404 error page</h1>");
    }
});

server.listen(8000,"127.0.0.1", () => {
    console.log("port num8000");
})