import Joi from "joi";
import { nameRegExp, emailRegExp, passwordRegExp } from "../constants/index.js";

export const registerSchema = Joi.object({
  name: Joi.string().min(2).max(32).pattern(nameRegExp).messages({
    "string.base": "Field name must be a string",
    "string.min": "Field name must be at least 2 characters long",
    "string.max": "Field name must be no more than 32 characters long",
    "string.pattern.base": "Field name not valid",
  }),
  email: Joi.string().pattern(emailRegExp).required().messages({
    "any.required": "Missing required email field",
    "string.base": "Field email must be a string",
    "string.pattern.base": "Field email not valid",
  }),
  password: Joi.string()
    .min(6)
    .max(64)
    .pattern(passwordRegExp)
    .required()
    .messages({
      "any.required": "Missing required password field",
      "string.base": "Field password must be a string",
      "string.min": "Field password must be at least 6 characters long",
      "string.max": "Field password must be no more than 64 characters long",
      "string.pattern.base": "Field password not valid",
    }),
});

export const loginSchema = Joi.object({
  email: Joi.string().pattern(emailRegExp).required().messages({
    "any.required": "Missing required email field",
    "string.base": "Field email must be a string",
    "string.pattern.base": "Field email not valid",
  }),
  password: Joi.string()
    .min(6)
    .max(64)
    .pattern(passwordRegExp)
    .required()
    .messages({
      "any.required": "Missing required password field",
      "string.base": "Field password must be a string",
      "string.min": "Field password must be at least 6 characters long",
      "string.max": "Field password must be no more than 64 characters long",
      "string.pattern.base": "Field password not valid",
    }),
});
