import { Request, Response } from "express";
import jwt from "jsonwebtoken";

import InternalServerExcepcion from "../exceptions/InternalServerException";

import { User } from "../entity/User";
import { AuthService } from "../services/AuthService";

const jwtSecret = process.env.JWT_SECRET || "your-secret-key";

export class AuthController {
  static async register(request: Request, response: Response) {
    try {
      const { email, password, username, name, surname } = request.body;
      
      const user = AuthService.register(email, password, username, name, surname);

      const token = jwt.sign(user, jwtSecret, {  expiresIn: "1h" });

      return response
        .status(201)
        .cookie("authToken", token, {
          httpOnly: true,
          secure: false,
          sameSite: "lax",
          maxAge: 3600000,
        })
        .json({ 
          user: user,
          message: "User registered succesfully."
         });
    } catch (error: Error | any) {
      console.error("Register error:", error);
      throw new InternalServerExcepcion(error.message || "Internal server error");
    }
  }

  static async login(request: Request, response: Response) {
    try {
      const { email, username, password } = request.body;

      const user = await AuthService.login(email, username, password);
      
      const token = jwt.sign(user, jwtSecret, { expiresIn: "1h" });

      return response
        .status(200)
        .cookie("authToken", token, {
          httpOnly: true,
          secure: false,
          sameSite: "lax",
          maxAge: 3600000,
        })
        .json({ 
          user: user,
          message: "Logged in succesfully"
        });
    } catch (error: Error | any) {
      console.error("Login error:", error);
      throw new InternalServerExcepcion(error.message || "Internal server error");
    }
  }

  static async logout(request: Request, response: Response) {
    try {
      response.clearCookie("authToken");

      return response.status(200).json({ message: "Logged out succesfully." });
    } catch (error: Error | any) {
      console.error("Logout error:", error);
      throw new InternalServerExcepcion(error.message || "Internal server error");
    }
  }

  static async profile(request: Request, response: Response) {
    try {
      const user = request.user as User;

      const userProfile = await AuthService.profile(user);

      return response.status(200).json({ 
        user: userProfile,
        message: "User profile succesfully fetched."
      });
    } catch (error: Error | any) {
      console.error("Profile error:", error);
      throw new InternalServerExcepcion(error.message || "Internal server error");
    }
  }

  static async checkAuth (request: Request, response: Response) {
    try {
      return response.status(200).json({ 
        isAuthenticated: request.cookies.authToken ? true : false,
        message: "Authorization succesfully checked." 
      });
    } catch (error: Error | any) {
      console.error("Check autorization error:", error);
      throw new InternalServerExcepcion(error.message || "Internal server error");
    }
  }

  static async update(request: Request, response: Response) {
    try {
      const user = request.user as User;

      const { email, username, name, surname, password } = request.body;

      const updatedUser = await AuthService.update(user, email, username, name, surname, password);

      return response.status(200).json({
        user: updatedUser,
        message: "User succesfully updated."
      });
    } catch (error: Error | any) {
      console.error("Update error:", error);
      throw new InternalServerExcepcion(error.message || "Internal server error");
    }
  }
}