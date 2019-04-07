"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var logger_1 = require("../logger");
var product_1 = require("../services/product");
var AdminController = /** @class */ (function () {
    function AdminController() {
        this.path = '/admin';
        this.router = express.Router();
        this.getAddProduct = function (req, res, next) {
            logger_1.logger.silly('Inside /add-product middleware!');
            res.render('add-product', {
                pageTitle: 'Add Product',
                path: '/admin/add-product',
                productActive: true,
                productCSS: true,
                formsCSS: true
            });
        };
        this.postAddProduct = function (req, res, next) {
            logger_1.logger.silly('Inside /product middleware!');
            logger_1.logger.debug(JSON.stringify(req.body));
            product_1.products.push({
                title: req.body.title
            });
            logger_1.logger.silly('Redirecting to /');
            res.redirect('/');
        };
        this.intializeRoutes();
    }
    AdminController.prototype.intializeRoutes = function () {
        this.router.get(this.path + "/add-product", this.getAddProduct);
        this.router.post(this.path + "/add-product", this.postAddProduct);
    };
    return AdminController;
}());
exports.AdminController = AdminController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29udHJvbGxlcnMvYWRtaW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpQ0FBb0M7QUFDcEMsb0NBQW1DO0FBQ25DLCtDQUErQztBQUUvQztJQUlJO1FBSFEsU0FBSSxHQUFHLFFBQVEsQ0FBQztRQUNqQixXQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBV3pCLGtCQUFhLEdBQUcsVUFBQyxHQUFvQixFQUFFLEdBQXFCLEVBQUUsSUFBMEI7WUFDNUYsZUFBTSxDQUFDLEtBQUssQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO1lBQ2hELEdBQUcsQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFO2dCQUN0QixTQUFTLEVBQUUsYUFBYTtnQkFDeEIsSUFBSSxFQUFFLG9CQUFvQjtnQkFDMUIsYUFBYSxFQUFFLElBQUk7Z0JBQ25CLFVBQVUsRUFBRSxJQUFJO2dCQUNoQixRQUFRLEVBQUUsSUFBSTthQUNqQixDQUFDLENBQUM7UUFDUCxDQUFDLENBQUE7UUFFTyxtQkFBYyxHQUFHLFVBQUMsR0FBb0IsRUFBRSxHQUFxQixFQUFFLElBQTBCO1lBQzdGLGVBQU0sQ0FBQyxLQUFLLENBQUMsNkJBQTZCLENBQUMsQ0FBQztZQUM1QyxlQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDdkMsa0JBQVEsQ0FBQyxJQUFJLENBQUM7Z0JBQ1YsS0FBSyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSzthQUN4QixDQUFDLENBQUE7WUFDRixlQUFNLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDakMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN0QixDQUFDLENBQUE7UUEzQkcsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFTSx5Q0FBZSxHQUF0QjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFJLElBQUksQ0FBQyxJQUFJLGlCQUFjLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFJLElBQUksQ0FBQyxJQUFJLGlCQUFjLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUF1Qkwsc0JBQUM7QUFBRCxDQUFDLEFBbENELElBa0NDO0FBbENZLDBDQUFlIn0=