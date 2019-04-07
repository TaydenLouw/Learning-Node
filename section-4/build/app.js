"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("http");
var express = require("express");
var logger_1 = require("./logger");
var app = express();
app.use('/', function (req, res, next) {
    logger_1.logger.silly('Inside initial / middleware!');
    next();
});
app.use('/add-product', function (req, res, next) {
    logger_1.logger.silly('Inside /add-product middleware!');
    res.send('<h1>The "Add product" page</h1>');
});
app.use('/', function (req, res, next) {
    logger_1.logger.silly('Inside / middleware!');
    res.send('<h1>Hello from express</h1>');
});
var server = http_1.createServer(app);
server.listen(3000, function () {
    logger_1.logger.info("Server running on port 3000");
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZCQUE2RTtBQUM3RSxpQ0FBb0M7QUFDcEMsbUNBQWtDO0FBRWxDLElBQU0sR0FBRyxHQUF3QixPQUFPLEVBQUUsQ0FBQztBQUUzQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxVQUFDLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxJQUEwQjtJQUNqRixlQUFNLENBQUMsS0FBSyxDQUFDLDhCQUE4QixDQUFDLENBQUM7SUFDN0MsSUFBSSxFQUFFLENBQUM7QUFDWCxDQUFDLENBQUMsQ0FBQztBQUVILEdBQUcsQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLFVBQUMsR0FBb0IsRUFBRSxHQUFxQixFQUFFLElBQTBCO0lBQzVGLGVBQU0sQ0FBQyxLQUFLLENBQUMsaUNBQWlDLENBQUMsQ0FBQztJQUNoRCxHQUFHLENBQUMsSUFBSSxDQUFDLGlDQUFpQyxDQUFDLENBQUE7QUFDL0MsQ0FBQyxDQUFDLENBQUM7QUFFSCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxVQUFDLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxJQUEwQjtJQUNqRixlQUFNLENBQUMsS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFDckMsR0FBRyxDQUFDLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxDQUFBO0FBQzNDLENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBTSxNQUFNLEdBQUcsbUJBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUVqQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtJQUNoQixlQUFNLENBQUMsSUFBSSxDQUFDLDZCQUE2QixDQUFDLENBQUM7QUFDL0MsQ0FBQyxDQUFDLENBQUEifQ==