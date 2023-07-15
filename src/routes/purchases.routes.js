import { Router } from "express";
import { newPurchase } from "../controllers/purchases.controllers.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { purchaseSchema } from "../schemas/purchaseSchema.js";

const purchaseRouter = Router();

purchaseRouter.post("/purchase", validateSchema(purchaseSchema), newPurchase);


export default purchaseRouter;