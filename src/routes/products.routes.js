import { Router } from "express";
import { getProducts } from "../controllers/products.controllers";

const productsRouter = Router();

productsRouter.get("/products", getProducts);

export default productsRouter;