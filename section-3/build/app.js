"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("http");
var routes_1 = require("./routes");
var server = http_1.createServer(routes_1.requestHandler);
console.log('Starting app.');
server.listen(8080);
console.log('App started!');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZCQUE2RTtBQUM3RSxtQ0FBMEM7QUFFMUMsSUFBTSxNQUFNLEdBQVcsbUJBQVksQ0FBQyx1QkFBYyxDQUFDLENBQUM7QUFFcEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUU3QixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBRXBCLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMifQ==