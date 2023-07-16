import { Router } from "express";
import { validateBody } from "../middlewares/validateBody.js";
import { login, register } from "../controllers/user.controllers.js";
import { loginSchema, registerSchema } from "../schemas/authSchema.js";

const userRouter = Router();

userRouter.post("/login", validateBody(loginSchema), login);
userRouter.post("/register", validateBody(registerSchema), register);

export default userRouter;