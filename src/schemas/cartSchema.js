import Joi from "joi";
import productSchema from "./productSchema";

const cartSchema = Joi.object({
    products: Joi.array().items(Joi.object({
        productId: Joi.string().required(),
        selectedVariations: Joi.array().items(productSchema),
        quantity: Joi.number().integer().required()
    }))
}).required();

export default cartSchema;