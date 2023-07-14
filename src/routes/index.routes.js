import { Router } from "express";
import userRouter from "./user.routes";
import cartRouter from "./cart.routes";
import purchaseRouter from "./purchases.routes";
import productsRouter from "./products.routes";

const router = Router();

router.use(userRouter);
router.use(cartRouter);
router.use(purchaseRouter);
router.use(productsRouter);

export default router;