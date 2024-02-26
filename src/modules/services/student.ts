import { Student } from "@prisma/client";
import { prisma } from "../../prisma";
import { StudentDTO } from "../models/dto-student";
import jwt from 'jsonwebtoken';





export class create_students {
  async execute(dataArray: StudentDTO[]): Promise<Student[]> {
    const createdItems: Student[] = [];

    for (const data of dataArray) {
      const item = await prisma.student.create({
        data: {
          student_name      : data.student_name,
          student_email     : data.student_email,
          student_password  : data.student_password,
          student_phone     : data.student_phone,
          student_genre     : data.student_genre,
          student_birthday : data.student_birthday
        },
      });
      createdItems.push(item);
    }

    return createdItems;
  }
}

export class access_student {
    async login(data: StudentDTO) {
        const student = await prisma.student.findFirst({
            where: {
                student_email: data.student_email,
            },
        });

        if (student && data.student_password === student.student_password) {
            const token = jwt.sign(
                {
                    student_id: student.id,
                    student_name: student.student_name,
                    student_email: student.student_email,
                },
                'studentToken',
                { expiresIn: '1h' }
            );

            return { authenticated: true, token };
        } else {
            return { authenticated: false };
        }
    }
}
