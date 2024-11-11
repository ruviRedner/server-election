import { Router } from "express";
import verifyUser from "../middlewares/verifyUser";
import { vote } from "../routes/votes";

const router = Router()

router.post("/",verifyUser,vote)

export default router