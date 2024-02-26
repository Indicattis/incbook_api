import { Purchase } from "@prisma/client";
import { PurchaseDTO } from "../models/dto-purchase";
import { prisma } from "../../prisma";




export class create_purchase {
    async create(data: PurchaseDTO): Promise<Purchase> {
      const item = await prisma.purchase.create({
        data: {
            student_id: data.student_id,
            course_id: data.course_id,
            purchase_method: data.purchase_method,
            purchase_price: data.purchase_price
        }
      })
      return item;
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