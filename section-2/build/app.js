"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("http");
var routes_1 = require("./routes");
var server = http_1.createServer(routes_1.requestHandler);
server.listen(8080);
console.log('App started!');
