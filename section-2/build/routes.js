"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
function requestHandler(req, res) {
    var url = req.url;
    var method = req.method;
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"></input><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/message' && method === 'POST') {
        var body_1 = [];
        req.on('data', function (chunk) {
            console.log(chunk);
            body_1.push(chunk);
        });
        return req.on('end', function () {
            var parsedBody = Buffer.concat(body_1).toString();
            var message = parsedBody.split('=')[1];
            fs_1.writeFile('message.txt', message, { encoding: 'utf8' }, function (err) {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from my nodejs server!</h1></body>');
    res.write('</html>');
    res.end();
}
exports.requestHandler = requestHandler;
