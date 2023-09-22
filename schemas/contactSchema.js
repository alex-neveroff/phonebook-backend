import Joi from "joi";

export const addContactSchema = Joi.object({
  name: Joi.string().required().messages({
    "any.required": "Missing required name field",
    "string.base": "Field name must be a string",
  }),
  number: Joi.string().required().messages({
    "any.required": "Missing required number field",
    "string.base": "Field number must be a string",
  }),
});

export const updateContactSchema = Joi.object({
  name: Joi.string().required().messages({
    "any.required": "Missing required name field",
    "string.base": "Field name must be a string",
  }),
  number: Joi.string().required().messages({
    "any.required": "Missing required number field",
    "string.base": "Field number must be a string",
  }),
});
