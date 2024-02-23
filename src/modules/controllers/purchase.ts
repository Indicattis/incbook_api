
import { Request, Response } from "express";
import { PurchaseDTO } from "../models/dto-purchase";
import { create_purchase } from "../services/purchase";


export class ctr_create_purchase {
    async create(req: Request, res: Response) {
        const data: PurchaseDTO = req.body;

        const newPurchase = new create_purchase();

        const result = await newPurchase.create(data);

        return res.status(201).json(result);
    }
}