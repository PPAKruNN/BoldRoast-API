import { Router } from "express";
import { validateBody } from "../middlewares/validateBody";
import { login } from "../controllers/user.controllers";
import { loginSchema, registerSchema } from "../schemas/authSchema";

const userRouter = Router();

userRouter.post("/login", validateBody(loginSchema), login)
userRouter.post("/register", validateBody(registerSchema), register)

export default userRouter;