import { Router } from "express";
import { ctr_create_purchase } from "../modules/controllers/purchase";

const CTR_Create_Purchase = new ctr_create_purchase();

const Routes_Purchase = Router();

Routes_Purchase.post("/purchase-create", CTR_Create_Purchase.create);

export { Routes_Purchase };