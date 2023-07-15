import { Router } from "express";
import { listUserPurchases, newPurchase, purchaseDetails } from "../controllers/purchases.controllers.js";
import { purchaseSchema } from "../schemas/purchaseSchema.js";
import validateToken from "../middlewares/validateToken.js";
import { validateBody } from "../middlewares/validateBody.js";

const purchaseRouter = Router();

purchaseRouter.post("/purchases", validateBody(purchaseSchema), validateToken, newPurchase);
purchaseRouter.get("/purchases", validateToken, listUserPurchases);
purchaseRouter.get("/purchases/:id", validateToken, purchaseDetails);

export default purchaseRouter;