import express = require('express');
import { products } from '../services/product';

export class ShopController {
    private path = '/';
    public router = express.Router();

    constructor() {
        this.intializeRoutes();
    }

    public intializeRoutes() {
        this.router.get(`${this.path}`, this.getAllProducts);
        }

    private getAllProducts = (req: express.Request, res: express.Response, next: express.NextFunction) => {
        console.log(products);
        res.render('shop', {
            prods: products,
            pageTitle: 'Shop',
            path: '/',
            hasProducts: products.length > 0,
            shopActive: true,
            productCSS: true
        });
    }
}
