import { CourseDTO } from "../models/dto-course";
import { Request, Response } from "express";
import { create_courses } from "../services/course";
import { ClassDTO } from "../models/dto-class";
import { create_classes, select_classes } from "../services/class";


export class ctr_select_class {

  async fetch(req: Request, res: Response) {
      const selectClasses = new select_classes();
      const result = await selectClasses.fetch();
      return res.status(200).json(result);
  }

  async select(req: Request, res: Response) {
      
      const course = parseInt(req.params.course);
      const selectClasses = new select_classes();

      try {
          let result;

          if (course) {
              result = await selectClasses.course_id(course);
              if (!result) {
                  return res.status(404).json({ message: 'Aulas não localizadas' });
              }
          } else {
              return res.status(404).json({ message: 'Parâmetro não informado' });
          }

          return res.status(200).json(result);
      } 
      catch (error) {
          console.error(error);
          return res.status(500).json({ message: 'Erro ao buscar aulas' });
      }
  }
}

export class ctr_create_class {
  // async create(req: Request, res: Response) {
  //   const data: CourseDTO = req.body;

  //   const newCourse = new create_courses();

  //   const result = await newCourse.execute(data);

  //   return res.status(201).json(result);
  // }
  async create_array(req: Request, res: Response) {
    const data: ClassDTO[] = req.body;

    const newClasses = new create_classes();

    const result = await newClasses.execute(data);

    return res.status(201).json(result);
  }
}