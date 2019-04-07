import { createServer, IncomingMessage, ServerResponse, Server } from 'http';
import { requestHandler } from './routes';

const server: Server = createServer(requestHandler);

console.log('Starting app.');

server.listen(8080);

console.log('App started!');