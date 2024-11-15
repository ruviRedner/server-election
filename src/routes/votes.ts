import { Request, Response } from "express";
import { handelUnVote, handelVote } from "../services/votes";
import { Vote } from "../interfaces/Vote";

export const vote = async (req:Request<any,any,Vote>,res:Response) => {
    try {
       const result = await handelVote(req.body)
        res.json({result})
    } catch (error) {
        res.status(500).json({error})
    }

}
export const unVote = async (req:Request<any,any,Vote>,res:Response) => {
    try {
       const result = await handelUnVote(req.body)
       
        res.json({result})
    } catch (error) {
        res.status(500).json({error})
    }

}