import { Router } from "express";
import { ctr_access_teacher, ctr_create_teacher } from "../modules/controllers/teacher";

const CTR_Access_Teacher = new ctr_access_teacher();
const CTR_Create_Teacher = new ctr_create_teacher();

const Routes_Teacher = Router();

Routes_Teacher.post("/teacher-access", CTR_Access_Teacher.login);
Routes_Teacher.post("/teacher-create", CTR_Create_Teacher.create);
Routes_Teacher.post("/teacher-create-array", CTR_Create_Teacher.create_array);

export {Routes_Teacher}