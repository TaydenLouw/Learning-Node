"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("http");
var express = require("express");
var logger_1 = require("./logger");
var app = express();
// app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
//     logger.silly('Inside first middleware!');
//     next();
// });
// app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
//     logger.silly('Inside second middleware!');
//     next();
// });
// app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
//     logger.silly('Inside third middleware!');
//     res.send({
//         example: "response"
//     })
// });
app.use('/users', function (req, res, next) {
    logger_1.logger.silly('Inside /users middleware!');
    res.send([
        {
            id: 1,
            name: 'John',
            surname: 'Doe'
        }, {
            id: 2,
            name: 'Jane',
            surname: 'Doe'
        }
    ]);
});
app.use('/', function (req, res, next) {
    logger_1.logger.silly('Inside / middleware!');
    res.send('<h1>Hello from assignment 2!</h1>');
});
var server = http_1.createServer(app);
server.listen(3000, function () {
    logger_1.logger.info("Server running on port 3000");
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZCQUE2RTtBQUM3RSxpQ0FBb0M7QUFDcEMsbUNBQWtDO0FBRWxDLElBQU0sR0FBRyxHQUF3QixPQUFPLEVBQUUsQ0FBQztBQUUzQyx5RkFBeUY7QUFDekYsZ0RBQWdEO0FBQ2hELGNBQWM7QUFDZCxNQUFNO0FBRU4seUZBQXlGO0FBQ3pGLGlEQUFpRDtBQUNqRCxjQUFjO0FBQ2QsTUFBTTtBQUVOLHlGQUF5RjtBQUN6RixnREFBZ0Q7QUFDaEQsaUJBQWlCO0FBQ2pCLDhCQUE4QjtBQUM5QixTQUFTO0FBQ1QsTUFBTTtBQUVOLEdBQUcsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLFVBQUMsR0FBb0IsRUFBRSxHQUFxQixFQUFFLElBQTBCO0lBQ3RGLGVBQU0sQ0FBQyxLQUFLLENBQUMsMkJBQTJCLENBQUMsQ0FBQztJQUMxQyxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ0w7WUFDSSxFQUFFLEVBQUUsQ0FBQztZQUNMLElBQUksRUFBRSxNQUFNO1lBQ1osT0FBTyxFQUFFLEtBQUs7U0FDakIsRUFBRTtZQUNDLEVBQUUsRUFBRSxDQUFDO1lBQ0wsSUFBSSxFQUFFLE1BQU07WUFDWixPQUFPLEVBQUUsS0FBSztTQUNqQjtLQUNKLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQyxDQUFDO0FBRUgsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsVUFBQyxHQUFvQixFQUFFLEdBQXFCLEVBQUUsSUFBMEI7SUFDakYsZUFBTSxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQ3JDLEdBQUcsQ0FBQyxJQUFJLENBQUMsbUNBQW1DLENBQUMsQ0FBQTtBQUNqRCxDQUFDLENBQUMsQ0FBQztBQUVILElBQU0sTUFBTSxHQUFXLG1CQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7QUFFekMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7SUFDaEIsZUFBTSxDQUFDLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO0FBQy9DLENBQUMsQ0FBQyxDQUFBIn0=