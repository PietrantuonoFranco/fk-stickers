import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import "dotenv"

import { AppDataSource } from "../AppDataSource";
import { User } from "../entity/User";

import ForbiddenException from "../exceptions/ForbiddenException";
import NotFoundException from "../exceptions/NotFoundException";
import InternalServerExcepcion from "../exceptions/InternalServerException";


export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.cookies.authToken;
      
        if (!token) throw new ForbiddenException("No autenticado - No hay token");

        const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { id: number };
        
        const userRepository = AppDataSource.getRepository(User);

        const user = await userRepository.findOne({ 
            where: { id: decoded.id },
            relations: ['role']
        });

        console.log(user)

        if (!user) throw new NotFoundException("User not found or not exists.");

        req.user = user;

        next();
    } catch (error) {
        console.error('Autentication error:', error);
        throw new InternalServerExcepcion("Not autenticated - Invalid token");
    }
};