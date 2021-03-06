const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req, res) => {

    res.setHeader('Content-Type', 'text/html');
    let path = './view/';
    switch(req.url){
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-old':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    fs.readFile(path, (err, data) => {
        if(err){
            console.log(err);
            res.end();
        }
        res.end(data);
    })    
    console.log('request made');
})


server.listen(3000, 'localhost', () => {
    console.log('server is listening');
})