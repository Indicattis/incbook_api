"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
var express_1 = require("express");
var teacher_routes_1 = require("./teacher.routes");
var student_routes_1 = require("./student.routes");
var routes = (0, express_1.Router)();
exports.routes = routes;
routes.use("/", teacher_routes_1.Routes_Teacher);
routes.use("/", student_routes_1.Routes_Student);
//# sourceMappingURL=index.js.map