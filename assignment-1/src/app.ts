import { createServer, Server } from 'http';
import { requestHandler } from './routes';

const server: Server = createServer(requestHandler);

server.listen(3000);

console.log('App started!');