import { Router } from "express";
import { ctr_create_purchase, ctr_update_purchase } from "../modules/controllers/purchase";

const CTR_Create_Purchase = new ctr_create_purchase();
const CTR_Update_Purchase = new ctr_update_purchase();

const Routes_Purchase = Router();

Routes_Purchase.post("/purchase-create", CTR_Create_Purchase.create);
Routes_Purchase.put("/purchase-update-aproved", CTR_Update_Purchase.aproved_status);
Routes_Purchase.put("/purchase-update-reproved", CTR_Update_Purchase.reproved_status);

export { Routes_Purchase };