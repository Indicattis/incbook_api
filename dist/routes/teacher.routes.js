"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes_Teacher = void 0;
var express_1 = require("express");
var teacher_1 = require("../modules/controllers/teacher");
var CTR_Access_Teacher = new teacher_1.ctr_access_teacher();
var Routes_Teacher = (0, express_1.Router)();
exports.Routes_Teacher = Routes_Teacher;
Routes_Teacher.post("/teacher-access", CTR_Access_Teacher.login);
//# sourceMappingURL=teacher.routes.js.map