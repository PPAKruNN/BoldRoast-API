import { Router } from "express";
import validateToken from "../middlewares/validateToken.js";
import { validateBody } from "../middlewares/validateBody.js";
import { deleteCart, getCart, updateCart } from "../controllers/cart.controllers.js";
import cartSchema from "../schemas/cartSchema.js";

const cartRouter = Router();

cartRouter.get("/cart", validateToken, getCart);
cartRouter.put("/cart", validateBody(cartSchema), validateToken, updateCart); 
cartRouter.delete("/cart", validateToken, deleteCart); 

export default cartRouter;