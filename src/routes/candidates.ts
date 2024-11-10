import { Request, Response } from "express";
import { getCandidates, sidInit } from "../services/candidates";

export const sid = async (req: Request, res: Response): Promise<void> => {
    try {
        await sidInit()
        res.sendStatus(201)
    } catch (error) {
        console.log(error);
        res.sendStatus(400)
        
    }
};
export const getList = async (req:Request,res:Response) => {
    try {
      const result =  await getCandidates()
      res.json(result)
        
    } catch (error) {
        console.log(error);
        
    }
}
