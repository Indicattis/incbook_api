import { CourseDTO } from "../models/dto-course";
import { Request, Response } from "express";
import { count_courses, create_courses, select_courses, update_course } from "../services/course";


export class ctr_select_course {

  async fetch(req: Request, res: Response) {
      const selectCourses = new select_courses();
      const result = await selectCourses.fetch();
      return res.status(200).json(result);
  }

  async select(req: Request, res: Response) {
      
      const teacher = req.params.teacher;
      const selectCourses = new select_courses();

      try {
          let result;

          if (teacher) {
              result = await selectCourses.teacher_id(teacher);
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

export class ctr_create_course {
  async create(req: Request, res: Response) {
    const data: CourseDTO = req.body;

    const newCourse = new create_courses();

    const result = await newCourse.create(data);

    return res.status(201).json(result);
  }
  async create_array(req: Request, res: Response) {
    const data: CourseDTO[] = req.body;

    const newCourse = new create_courses();

    const result = await newCourse.create_array(data);

    return res.status(201).json(result);
  }
}

export class ctr_count_course {

    async count_time(req: Request, res: Response) {
        const id: number = parseInt(req.params.id);
        const contCoursesTime = new count_courses();
        const updateCourseTime = new update_course();

        try {
            let result;
            let update;
            if (id) {
                result = await contCoursesTime.course_time(id);
                if (!result) {
                    return res.status(404).json({ message: 'Não foi possível obter resultado do tempo do curso' });
                } else {
                    update = await updateCourseTime.course_time(id, result);
                }
            } else {
                return res.status(404).json({ message: 'Parâmetro não informado' });
            }
            
            return res.status(200).json({result, update});
        } 
        catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Erro ao buscar tempo do curso' });
        }
    }
}