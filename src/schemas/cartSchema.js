import Joi from "joi";

const cartSchema = Joi.object({

    //userId: Joi.string().required(),
    products: Joi.array().items(Joi.object({
        productId: Joi.string().required(),
        quantity: Joi.number().integer().required()
    }))
});

export default cartSchema;