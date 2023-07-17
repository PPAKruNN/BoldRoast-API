import Joi from "joi";
import productSchema from "./productSchema.js";

const cartSchema = Joi.object({
    products: Joi.array().items(Joi.object({
        _id: Joi.string().required(),
        name: Joi.string().required(),
        price: Joi.number().required().min(0),
        image: Joi.string().required(),
        description: Joi.string().required(),
        productVariation: Joi.string().required(),
        productQuantity: Joi.number().integer().required()
    })).required()
}).required();

export default cartSchema;

