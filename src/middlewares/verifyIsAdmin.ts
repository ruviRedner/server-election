import { NextFunction, Request, Response } from "express";
import jwt, { JsonWebTokenError } from "jsonwebtoken";

export default (req:Request,res:Response,next:NextFunction) =>{
    try {
        const token = req.headers["authorization"]
        if(!token) {
            res.status(401).json({err:"Token must be provider"})
            return
        } 
       const payload = jwt.verify(token[0],process.env.JWT_SECRET!);
       (req as any).user = payload
       if(!(payload as any).isAdmin){
        res.status(403).json({err:"Only admin can access this route"})
       }
       next()
    } catch (error) {
        res.status(401).json(
        error as JsonWebTokenError)
    }
}