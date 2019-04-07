import { createServer, IncomingMessage, ServerResponse, Server } from 'http';
import express = require('express');
import { logger } from './logger';

const app: express.Application = express();

app.use('/', (req: express.Request, res: express.Response, next: express.NextFunction) => {
    logger.silly('Inside initial / middleware!');
    next();
});

app.use('/add-product', (req: express.Request, res: express.Response, next: express.NextFunction) => {
    logger.silly('Inside /add-product middleware!');
    res.send('<h1>The "Add product" page</h1>')
});

app.use('/', (req: express.Request, res: express.Response, next: express.NextFunction) => {
    logger.silly('Inside / middleware!');
    res.send('<h1>Hello from express</h1>')
});

const server = createServer(app);

server.listen(3000, () => {
    logger.info("Server running on port 3000");
})

