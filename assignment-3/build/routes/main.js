"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var logger_1 = require("../logger");
var path_1 = require("path");
var path_2 = require("../util/path");
var router = express.Router();
exports.router = router;
router.get('/users', function (req, res, next) {
    logger_1.logger.silly('Inside /add-product middleware!');
    res.sendFile(path_1.join(path_2.fileName, 'views', 'users.html'));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXMvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlDQUFvQztBQUNwQyxvQ0FBbUM7QUFDbkMsNkJBQTRCO0FBQzVCLHFDQUFxQztBQUlyQyxJQUFNLE1BQU0sR0FBbUIsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBT3hDLHdCQUFNO0FBTGQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsVUFBQyxHQUFvQixFQUFFLEdBQXFCLEVBQUUsSUFBMEI7SUFDekYsZUFBTSxDQUFDLEtBQUssQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO0lBQ2hELEdBQUcsQ0FBQyxRQUFRLENBQUMsV0FBSSxDQUFDLGVBQVEsRUFBQyxPQUFPLEVBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztBQUN0RCxDQUFDLENBQUMsQ0FBQyJ9