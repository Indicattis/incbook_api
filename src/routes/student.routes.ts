import { Router } from "express";
import { ctr_access_student } from "../modules/controllers/student";

const CTR_Access_Student = new ctr_access_student();

const Routes_Student = Router();

Routes_Student.post("/student-access", CTR_Access_Student.login);

export {Routes_Student}