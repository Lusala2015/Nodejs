// const http = require('http');
// const fs = require ('fs');
// http.createServer((req,res)=>{
//     const readStream = fs.createReadStream('./static/index.html');
//     res.writeHead(200,{'content-type':'text/html'});
//     readStream.pipe(res);
// }).listen(3000);

// const http = require('http');
// const fs = require ('fs');
// http.createServer((req,res)=>{
//     const readStream = fs.createReadStream('./static/example.json');
//     res.writeHead(200,{'Content-type':'application/json'});
//     readStream.pipe(res);
// }).listen(3000);


//loading the image
const http = require('http');
const fs = require ('fs');
http.createServer((req,res)=>{
    const readStream = fs.createReadStream('./static/answers.jpg');
    res.writeHead(200,{'Content-type':'image/jpg'});
    readStream.pipe(res);
}).listen(3000);