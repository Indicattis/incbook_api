import { TeacherDTO } from "../models/dto-teacher";
import { access_teacher, create_teacher, create_teachers } from "../services/teacher";
import { Request, Response } from "express";


export class ctr_access_teacher {
  async login(req: Request, res: Response){
      const data: TeacherDTO = req.body;

      const newTeacher = new access_teacher();

      const result = await newTeacher.login( data );

      return res.status(201).json(result);
  }
}
export class ctr_create_teacher {
  async create(req: Request, res: Response) {
    const data: TeacherDTO = req.body;

    const newTeacher = new create_teacher();

    const result = await newTeacher.execute(data);

    return res.status(201).json(result);
  }
  async create_array(req: Request, res: Response) {
    const data: TeacherDTO[] = req.body;

    const newTeacher = new create_teachers();

    const result = await newTeacher.execute(data);

    return res.status(201).json(result);
  }
}