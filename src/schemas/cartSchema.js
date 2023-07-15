import Joi from "joi";

export const purchaseSchema = Joi.object({

    userId: Joi.string().required(),
    products: Joi.array().items(Joi.object({
        productId: Joi.string().required(),
        quantity: Joi.number().integer().required()
    }))
});