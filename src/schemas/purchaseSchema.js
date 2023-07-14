import Joi from "joi";

export const purchaseSchema = Joi.object({
    userId: Joi.string().required(),

    notes: Joi.string().optional(),

    products: Joi.array().items(
        Joi.object({
            productId: Joi.string().required(),
            productVariation: Joi.string().optional(),
            productQuantity: Joi.number().integer().min(1).required()
        })).required(),

    adressInfo: Joi.object({
        adressName: Joi.string().required(),
        cep: Joi.string().pattern(/^(\d{5})[-]?(\d{3})$/).required(),
        adress: Joi.string().required(),
        addressComplement: Joi.string().optional(),
        city: Joi.string().required(),
        state: Joi.string().required()
        }).required(),

    paymentInfo: Joi.object({
        creditCard: Joi.number().creditCard().required(),
        cardOwner: Joi.string().required(),
        cardExpiringDate: Joi.string().pattern(/^[0-9]{2}\/[0-9]{2}$/).required(),
        cvv: Joi.string().pattern(/^[0-9]{3}$/).required()
        }).required()
});