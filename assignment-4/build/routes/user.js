"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var logger_1 = require("../logger");
var router = express.Router();
exports.router = router;
var users = [];
exports.users = users;
router.get('/add-user', function (req, res, next) {
    logger_1.logger.debug('Rendering add user page.');
    res.render('add-user', {
        pageTitle: 'Add User',
        path: '/admin/add-user',
        userActive: true,
        userCSS: true,
        formsCSS: true
    });
});
router.post('/add-user', function (req, res, next) {
    logger_1.logger.debug('Adding user to list.');
    users.push({
        name: req.body.name
    });
    logger_1.logger.info('Redirecting.');
    res.redirect('/');
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXMvdXNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlDQUFvQztBQUNwQyxvQ0FBbUM7QUFLbkMsSUFBTSxNQUFNLEdBQW1CLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQXdCeEMsd0JBQU07QUF0QmQsSUFBTSxLQUFLLEdBQWUsRUFBRSxDQUFDO0FBc0JiLHNCQUFLO0FBcEJyQixNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxVQUFDLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxJQUEwQjtJQUM1RixlQUFNLENBQUMsS0FBSyxDQUFDLDBCQUEwQixDQUFDLENBQUM7SUFDekMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUU7UUFDbkIsU0FBUyxFQUFFLFVBQVU7UUFDckIsSUFBSSxFQUFFLGlCQUFpQjtRQUN2QixVQUFVLEVBQUUsSUFBSTtRQUNoQixPQUFPLEVBQUUsSUFBSTtRQUNiLFFBQVEsRUFBRSxJQUFJO0tBQ2pCLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDO0FBRUgsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsVUFBQyxHQUFvQixFQUFFLEdBQXFCLEVBQUUsSUFBMEI7SUFDN0YsZUFBTSxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQ3JDLEtBQUssQ0FBQyxJQUFJLENBQUM7UUFDUCxJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJO0tBQ3RCLENBQUMsQ0FBQztJQUNILGVBQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDNUIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN0QixDQUFDLENBQUMsQ0FBQyJ9