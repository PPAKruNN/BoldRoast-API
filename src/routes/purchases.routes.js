import { Router } from "express";
import { listUserPurchases, newPurchase } from "../controllers/purchases.controllers.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { purchaseSchema } from "../schemas/purchaseSchema.js";
import validateToken from "../middlewares/validateToken.js";

const purchaseRouter = Router();

purchaseRouter.post("/purchases", validateSchema(purchaseSchema), validateToken, newPurchase);
purchaseRouter.get("/purchases", validateToken, listUserPurchases);

export default purchaseRouter;