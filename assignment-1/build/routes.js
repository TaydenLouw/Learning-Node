"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function requestHandler(req, res) {
    var url = req.url;
    var method = req.method;
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Hello from Assignment 1</title></head>');
        res.write('<body><h1>Hello from Assignment 1!</h1><form action="/create-user" method="POST"><input type="text" name="username"></input><button type="submit">Submit</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/users' && method === 'GET') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Hello from Assignment 1</title></head>');
        res.write('<body><ul><li>User 1</li><li>User 2</li><li>User 3</li></ul></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/create-user' && method === 'POST') {
        var body_1 = [];
        req.on('data', function (chunk) {
            body_1.push(chunk);
        });
        return req.on('end', function () {
            var parsedBody = Buffer.concat(body_1).toString();
            var message = parsedBody.split('=')[1];
            console.log("Username: " + message);
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        });
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Unknown request</title></head>');
    res.write('<body><h1>Oop! It seems that this page does not exist.</h1></body>');
    res.write('</html>');
    res.end();
}
exports.requestHandler = requestHandler;
