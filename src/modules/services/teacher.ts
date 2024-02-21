import { prisma } from "../../prisma";
import { TeacherDTO } from "../models/dto-teacher";
import jwt from 'jsonwebtoken';







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