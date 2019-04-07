import { createServer, IncomingMessage, ServerResponse, Server } from 'http';
import { requestHandler } from './routes';

const server: Server = createServer(requestHandler);

server.listen(8080);

console.log('App started!');