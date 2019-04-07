import { createServer, IncomingMessage, ServerResponse, Server } from 'http';
import express = require('express');
import { logger } from './logger';

const app: express.Application = express();

// app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
//     logger.silly('Inside first middleware!');
//     next();
// });

// app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
//     logger.silly('Inside second middleware!');
//     next();
// });

// app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
//     logger.silly('Inside third middleware!');
//     res.send({
//         example: "response"
//     })
// });

app.use('/users', (req: express.Request, res: express.Response, next: express.NextFunction) => {
    logger.silly('Inside /users middleware!');
    res.send([
        {
            id: 1,
            name: 'John',
            surname: 'Doe'
        }, {
            id: 2,
            name: 'Jane',
            surname: 'Doe'
        }
    ])
});

app.use('/', (req: express.Request, res: express.Response, next: express.NextFunction) => {
    logger.silly('Inside / middleware!');
    res.send('<h1>Hello from assignment 2!</h1>')
});

const server: Server = createServer(app);

server.listen(3000, () => {
    logger.info("Server running on port 3000");
})

