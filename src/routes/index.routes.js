import { Router } from "express";
import userRouter from "./user.routes.js";
import cartRouter from "./cart.routes.js";
import purchaseRouter from "./purchases.routes.js";
import productsRouter from "./products.routes.js";

const router = Router();

router.use(userRouter);
router.use(cartRouter);
router.use(purchaseRouter);
router.use(productsRouter);

export default router;