import { Purchase } from "@prisma/client";
import { PurchaseDTO } from "../models/dto-purchase";
import { prisma } from "../../prisma";




export class create_purchase {
    async create(data: PurchaseDTO): Promise<Purchase> {
        const courses = await prisma.course.findMany({
            where: {
                id: {
                    in: data.course_id
                }
            }
        });

        const totalPrice = courses.reduce((total, course) => total + course.course_price.toNumber(), 0);

        const purchase = await prisma.purchase.create({
            data: {
                student_id: data.student_id,
                purchase_method: data.purchase_method,
                purchase_price: totalPrice
            },
            include: {
                student: true
            }
        });
    
        return purchase;
    }
    
}

export class update_purchase {
    async aproved_status(data: PurchaseDTO) {
        try {
            await prisma.$transaction([
                prisma.purchase.update({
                    where: {
                        id: data.id
                    },
                    data: {
                        purchade_status: 1
                    }
                }),
            ]);
            return(`Pagamento aprovado com ID ${data.id}.`);
        } catch (error) {
            return(`Erro ao atualizar pagamento como aprovado com ID ${data.id}, ${error}`);
        };
    }

    async reproved_status(data: PurchaseDTO) {
        try {
            await prisma.$transaction([
                prisma.purchase.update({
                    where: {
                        id: data.id
                    },
                    data: {
                        purchade_status: 2
                    }
                }),
            ]);
            return(`Pagamento reprovado com ID ${data.id}.`);
        } catch (error) {
            return(`Erro ao atualizar pagamento como reprovado com ID ${data.id}, ${error}`);
        };
    }
}