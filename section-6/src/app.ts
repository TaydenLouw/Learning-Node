import { createServer, IncomingMessage, ServerResponse, Server } from 'http';
import { join } from 'path';

import express = require('express');
import bodyParser = require('body-parser');

import { logger } from './logger';
import { router as adminRouter } from './routes/admin'
import { router as shopRouter } from './routes/shop'

const app: express.Application = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(express.static(join(__dirname, 'public')))

app.use('/admin', adminRouter);

app.use('/', shopRouter);

app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
    logger.silly('404 error page');
    res.status(404).render('404', { pageTitle: 'Page Not Found' });
});


const server = createServer(app);

server.listen(3000, () => {
    logger.info("Server running on port 3000");
})

