import { Router } from "express";
import { ctr_access_teacher } from "../modules/controllers/teacher";

const CTR_Access_Teacher = new ctr_access_teacher();

const Routes_Teacher = Router();

Routes_Teacher.post("/teacher-access", CTR_Access_Teacher.login);

export {Routes_Teacher}