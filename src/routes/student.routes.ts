import { Router } from "express";
import { ctr_access_student, ctr_create_student } from "../modules/controllers/student";

const CTR_Access_Student = new ctr_access_student();
const CTR_Create_Student = new ctr_create_student();

const Routes_Student = Router();

Routes_Student.post("/student-access", CTR_Access_Student.login);
Routes_Student.post("/student-create-array", CTR_Create_Student.create_array);

export {Routes_Student}