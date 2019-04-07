"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("http");
var path_1 = require("path");
var express = require("express");
var bodyParser = require("body-parser");
var logger_1 = require("./logger");
var main_1 = require("./routes/main");
var app = express();
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.static(path_1.join(__dirname, 'public')));
app.use(main_1.router);
app.use(function (req, res, next) {
    logger_1.logger.silly('404 error page');
    res.status(404).sendFile(path_1.join(__dirname, 'views', 'page-not-found.html'));
});
var server = http_1.createServer(app);
server.listen(3000, function () {
    logger_1.logger.info("Server running on port 3000");
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZCQUE2RTtBQUM3RSw2QkFBNEI7QUFFNUIsaUNBQW9DO0FBQ3BDLHdDQUEyQztBQUUzQyxtQ0FBa0M7QUFDbEMsc0NBQW1EO0FBRW5ELElBQU0sR0FBRyxHQUF3QixPQUFPLEVBQUUsQ0FBQztBQUUzQyxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUM7SUFDMUIsUUFBUSxFQUFFLEtBQUs7Q0FDbEIsQ0FBQyxDQUFDLENBQUM7QUFFSixHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsV0FBSSxDQUFDLFNBQVMsRUFBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFFakQsR0FBRyxDQUFDLEdBQUcsQ0FBQyxhQUFXLENBQUMsQ0FBQztBQUdyQixHQUFHLENBQUMsR0FBRyxDQUFDLFVBQUMsR0FBb0IsRUFBRSxHQUFxQixFQUFFLElBQTBCO0lBQzVFLGVBQU0sQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUMvQixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxXQUFJLENBQUMsU0FBUyxFQUFDLE9BQU8sRUFBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUE7QUFDM0UsQ0FBQyxDQUFDLENBQUM7QUFHSCxJQUFNLE1BQU0sR0FBRyxtQkFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBRWpDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO0lBQ2hCLGVBQU0sQ0FBQyxJQUFJLENBQUMsNkJBQTZCLENBQUMsQ0FBQztBQUMvQyxDQUFDLENBQUMsQ0FBQSJ9