"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var logger_1 = require("../logger");
var path_1 = require("path");
var path_2 = require("../util/path");
var router = express.Router();
exports.router = router;
router.get('/', function (req, res, next) {
    logger_1.logger.silly('Inside / middleware!');
    res.sendFile(path_1.join(path_2.fileName, 'views', 'shop.html'));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXMvc2hvcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlDQUFvQztBQUNwQyxvQ0FBbUM7QUFDbkMsNkJBQTRCO0FBQzVCLHFDQUFxQztBQUdyQyxJQUFNLE1BQU0sR0FBbUIsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBT3hDLHdCQUFNO0FBTGQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsVUFBQyxHQUFvQixFQUFFLEdBQXFCLEVBQUUsSUFBMEI7SUFDcEYsZUFBTSxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQ3JDLEdBQUcsQ0FBQyxRQUFRLENBQUMsV0FBSSxDQUFDLGVBQVEsRUFBQyxPQUFPLEVBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztBQUNyRCxDQUFDLENBQUMsQ0FBQyJ9