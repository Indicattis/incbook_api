"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.port = exports.app = void 0;
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var routes_1 = require("./routes");
exports.app = (0, express_1.default)();
exports.port = 3333;
exports.app.use(express_1.default.json());
exports.app.use((0, cors_1.default)());
exports.app.use(routes_1.routes);
exports.app.get('/', function (req, res) {
    return res.status(201).send("Servidor online!");
});
//# sourceMappingURL=app.js.map