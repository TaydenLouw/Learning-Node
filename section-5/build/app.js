"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("http");
var path_1 = require("path");
var express = require("express");
var bodyParser = require("body-parser");
var logger_1 = require("./logger");
var admin_1 = require("./routes/admin");
var shop_1 = require("./routes/shop");
var app = express();
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.static(path_1.join(__dirname, 'public')));
app.use('/admin', admin_1.router);
app.use('/', shop_1.router);
app.use(function (req, res, next) {
    logger_1.logger.silly('404 error page');
    res.status(404).sendFile(path_1.join(__dirname, 'views', 'page-not-found.html'));
});
var server = http_1.createServer(app);
server.listen(3000, function () {
    logger_1.logger.info("Server running on port 3000");
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZCQUE2RTtBQUM3RSw2QkFBNEI7QUFFNUIsaUNBQW9DO0FBQ3BDLHdDQUEyQztBQUUzQyxtQ0FBa0M7QUFDbEMsd0NBQW9EO0FBQ3BELHNDQUFrRDtBQUVsRCxJQUFNLEdBQUcsR0FBd0IsT0FBTyxFQUFFLENBQUM7QUFFM0MsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDO0lBQzFCLFFBQVEsRUFBRSxLQUFLO0NBQ2xCLENBQUMsQ0FBQyxDQUFDO0FBRUosR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFdBQUksQ0FBQyxTQUFTLEVBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFBO0FBRWpELEdBQUcsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFDLGNBQVcsQ0FBQyxDQUFDO0FBRTlCLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFDLGFBQVUsQ0FBQyxDQUFDO0FBRXhCLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBQyxHQUFvQixFQUFFLEdBQXFCLEVBQUUsSUFBMEI7SUFDNUUsZUFBTSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQy9CLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLFdBQUksQ0FBQyxTQUFTLEVBQUMsT0FBTyxFQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQTtBQUMzRSxDQUFDLENBQUMsQ0FBQztBQUdILElBQU0sTUFBTSxHQUFHLG1CQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7QUFFakMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7SUFDaEIsZUFBTSxDQUFDLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO0FBQy9DLENBQUMsQ0FBQyxDQUFBIn0=