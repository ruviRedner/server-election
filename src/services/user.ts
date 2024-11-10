import { compare, hash } from "bcrypt";
import { LoginDto, RegisterDto } from "../dto/userDto";
import User from "../models/User";

export const userLogin = async (user: LoginDto) => {
  try {
    const userFromDb = await User.findOne({ usename: user.username });
    if (!userFromDb) throw new Error("User not found");
    const match = await compare(user.password, userFromDb.password);
    if (!match) throw new Error("Worng password");
    return userFromDb
  } catch (error) {
    return error;
  }
};

export const userRegister = async (user: RegisterDto) => {
  try {
    const hashP = await hash(user.password, 10);
    user.password = hashP;
    const newUser = new User(user);
   return await newUser.save();
  } catch (error) {
    throw new Error("Can't do the thing you want me to do");
  }
};
