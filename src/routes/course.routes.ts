import { Router } from "express";
import { ctr_count_course, ctr_create_course, ctr_select_course } from "../modules/controllers/course";

const CTR_Create_Course = new ctr_create_course();
const CTR_Select_Course = new ctr_select_course();
const CTR_Count_Course = new ctr_count_course();

const Routes_Course = Router();

Routes_Course.post("/course-create-array", CTR_Create_Course.create_array);
Routes_Course.get("/course-select-array", CTR_Select_Course.fetch);
Routes_Course.get("/course-select/:teacher", CTR_Select_Course.select);
Routes_Course.get("/course-count-time/:id", CTR_Count_Course.count_time);

export { Routes_Course };