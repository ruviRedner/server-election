import { Types } from "mongoose";

export interface Vote{
    userId:string | Types.ObjectId
    candidateId: string | Types.ObjectId
}