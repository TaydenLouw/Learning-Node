"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var logger_1 = require("../logger");
var path_1 = require("path");
var path_2 = require("../util/path");
var router = express.Router();
exports.router = router;
router.get('/add-product', function (req, res, next) {
    logger_1.logger.silly('Inside /add-product middleware!');
    res.sendFile(path_1.join(path_2.fileName, 'views', 'add-product.html'));
});
router.post('/add-product', function (req, res, next) {
    logger_1.logger.silly('Inside /product middleware!');
    logger_1.logger.debug(JSON.stringify(req.body));
    logger_1.logger.silly('Redirecting to /');
    res.redirect('/');
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcm91dGVzL2FkbWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaUNBQW9DO0FBQ3BDLG9DQUFtQztBQUNuQyw2QkFBNEI7QUFDNUIscUNBQXFDO0FBSXJDLElBQU0sTUFBTSxHQUFtQixPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7QUFjeEMsd0JBQU07QUFaZCxNQUFNLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxVQUFDLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxJQUEwQjtJQUMvRixlQUFNLENBQUMsS0FBSyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7SUFDaEQsR0FBRyxDQUFDLFFBQVEsQ0FBQyxXQUFJLENBQUMsZUFBUSxFQUFDLE9BQU8sRUFBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7QUFDNUQsQ0FBQyxDQUFDLENBQUM7QUFFSCxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxVQUFDLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxJQUEwQjtJQUNoRyxlQUFNLENBQUMsS0FBSyxDQUFDLDZCQUE2QixDQUFDLENBQUM7SUFDNUMsZUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLGVBQU0sQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUNqQyxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3RCLENBQUMsQ0FBQyxDQUFDIn0=