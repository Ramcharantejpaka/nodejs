// var http = require('http');
// http.createServer(function(req,res){
//     // response.writeHead(statusCode[,statusMessage][,headers])
//     res.writeHead(200,{'Content-Type':'text/html'});
//     res.end('Hello World!');
// }).listen(8080);


// var http = require('http');
// http.createServer((req,res) =>{
//     res.write('Hello Server');
//     res.end();
//     console.log('server running');
// }).listen(8080)


// var http = require('http');
// http.createServer((req,res)=>{
//     res.write(req.url);
//     res.end();
//     console.log('server running');
// }).listen(8080)


// var http = require('http');
// var fs = require('fs')
// http.createServer((req,res)=>{
//     fs.readFile('text.txt',(err,data)=>{
//         res.write(data);
//         res.end();
//     })
// }).listen(8080)


// var http = require('http');
// var fs = require('fs');
// http.createServer((req,res)=>{
//     fs.appendFile('text.txt',' Thank You',(err,data)=>{
//         res.write(data);
//         res.end();
//     });
// }).listen(8080)


// var http = require('http');
// var fs = require('fs');
// http.createServer((req,res)=>{
//     fs.writeFile('text.txt','this is the new text added',((err,data)=>{
//         res.write(data);
//         res.end();
//     }))
// }).listen(8080)


/* FILE DELETING */

// var http = require('http');
// var fs = require('fs');
// http.createServer((req,res)=>{
//     fs.unlink('text.txt',(err)=>{
//         {
//             if(err) throw err;
//             console.log('file deleted');
//         }
//     })
// }).listen(8080)


/* OPEN FILE FOR WRITE MODE */

// var fs = require('fs');
// fs.open('text.txt','w',function(err,file){
//     if(err) throw err;
//     console.log('saved!');
// });


/* RENAME FILES */

var fs = require('fs');
fs.rename('text.txt','test.txt',function(err){
    if(err) throw err;
    console.log('File Renamed !');
});
