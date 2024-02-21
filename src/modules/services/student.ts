import { prisma } from "../../prisma";
import { StudentDTO } from "../models/dto-student";
import jwt from 'jsonwebtoken';







export class access_student {
  async login(data: StudentDTO) {
    const student = await prisma.student.findFirst({
      where: {
        student_email: data.student_email,
        student_password: data.student_password,
      },
    });

    if (student) {

      const token = jwt.sign(
        {
          student_id: student.id,
          student_name: student.student_name,
          student_email: student.student_email,
          student_birth: student.student_birth
        },
        'user_token',
        { expiresIn: '1h' }
      );

      return { token, authenticated: true };
    } else {
      return { authenticated: false }
    }
  }
}