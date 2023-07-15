import { Router } from "express";
import { newPurchase } from "../controllers/purchases.controllers.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { purchaseSchema } from "../schemas/purchaseSchema.js";
import validateToken from "../middlewares/validateToken.js";

const purchaseRouter = Router();

purchaseRouter.post("/purchase", validateSchema(purchaseSchema), validateToken, newPurchase);


export default purchaseRouter;