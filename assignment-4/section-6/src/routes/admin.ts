import express = require('express');
import { logger } from '../logger';
import { join } from 'path';
import {fileName} from '../util/path'



const router: express.Router = express.Router();

const products: Array<any> = [];

router.get('/add-product', (req: express.Request, res: express.Response, next: express.NextFunction) => {
    logger.silly('Inside /add-product middleware!');
    res.render('add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        productActive: true,
        productCSS: true,
        formsCSS: true
    });
});

router.post('/add-product', (req: express.Request, res: express.Response, next: express.NextFunction) => {
    logger.silly('Inside /product middleware!');
    logger.debug(JSON.stringify(req.body));
    products.push({
        title: req.body.title
    });
    logger.silly('Redirecting to /');
    res.redirect('/');
});

export {router, products}

