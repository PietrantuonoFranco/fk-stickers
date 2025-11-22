import { AppDataSource } from "../AppDataSource";
import { User } from "../entity/User";

import { Role } from "../entity/Role";
import InternalServerExcepcion from "../exceptions/InternalServerException";
import BadRequestException from "../exceptions/BadRequestException";
import ConflictException from "../exceptions/ConflictException";
import NotFoundException from "../exceptions/NotFoundException";
import ForbiddenException from "../exceptions/ForbiddenException";
import InvalidCredentialsException from "../exceptions/InvalidCredentialsException";

const userRepository = AppDataSource.getRepository(User);
const roleRepository = AppDataSource.getRepository(Role);

const jwtSecret = process.env.JWT_SECRET || "your-secret-key";

export class AuthService {
  static async register(email: string, password: string, name: string, surname: string) {
    try {
      if (!email || !password || !name || !surname) {
        throw new BadRequestException("All fields are required");
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      
      if (!emailRegex.test(email)) throw new BadRequestException("Invalid email format");

      if (password.length < 8) throw new BadRequestException("Password must have atleast 8 characters");

      let user = await userRepository.findOne({ where: { email } });
      
      if (user) throw new ConflictException("User with this email already exists");

      let role = await roleRepository.findOne({ where: { name: "Regular" } });

      if (!role) throw new BadRequestException("Default role not found");

      user = new User();
      user.email = email;
      user.password = password;
      user.name = name;
      user.surname = surname;
      user.role = role;
      
      await user.hashPassword();
      await userRepository.save(user);

      const userDTO = {
        email: user.email,
        name: user.name,
        surname: user.surname,
        role: user.role.name
      };

      return userDTO;
    } catch (error: Error | any) {
      console.error("Register error:", error);
      throw new InternalServerExcepcion(error.message || "Internal server error");
    }
  }

  static async login(email: string, password: string) {
    try {
      if (!email || !password) throw new BadRequestException("Email and password are required");

      const user = await userRepository.findOne({ where: { email } });
      
      if (!user) throw new NotFoundException("User not found");

      const isValid = await user.comparePassword(password);

      if (!isValid) throw new InvalidCredentialsException("Invalid credentials");

      const userDTO = {
        email: user.email,
        name: user.name,
        surname: user.surname,
        role: user.role.name
      };

      return userDTO;
    } catch (error: Error | any) {
      console.error("Login error:", error);
      throw new InternalServerExcepcion(error.message || "Internal server error");
    }
  }

  static async profile(user: User) {
    try {
      const userDTO = {
        email: user.email,
        name: user.name,
        surname: user.surname,
        role: user.role.name
      };

      return userDTO;
    } catch (error: Error | any) {
      console.error("Profile error:", error);  
      throw new InternalServerExcepcion(error.message || "Internal server error");
    }
  }

  static async update(user: User, email: string, name: string, surname: string, password: string) {
    try {
      if (!email && !name && !surname && !password) {
        throw new BadRequestException("At least one field (email, name, surname, password) must be provided for update");
      }
  
      if (email !== null) user.email = email;
      if (name !== null) user.name = name;
      if (surname !== null) user.surname = surname;

      if (password !== null) {
        user.password = password;
        
        await user.hashPassword();
      }

      await userRepository.save(user);

      const userDTO = {
        email: user.email,
        name: user.name,
        surname: user.surname,
        role: user.role.name
      };
  
      return userDTO;
    } catch (error: Error | any) {
      console.error("Update error:", error);
      throw new InternalServerExcepcion(error.message || "Internal server error");
    }
  }

  static async changePassword(user: User, password: string) {
    try {
      if (!password) {
        throw new BadRequestException("Password is required");
      }

      if (password !== null) {
        user.password = password;
        
        await user.hashPassword();
      }

      await userRepository.save(user);

      const userDTO = {
        email: user.email,
        name: user.name,
        surname: user.surname,
        role: user.role.name
      };
  
      return userDTO;
    } catch (error: Error | any) {
      console.error("Change password error:", error);
      throw new InternalServerExcepcion(error.message || "Internal server error");
    }
  }
}