import { StudentDTO } from "../models/dto-student";
import { Request, Response } from "express";
import { access_student } from "../services/student";


export class ctr_access_student {
  async login(req: Request, res: Response){
      const data: StudentDTO = req.body;

      const newStudent = new access_student();

      const result = await newStudent.login( data );

      return res.status(201).json(result);
  }
}