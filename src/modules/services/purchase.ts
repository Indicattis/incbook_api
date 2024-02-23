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
  