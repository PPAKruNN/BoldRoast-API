import { Router } from "express";
import { listUserPurchases, newPurchase, purchaseDetails } from "../controllers/purchases.controllers.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { purchaseSchema } from "../schemas/purchaseSchema.js";
import validateToken from "../middlewares/validateToken.js";

const purchaseRouter = Router();

purchaseRouter.post("/purchases", validateSchema(purchaseSchema), validateToken, newPurchase);
purchaseRouter.get("/purchases", validateToken, listUserPurchases);
purchaseRouter.get("/purchases/:id", validateToken, purchaseDetails);

export default purchaseRouter;