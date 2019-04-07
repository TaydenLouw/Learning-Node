import express = require('express');
import { logger } from '../logger';
import { products } from '../services/product';

export class AdminController {
    private path = '/admin';
    public router = express.Router();

    constructor() {
        this.intializeRoutes();
    }

    public intializeRoutes() {
        this.router.get(`${this.path}/add-product`, this.getAddProduct);
        this.router.post(`${this.path}/add-product`, this.postAddProduct);
    }

    private getAddProduct = (req: express.Request, res: express.Response, next: express.NextFunction) => {
        logger.silly('Inside /add-product middleware!');
        res.render('add-product', {
            pageTitle: 'Add Product',
            path: '/admin/add-product',
            productActive: true,
            productCSS: true,
            formsCSS: true
        });
    }

    private postAddProduct = (req: express.Request, res: express.Response, next: express.NextFunction) => {
        logger.silly('Inside /product middleware!');
        logger.debug(JSON.stringify(req.body));
        products.push({
            title: req.body.title
        })
        logger.silly('Redirecting to /');
        res.redirect('/');
    }

}

