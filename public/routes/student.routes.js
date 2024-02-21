"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes_Student = void 0;
var express_1 = require("express");
var student_1 = require("../modules/controllers/student");
var CTR_Access_Student = new student_1.ctr_access_student();
var Routes_Student = (0, express_1.Router)();
exports.Routes_Student = Routes_Student;
Routes_Student.post("/student-access", CTR_Access_Student.login);
//# sourceMappingURL=student.routes.js.map