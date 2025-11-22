import { Request, NextFunction } from "express";
import jwt from "jsonwebtoken";
import "dotenv"

import { AppDataSource } from "../AppDataSource";
import { User } from "../entity/User";

import NotFoundException from "../exceptions/NotFoundException";
import InternalServerExcepcion from "../exceptions/InternalServerException";
import InvalidCredentialsException from "../exceptions/InvalidCredentialsException";


export const authMiddleware = async (request: Request, next: NextFunction) => {
  try {
    const token = request.cookies.authToken;
      
    if (!token)
      throw new InvalidCredentialsException("Must be logged in to access this resource", "No token provided");

      const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { id: number };
        
      const userRepository = AppDataSource.getRepository(User);

      const user = await userRepository.findOne({ 
        where: { id: decoded.id },
        relations: ['role']
    });

    console.log(user)

    if (!user) throw new NotFoundException("User not found or not exists.");

    request.user = user;

    next();
  } catch (error) {
    console.error('Autentication error:', error);
    throw new InternalServerExcepcion("Invalid token", "Not autenticated");
  }
};