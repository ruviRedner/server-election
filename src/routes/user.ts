import { Request, Response } from "express";
import { LoginDto, RegisterDto } from "../dto/userDto";
import { userLogin, userRegister } from "../services/user";

export const login = async (
  req: Request<LoginDto>,
  res: Response
): Promise<void> => {
  try {
    const result = await userLogin(req.body);
    res.status(200).json({result});
  } catch (error) {
    res.status(400).json((error as Error).message);
  }
};

export const register = async (
  req: Request<RegisterDto>,
  res: Response
): Promise<void> => {
  try {
    const result = await userRegister(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json((error as Error).message);
  }
};
