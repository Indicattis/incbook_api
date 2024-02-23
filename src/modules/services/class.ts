import { Class, Course } from "@prisma/client";
import { CourseDTO } from "../models/dto-course";
import { prisma } from "../../prisma";
import { ClassDTO } from "../models/dto-class";




export class select_classes {
    
  async fetch(): Promise<Class[]> {
      const items = await prisma.class.findMany();
      return items;
  }

  async course_id(course: number): Promise<Class[]> {
      const item = await prisma.class.findMany({
          where: {
              course_id: course,
          },
      });
      return item;
  }
  
}

export class create_classes {
  async execute(dataArray: ClassDTO[]): Promise<Class[]> {
    const createdItems: Class[] = [];

    for (const data of dataArray) {
      const item = await prisma.class.create({
        data: {
          class_name: data.class_name,
          class_description: data.class_description,
          class_time: data.class_time,
          class_video: data.class_video,
          course_id: data.course_id
        },
      });
      createdItems.push(item);
    }

    return createdItems;
  }
}