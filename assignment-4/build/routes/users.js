"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var user_1 = require("./user");
var router = express.Router();
exports.router = router;
router.get('/', function (req, res, next) {
    res.render('users', {
        users: user_1.users,
        pageTitle: 'Users',
        path: '/',
        hasProducts: user_1.users.length > 0,
        usersActive: true,
        usersCSS: true
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcm91dGVzL3VzZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaUNBQW9DO0FBSXBDLCtCQUE4QjtBQUc5QixJQUFNLE1BQU0sR0FBbUIsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBYXZDLHdCQUFNO0FBWGYsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsVUFBQyxHQUFvQixFQUFFLEdBQXFCLEVBQUUsSUFBMEI7SUFDcEYsR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUU7UUFDaEIsS0FBSyxFQUFFLFlBQUs7UUFDWixTQUFTLEVBQUUsT0FBTztRQUNsQixJQUFJLEVBQUUsR0FBRztRQUNULFdBQVcsRUFBRSxZQUFLLENBQUMsTUFBTSxHQUFHLENBQUM7UUFDN0IsV0FBVyxFQUFFLElBQUk7UUFDakIsUUFBUSxFQUFFLElBQUk7S0FDakIsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUMifQ==