import { Router } from "express";
import verifyUser from "../middlewares/verifyUser";
import { unVote, vote } from "../routes/votes";

const router = Router();

router.post("/", verifyUser, vote);

router.post("/unvote",verifyUser, unVote);

export default router;
