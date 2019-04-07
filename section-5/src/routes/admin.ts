import express = require('express');
import { logger } from '../logger';
import { join } from 'path';
import {fileName} from '../util/path'



const router: express.Router = express.Router();

router.get('/add-product', (req: express.Request, res: express.Response, next: express.NextFunction) => {
    logger.silly('Inside /add-product middleware!');
    res.sendFile(join(fileName,'views','add-product.html'));
});

router.post('/add-product', (req: express.Request, res: express.Response, next: express.NextFunction) => {
    logger.silly('Inside /product middleware!');
    logger.debug(JSON.stringify(req.body));
    logger.silly('Redirecting to /');
    res.redirect('/');
});

export {router}

