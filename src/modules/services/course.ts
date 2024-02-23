import { Course } from "@prisma/client";
import { CourseDTO } from "../models/dto-course";
import { prisma } from "../../prisma";

export class select_courses {
    async fetch(): Promise<Course[]> {
        const items = await prisma.course.findMany();
        return items;
    }

    async teacher_id(teacher: string): Promise<Course[]> {
        const item = await prisma.course.findMany({
            where: {
                teacher_id: teacher,
            },
        });
        return item;
    }
}

export class update_course {
    async course_time(id: number, time: number) {
        try {
            await prisma.$transaction([
                prisma.course.update({
                    where: { id: id },
                    data: { course_time: time },
                }),
            ]);
            return(`Tempo do curso com ID ${id} atualizado com sucesso.`);
        } catch (error) {
            return(`Erro ao atualizar tempo do curso com ID ${id}, ${error}`);
        }
    }
}

export class count_courses {
    async course_time(id: number): Promise<number> {
        const totalClassTime = await prisma.class.aggregate({
            where: {
                course_id: id,
            },
            _sum: {
                class_time: true,
            },
        });

        if (totalClassTime._sum.class_time === null) {
            return 0;
        }

        return totalClassTime._sum.class_time;
    }
}

export class create_courses {
    async create(data: CourseDTO): Promise<Course> {

        const item = await prisma.course.create({
            data: {
                course_name: data.course_name,
                course_price: data.course_price,
                course_description: data.course_description,
                course_offer: data.course_offer,
                teacher_id: data.teacher_id,
            },
        });

        return item;
    }
    async create_array(dataArray: CourseDTO[]): Promise<Course[]> {
        const createdItems: Course[] = [];

        for (const data of dataArray) {
            const item = await prisma.course.create({
                data: {
                    course_name: data.course_name,
                    course_price: data.course_price,
                    course_description: data.course_description,
                    course_offer: data.course_offer,
                    teacher_id: data.teacher_id,
                },
            });
            createdItems.push(item);
        }

        return createdItems;
    }
}
