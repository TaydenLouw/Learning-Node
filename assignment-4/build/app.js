"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("http");
var path_1 = require("path");
var express = require("express");
var bodyParser = require("body-parser");
var logger_1 = require("./logger");
var user_1 = require("./routes/user");
var users_1 = require("./routes/users");
var app = express();
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.static(path_1.join(__dirname, 'public')));
app.use('/admin', user_1.router);
app.use('/', users_1.router);
app.use(function (req, res, next) {
    logger_1.logger.silly('404 error page');
    res.status(404).render('404', { pageTitle: 'Page Not Found' });
});
var server = http_1.createServer(app);
server.listen(3000, function () {
    logger_1.logger.info("Server running on port 3000");
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZCQUE2RTtBQUM3RSw2QkFBNEI7QUFFNUIsaUNBQW9DO0FBQ3BDLHdDQUEyQztBQUUzQyxtQ0FBa0M7QUFDbEMsc0NBQXFEO0FBQ3JELHdDQUFxRDtBQUVyRCxJQUFNLEdBQUcsR0FBd0IsT0FBTyxFQUFFLENBQUM7QUFFM0MsR0FBRyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDOUIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsU0FBUyxHQUFHLFFBQVEsQ0FBQyxDQUFDO0FBRXZDLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQztJQUMxQixRQUFRLEVBQUUsS0FBSztDQUNsQixDQUFDLENBQUMsQ0FBQztBQUVKLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxXQUFJLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQTtBQUVsRCxHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxhQUFXLENBQUMsQ0FBQztBQUUvQixHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxjQUFVLENBQUMsQ0FBQztBQUV6QixHQUFHLENBQUMsR0FBRyxDQUFDLFVBQUMsR0FBb0IsRUFBRSxHQUFxQixFQUFFLElBQTBCO0lBQzVFLGVBQU0sQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUMvQixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDO0FBQ25FLENBQUMsQ0FBQyxDQUFDO0FBR0gsSUFBTSxNQUFNLEdBQUcsbUJBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUVqQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtJQUNoQixlQUFNLENBQUMsSUFBSSxDQUFDLDZCQUE2QixDQUFDLENBQUM7QUFDL0MsQ0FBQyxDQUFDLENBQUEifQ==