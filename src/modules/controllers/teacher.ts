import { TeacherDTO } from "../models/dto-teacher";
import { access_teacher } from "../services/teacher";
import { Request, Response } from "express";


export class ctr_access_teacher {
  async login(req: Request, res: Response){
      const data: TeacherDTO = req.body;

      const newTeacher = new access_teacher();

      const result = await newTeacher.login( data );

      return res.status(201).json(result);
  }
}