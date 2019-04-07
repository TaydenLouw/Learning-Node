"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var logger_1 = require("../logger");
var admin_1 = require("./admin");
var router = express.Router();
exports.router = router;
router.get('/', function (req, res, next) {
    res.render('shop', {
        prods: admin_1.products,
        pageTitle: 'Shop',
        path: '/',
        hasProducts: admin_1.products.length > 0,
        shopActive: true,
        productCSS: true
    });
    logger_1.logger.silly(JSON.stringify(admin_1.products));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXMvc2hvcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlDQUFvQztBQUNwQyxvQ0FBbUM7QUFHbkMsaUNBQWtDO0FBR2xDLElBQU0sTUFBTSxHQUFtQixPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7QUFjdkMsd0JBQU07QUFaZixNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxVQUFDLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxJQUEwQjtJQUNwRixHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtRQUNmLEtBQUssRUFBRSxnQkFBUTtRQUNmLFNBQVMsRUFBRSxNQUFNO1FBQ2pCLElBQUksRUFBRSxHQUFHO1FBQ1QsV0FBVyxFQUFFLGdCQUFRLENBQUMsTUFBTSxHQUFHLENBQUM7UUFDaEMsVUFBVSxFQUFFLElBQUk7UUFDaEIsVUFBVSxFQUFFLElBQUk7S0FDbkIsQ0FBQyxDQUFDO0lBQ0gsZUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFRLENBQUMsQ0FBQyxDQUFDO0FBQzNDLENBQUMsQ0FBQyxDQUFDIn0=