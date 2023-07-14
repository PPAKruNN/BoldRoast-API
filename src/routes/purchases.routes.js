import { Router } from "express";
import { newPurchase } from "../controllers/purchases.controllers";
import { validateSchema } from "../middlewares/validateSchema";
import { purchaseSchema } from "../schemas/purchaseSchema";

const purchaseRouter = Router();

purchaseRouter.post("/purchase", validateSchema(purchaseSchema), newPurchase);
purchaseRouter.delete("/purchase/:id", deletePurchase);


export default purchaseRouter;