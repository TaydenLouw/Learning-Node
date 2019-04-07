import { IncomingMessage, ServerResponse } from 'http';

export function requestHandler(req: IncomingMessage, res: ServerResponse) {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Hello from Assignment 1</title></head>');
        res.write('<body><h1>Hello from Assignment 1!</h1><form action="/create-user" method="POST"><input type="text" name="username"></input><button type="submit">Submit</button></form></body>')
        res.write('</html>');
        return res.end();
    }
    if (url === '/users' && method === 'GET') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Hello from Assignment 1</title></head>');
        res.write('<body><ul><li>User 1</li><li>User 2</li><li>User 3</li></ul></body>')
        res.write('</html>');
        return res.end();
    }
    if (url === '/create-user' && method === 'POST') {
        const body: Array<any> = [];
        req.on('data', (chunk: any) => {
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            console.log(`Username: ${message}`);
            res.statusCode = 302;
            res.setHeader('Location', '/')
            return res.end();
        });
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Unknown request</title></head>');
    res.write('<body><h1>Oop! It seems that this page does not exist.</h1></body>')
    res.write('</html>');
    res.end();
}



