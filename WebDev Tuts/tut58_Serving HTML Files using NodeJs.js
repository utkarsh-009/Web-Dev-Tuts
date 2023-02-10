const http = require('http');
const fs = require('fs');
const fileContent = fs.readFileSync('tut27_Before and After Pseudo Selector.html')

// createServer two arguments: request and response
const server = http.createServer((req, res) =>{
    // providing content type of server (html) using writeHead
    res.writeHead(200, {'Content-type' : 'text/html'});
    // res.end() used to end reponse process
    res.end(fileContent)
})

// 80 port is bydefault port. Hence, generally used. if we used any other for ex: 8000 => we have mention url as '127.0.0.1:8000' to open server  
server.listen(80, '127.0.0.1', () =>{
    console.log("Listening on port 80")
})