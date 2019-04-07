import { createServer, IncomingMessage, ServerResponse, Server } from 'http';
import { join } from 'path';

import express = require('express');
import bodyParser = require('body-parser');

import { logger } from './logger';
import {router as adminRouter} from './routes/main'

const app: express.Application = express();

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(express.static(join(__dirname,'public')))

app.use(adminRouter);


app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
    logger.silly('404 error page');
    res.status(404).sendFile(join(__dirname,'views','page-not-found.html'))
});


const server = createServer(app);

server.listen(3000, () => {
    logger.info("Server running on port 3000");
})

