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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3JvdXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHlCQUE4QztBQUc5QyxTQUFnQixjQUFjLENBQUMsR0FBb0IsRUFBRSxHQUFtQjtJQUNwRSxJQUFNLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDO0lBQ3BCLElBQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFDMUIsSUFBSSxHQUFHLEtBQUssR0FBRyxFQUFFO1FBQ2IsR0FBRyxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDM0MsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNwQixHQUFHLENBQUMsS0FBSyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7UUFDdkQsR0FBRyxDQUFDLEtBQUssQ0FBQyx5SUFBeUksQ0FBQyxDQUFBO1FBQ3BKLEdBQUcsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDckIsT0FBTyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7S0FDcEI7SUFDRCxJQUFJLEdBQUcsS0FBSyxVQUFVLElBQUksTUFBTSxLQUFLLE1BQU0sRUFBRTtRQUN6QyxJQUFNLE1BQUksR0FBZSxFQUFFLENBQUM7UUFDNUIsR0FBRyxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsVUFBQyxLQUFVO1lBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbkIsTUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sR0FBRyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUU7WUFDakIsSUFBTSxVQUFVLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNsRCxJQUFNLE9BQU8sR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pDLGNBQVMsQ0FBQyxhQUFhLEVBQUUsT0FBTyxFQUFFLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxFQUFFLFVBQUMsR0FBMkI7Z0JBQ2hGLEdBQUcsQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDO2dCQUNyQixHQUFHLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsQ0FBQTtnQkFDOUIsT0FBTyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDckIsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztLQUNOO0lBQ0QsR0FBRyxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDM0MsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNwQixHQUFHLENBQUMsS0FBSyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7SUFDdkQsR0FBRyxDQUFDLEtBQUssQ0FBQyxvREFBb0QsQ0FBQyxDQUFBO0lBQy9ELEdBQUcsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDckIsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQ2QsQ0FBQztBQWpDRCx3Q0FpQ0MifQ==