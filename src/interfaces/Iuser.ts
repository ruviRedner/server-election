import { Types } from "mongoose"

export interface Iuser extends Document{
    username:string
    password:string
    isAdmin:boolean
    hasVoted:boolean
    votedFor:Types.ObjectId | null
}

