import Joi from "joi";

export const purchaseSchema = Joi.object({
    notes: Joi.string().required().allow(""),

    products: Joi.array().required(),

    addressInfo: Joi.object({
        addressName: Joi.string().required(),
        cep: Joi.string().pattern(/^(\d{5})[-]?(\d{3})$/).required(),
        address: Joi.string().required(),
        addressComplement: Joi.string().optional().allow(""),
        city: Joi.string().required(),
        state: Joi.string().required()
        }).required(),

    paymentInfo: Joi.object({
        creditCard: Joi.string().required(),
        cardOwner: Joi.string().required(),
        cardExpiringDate: Joi.string().pattern(/^[0-9]{2}\/[0-9]{2}$/).required(),
        cvv: Joi.string().pattern(/^[0-9]{3}$/).required(),
        installments: Joi.string().required()
        }).required()
});