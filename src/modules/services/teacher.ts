import { Teacher } from "@prisma/client";
import { prisma } from "../../prisma";
import { TeacherDTO } from "../models/dto-teacher";
import jwt from 'jsonwebtoken';




export class create_teacher {
  async execute(data: TeacherDTO): Promise<Teacher> {
    const item = await prisma.teacher.create({
      data: {
        teacher_name: data.teacher_name,
        teacher_email: data.teacher_email,
        teacher_password: data.teacher_password,
        teacher_phone: data.teacher_phone,
        teacher_register:data.teacher_register,
        teacher_education: data.teacher_education,
        teacher_experience: data.teacher_experience,
        teacher_description: data.teacher_description,
        teacher_image: data.teacher_image,
        teacher_status: data.teacher_status,
        teacher_gender: data.teacher_gender,
        teacher_birthday: data.teacher_birthday
      }
    })
    return item;
  }
}

export class create_teachers {
  async execute(dataArray: TeacherDTO[]): Promise<Teacher[]> {
    const createdItems: Teacher[] = [];

    for (const data of dataArray) {
      const item = await prisma.teacher.create({
        data: {
          teacher_name: data.teacher_name,
          teacher_email: data.teacher_email,
          teacher_password: data.teacher_password,
          teacher_phone: data.teacher_phone,
          teacher_register:data.teacher_register,
          teacher_education: data.teacher_education,
          teacher_experience: data.teacher_experience,
          teacher_description: data.teacher_description,
          teacher_image: data.teacher_image,
          teacher_status: data.teacher_status,
          teacher_gender: data.teacher_gender,
          teacher_birthday: data.teacher_birthday
        },
      });
      createdItems.push(item);
    }

    return createdItems;
  }
}

export class access_teacher {
  async login(data: TeacherDTO) {
    const teacher = await prisma.teacher.findFirst({
      where: {
        teacher_email: data.teacher_email,
        teacher_password: data.teacher_password,
      },
    });

    if (teacher) {

      const token = jwt.sign(
        {
          teacher_id: teacher.id,
          teacher_name: teacher.teacher_name,
          teacher_email: teacher.teacher_email
        },
        'admin_token',
        { expiresIn: '1h' }
      );

      return { token, authenticated: true };
    } else {
      return { authenticated: false }
    }
  }
}