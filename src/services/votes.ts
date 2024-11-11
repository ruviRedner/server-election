import { Vote } from "../interfaces/Vote";
import Candidate from "../models/Candidate";
import User from "../models/User";

export const handelVote = async (vote:Vote) => {
    try {
        await Candidate.findByIdAndUpdate(vote.candidateId,{
            $inc:{
                votes:1
            }
        })
        await User.findByIdAndUpdate(vote.userId,{
            $set:{
                hasVoted:true,
                votedFor:vote.candidateId
            }
        })
        return {
            status:"DONE"
        }
    } catch (error) {
        return {
            status:"ERROR",
            err:error as Error
        }
    }
   
}