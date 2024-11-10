import { model, Schema } from "mongoose";
import { Icandidate } from "../interfaces/candidates";
const candidateSchema = new Schema<Icandidate>({
    name: {
        type: String,
        unique: true
    },
    image: {
        type: String,
    },
    votes:{
        type:Number,
        default:0
    }
})
export default model<Icandidate>('Candidate', candidateSchema)