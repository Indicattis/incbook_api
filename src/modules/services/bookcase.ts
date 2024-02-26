import { Bookcase } from "@prisma/client";
import { BookcaseDTO } from "../models/dto-bookcase";
import { prisma } from "../../prisma";


export class select_bookcase {
    async student_bookcases(student:string): Promise<Bookcase[]> {
        const item = await prisma.bookcase.findMany({
            where: {
                student_id: student,
            },
        });
        return item;
    }
}

export class create_bookcase {
    async create(data: BookcaseDTO): Promise<Bookcase | string> {
        const purchase = await prisma.purchase.findUnique({
            where: {
                id: data.purchase_id
            }
        });

        if (!purchase || purchase.purchade_status !== 1) {
            return('A compra não está no estado correto para criar o bookcase.');
        }
        const item = await prisma.bookcase.create({
            data: {
                course_id: data.course_id,
                student_id: data.student_id,
                purchase_id: data.purchase_id
            }
        });
        return item;
    }
}