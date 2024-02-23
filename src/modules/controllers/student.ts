import { StudentDTO } from "../models/dto-student";
import { Request, Response } from "express";
import { access_student, create_students } from "../services/student";

export class ctr_create_student {
  // async create(req: Request, res: Response) {
  //   const data: StudentDTO = req.body;

  //   const newStudent = new create_students();

  //   const result = await newStudent.execute(data);

  //   return res.status(201).json(result);
  // }
  async create_array(req: Request, res: Response) {
    const data: StudentDTO[] = req.body;

    const newstudent = new create_students();

    const result = await newstudent.execute(data);

    return res.status(201).json(result);
  }
}

export class ctr_access_student {
  async login(req: Request, res: Response){
      const data: StudentDTO = req.body;

      const newStudent = new access_student();

      const result = await newStudent.login( data );

      return res.status(201).json(result);
  }
}