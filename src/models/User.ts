import { model, Schema } from "mongoose";
import { Iuser } from "../interfaces/Iuser";

const userSchema = new Schema<Iuser>({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  hasVoted: {
    type: Boolean,
    default: false,
  },
  votedFor: {
    type: Schema.Types.ObjectId,
    ref: "Candidate",
    default:null
  },
});
export default model<Iuser>("users", userSchema);
