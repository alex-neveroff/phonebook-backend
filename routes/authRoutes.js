import express from "express";
import { validateBody } from "../decorators/index.js";
import { isEmptyBody, authenticate } from "../middlewars/index.js";
import { loginSchema, registerSchema } from "../schemas/index.js";
import { getCurrent, login, logout, register } from "../controllers/index.js";
const authRouter = express.Router();

authRouter.post(
  "/register",
  isEmptyBody,
  validateBody(registerSchema),
  register
);

authRouter.post("/login", isEmptyBody, validateBody(loginSchema), login);

authRouter.get("/current", authenticate, getCurrent);

authRouter.post("/logout", authenticate, logout);

export default authRouter;
