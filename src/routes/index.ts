import { Router } from "express";
import { Routes_Teacher } from "./teacher.routes";
import { Routes_Student } from "./student.routes";

const routes = Router();

routes.use("/", Routes_Teacher)
routes.use("/", Routes_Student)

export { routes };