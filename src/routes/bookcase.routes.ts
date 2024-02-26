import { Router } from "express";
import { ctr_create_bookcase, ctr_select_bookcase } from "../modules/controllers/bookcase";


const CTR_Create_Bookcase = new ctr_create_bookcase();
const CTR_Select_Bookcase = new ctr_select_bookcase();

const Routes_Bookcase = Router();

Routes_Bookcase.post("/bookcase-create", CTR_Create_Bookcase.create);
Routes_Bookcase.get("/bookcase-select-student/:student", CTR_Select_Bookcase.students_bookcase);

export { Routes_Bookcase };