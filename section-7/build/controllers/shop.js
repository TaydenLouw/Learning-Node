"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var product_1 = require("../services/product");
var ShopController = /** @class */ (function () {
    function ShopController() {
        this.path = '/';
        this.router = express.Router();
        this.getAllProducts = function (req, res, next) {
            console.log(product_1.products);
            res.render('shop', {
                prods: product_1.products,
                pageTitle: 'Shop',
                path: '/',
                hasProducts: product_1.products.length > 0,
                shopActive: true,
                productCSS: true
            });
        };
        this.intializeRoutes();
    }
    ShopController.prototype.intializeRoutes = function () {
        this.router.get("" + this.path, this.getAllProducts);
    };
    return ShopController;
}());
exports.ShopController = ShopController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVycy9zaG9wLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaUNBQW9DO0FBQ3BDLCtDQUErQztBQUUvQztJQUlJO1FBSFEsU0FBSSxHQUFHLEdBQUcsQ0FBQztRQUNaLFdBQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7UUFVekIsbUJBQWMsR0FBRyxVQUFDLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxJQUEwQjtZQUM3RixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFRLENBQUMsQ0FBQztZQUN0QixHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtnQkFDZixLQUFLLEVBQUUsa0JBQVE7Z0JBQ2YsU0FBUyxFQUFFLE1BQU07Z0JBQ2pCLElBQUksRUFBRSxHQUFHO2dCQUNULFdBQVcsRUFBRSxrQkFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDO2dCQUNoQyxVQUFVLEVBQUUsSUFBSTtnQkFDaEIsVUFBVSxFQUFFLElBQUk7YUFDbkIsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFBO1FBakJHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRU0sd0NBQWUsR0FBdEI7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFHLElBQUksQ0FBQyxJQUFNLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFhVCxxQkFBQztBQUFELENBQUMsQUF2QkQsSUF1QkM7QUF2Qlksd0NBQWMifQ==