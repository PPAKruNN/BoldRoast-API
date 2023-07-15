import { Router } from "express";
import validateToken from "../middlewares/validateToken";

const cartRouter = Router();

cartRouter.get("/cart", validateToken, getCart);

export default cartRouter;