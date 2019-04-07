"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var logger_1 = require("../logger");
var router = express.Router();
exports.router = router;
var products = [];
exports.products = products;
router.get('/add-product', function (req, res, next) {
    logger_1.logger.silly('Inside /add-product middleware!');
    res.render('add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        productActive: true,
        productCSS: true,
        formsCSS: true
    });
});
router.post('/add-product', function (req, res, next) {
    logger_1.logger.silly('Inside /product middleware!');
    logger_1.logger.debug(JSON.stringify(req.body));
    products.push({
        title: req.body.title
    });
    logger_1.logger.silly('Redirecting to /');
    res.redirect('/');
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcm91dGVzL2FkbWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaUNBQW9DO0FBQ3BDLG9DQUFtQztBQU1uQyxJQUFNLE1BQU0sR0FBbUIsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBeUJ4Qyx3QkFBTTtBQXZCZCxJQUFNLFFBQVEsR0FBZSxFQUFFLENBQUM7QUF1QmhCLDRCQUFRO0FBckJ4QixNQUFNLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxVQUFDLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxJQUEwQjtJQUMvRixlQUFNLENBQUMsS0FBSyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7SUFDaEQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUU7UUFDdEIsU0FBUyxFQUFFLGFBQWE7UUFDeEIsSUFBSSxFQUFFLG9CQUFvQjtRQUMxQixhQUFhLEVBQUUsSUFBSTtRQUNuQixVQUFVLEVBQUUsSUFBSTtRQUNoQixRQUFRLEVBQUUsSUFBSTtLQUNqQixDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQztBQUVILE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLFVBQUMsR0FBb0IsRUFBRSxHQUFxQixFQUFFLElBQTBCO0lBQ2hHLGVBQU0sQ0FBQyxLQUFLLENBQUMsNkJBQTZCLENBQUMsQ0FBQztJQUM1QyxlQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDdkMsUUFBUSxDQUFDLElBQUksQ0FBQztRQUNWLEtBQUssRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUs7S0FDeEIsQ0FBQyxDQUFDO0lBQ0gsZUFBTSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ2pDLEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDdEIsQ0FBQyxDQUFDLENBQUMifQ==