import express = require('express');
import { logger } from '../logger';
import { join } from 'path';
import { fileName } from '../util/path'
import { products } from './admin'


const router: express.Router = express.Router();

router.get('/', (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.render('shop', {
        prods: products,
        pageTitle: 'Shop',
        path: '/',
        hasProducts: products.length > 0,
        shopActive: true,
        productCSS: true
    });
    logger.silly(JSON.stringify(products));
});

export { router }

