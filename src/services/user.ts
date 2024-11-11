import { compare, hash } from "bcrypt";
import { LoginDto, RegisterDto } from "../dto/userDto";
import User from "../models/User";
import  Jwt  from "jsonwebtoken";

export const userLogin = async (user: LoginDto) => {
  try {
    const userFromDb = await User.findOne({ username: user.username }).lean();
    if (!userFromDb) throw new Error("User not found");
    const match = await compare(user.password, userFromDb.password);
    if (!match) throw new Error("Worng password");
    
    const token = Jwt.sign({
      userId:userFromDb._id,
      isAdmin:userFromDb.isAdmin,
      usename:userFromDb.username
    },process.env.JWT_SECRET as string,{
      expiresIn:"10m"
    })
    
    return {...userFromDb,token,password:"********"}
  } catch (error) {
    return error;
  }
};

export const userRegister = async (user: RegisterDto) => {
  try {
    if(!user.password) throw new Error("Missing user data, [password] is require")
    const hashP = await hash(user.password, 10);
    user.password = hashP;
    const newUser = new User(user);
   return await newUser.save();
  } catch (error) {
    throw new Error("Can't do the thing you want me to do");
  }
};
