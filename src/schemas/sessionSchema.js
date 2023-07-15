import joi from "joi";

export const session = joi.object({
    userId: joi.string().required(),
    token: joi.string().required()
  });
