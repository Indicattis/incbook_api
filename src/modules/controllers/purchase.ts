import { Request, Response } from "express";
import { PurchaseDTO } from "../models/dto-purchase";
import { create_purchase, update_purchase } from "../services/purchase";


export class ctr_create_purchase {
    async create(req: Request, res: Response) {
        const data: PurchaseDTO = req.body;

        const newPurchase = new create_purchase();

        const result = await newPurchase.create(data);

        return res.status(201).json(result);
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