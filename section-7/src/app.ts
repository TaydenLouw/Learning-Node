import { createServer, IncomingMessage, ServerResponse, Server } from 'http';
import { join } from 'path';

import express = require('express');
import bodyParser = require('body-parser');

import { logger } from './logger';
import { AdminController } from './controllers/admin';
import { ShopController } from './controllers/shop';

const app: express.Application = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(express.static(join(__dirname, 'public')))

app.use('/', new AdminController().router);

app.use('/', new ShopController().router);

app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
    logger.silly('404 error page');
    res.status(404).render('404', { pageTitle: 'Page Not Found' });
});


const server = createServer(app);

server.listen(3000, () => {
    logger.info("Server running on port 3000");
})

