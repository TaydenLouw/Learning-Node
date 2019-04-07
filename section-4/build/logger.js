"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var winston_1 = require("winston");
var myFormat = winston_1.format.printf(function (_a) {
    var level = _a.level, message = _a.message, timestamp = _a.timestamp;
    return timestamp + " " + level + ": " + message;
});
exports.logger = winston_1.createLogger({
    transports: [
        new winston_1.transports.Console({
            level: "silly"
        })
    ],
    level: "silly",
    format: winston_1.format.combine(winston_1.format.colorize({}), winston_1.format.timestamp({
        format: ""
    }), myFormat)
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2xvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1DQUF1RTtBQUV2RSxJQUFNLFFBQVEsR0FBRyxnQkFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFDLEVBQTZCO1FBQTNCLGdCQUFLLEVBQUUsb0JBQU8sRUFBRSx3QkFBUztJQUN2RCxPQUFVLFNBQVMsU0FBSSxLQUFLLFVBQUssT0FBUyxDQUFDO0FBQzdDLENBQUMsQ0FBQyxDQUFDO0FBRVEsUUFBQSxNQUFNLEdBQVcsc0JBQVksQ0FBQztJQUN2QyxVQUFVLEVBQUU7UUFDUixJQUFJLG9CQUFVLENBQUMsT0FBTyxDQUFDO1lBQ25CLEtBQUssRUFBRSxPQUFPO1NBQ2pCLENBQUM7S0FDTDtJQUNELEtBQUssRUFBRSxPQUFPO0lBQ2QsTUFBTSxFQUFFLGdCQUFNLENBQUMsT0FBTyxDQUFDLGdCQUFNLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxFQUMxQyxnQkFBTSxDQUFDLFNBQVMsQ0FBQztRQUNiLE1BQU0sRUFBRSxFQUFFO0tBQ2IsQ0FBQyxFQUNGLFFBQVEsQ0FDUDtDQUNKLENBQUMsQ0FBQyJ9