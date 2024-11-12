import { Router } from "express";
import { getProfile, login, register } from "../routes/user";
import verifyUser from "../middlewares/verifyUser";

const router = Router()

router.post("/login",login)

router.post("/register",register)

router.post("/profile",verifyUser,getProfile)

export default router