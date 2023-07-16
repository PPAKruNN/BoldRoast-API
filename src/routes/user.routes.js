import { Router } from "express";
import { validateBody } from "../middlewares/validateBody.js";
import { getUser, login, register } from "../controllers/user.controllers.js";
import { loginSchema, registerSchema } from "../schemas/authSchema.js";
import validateToken from "../middlewares/validateToken.js";

const userRouter = Router();

userRouter.post("/login", validateBody(loginSchema), login);
userRouter.post("/register", validateBody(registerSchema), register);
userRouter.get("/user", validateToken, getUser);

export default userRouter;