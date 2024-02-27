import { Request, Response } from "express";
import { PurchaseDTO } from "../models/dto-purchase";
import { create_purchase, update_purchase } from "../services/purchase";
import { create_bookcase } from "../services/bookcase";


export class ctr_create_purchase {
    async create(req: Request, res: Response) {
        const data: PurchaseDTO = req.body;

        const newPurchase = new create_purchase();
        const newBookcase = new create_bookcase();

        try {
            const result = await newPurchase.create(data);

            const bookcasesResult = await newBookcase.create_new(data.student_id, result.id, data.course_id);

            if (Array.isArray(bookcasesResult)) {
                return res.status(201).json({ purchase: result, bookcases: bookcasesResult });
            } else {
                return res.status(500).json({ message: 'Erro ao criar bookcases.' });
            }
        } catch (error) {
            console.error('Erro ao criar compra:', error);
            return res.status(500).json({ message: 'Erro ao criar compra.' });
        }
    }
}


export class ctr_update_purchase {
    async aproved_status(req: Request, res: Response) {
        const data: PurchaseDTO = req.body;

        const updatePurchase = new update_purchase();

        const result = await updatePurchase.aproved_status(data);

        return res.status(201).json(result);
    }
    async reproved_status(req: Request, res: Response) {
        const data: PurchaseDTO = req.body;

        const updatePurchase = new update_purchase();

        const result = await updatePurchase.reproved_status(data);

        return res.status(201).json(result);
    }
}