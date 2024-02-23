import { Router } from "express";
import { ctr_create_class, ctr_select_class } from "../modules/controllers/class";

const CTR_Create_Class = new ctr_create_class();
const CTR_Select_Class = new ctr_select_class();

const Routes_Class = Router();

Routes_Class.post("/class-create-array", CTR_Create_Class.create_array);
Routes_Class.get("/class-select-array", CTR_Select_Class.fetch);
Routes_Class.get("/class-select/:course", CTR_Select_Class.select);

export { Routes_Class };