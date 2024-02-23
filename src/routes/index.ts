import { Router } from "express";
import { Routes_Teacher } from "./teacher.routes";
import { Routes_Student } from "./student.routes";
import { Routes_Course } from "./course.routes";
import { Routes_Class } from "./class.routes";
import { Routes_Purchase } from "./purchase.routes";

const routes = Router();

routes.use("/", Routes_Teacher)
routes.use("/", Routes_Student)
routes.use("/", Routes_Course)
routes.use("/", Routes_Class)
routes.use("/", Routes_Purchase)

export { routes };