import joi from "joi";

export const sessions = joi.object({
    userId: joi.string().required(),
    token: joi.string().required()
  });