import { Router } from "express";
import { getProducts, getProductsById  } from "../controllers/products.controllers.js";

const productsRouter = Router();

productsRouter.get("/products", getProducts);
productsRouter.get("/products/:id", getProductsById);

export default productsRouter;