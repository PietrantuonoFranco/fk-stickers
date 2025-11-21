import { AppDataSource } from "../AppDataSource"
import { User } from "../entity/User"

import "dotenv"
import InternalServerExcepcion from "../exceptions/InternalServerException.js";
import BadRequestException from "../exceptions/BadRequestException.js";
import NotFoundException from "../exceptions/NotFoundException.js";
import ConflictException from "../exceptions/ConflictException.js";
import { Role } from "../entity/Role";

const userRepository = AppDataSource.getRepository(User);

export class UserService {
  static async all() {
    try {
      const users = await userRepository.find({relations: ['role']});

      if (users.length === 0) return [];

      return users;
    } catch (error: Error | any) {
        throw new InternalServerExcepcion(error.message);
    }
  }

    
  static async one(id: number) {
    try {
      if (!id || id  <= 0) throw new BadRequestException("No se ha proporcionado un ID de Usuario.");

      const user = await userRepository.findOne({
        where: { id },
        relations: ['role']
      });

      if (!user) throw new NotFoundException("Usuario no encontrado.");

      return user;
    } catch (error: Error | any) {
        throw new InternalServerExcepcion(error.message);
    }
  }

  static async save(email: string, name: string, surname: string, password: string, roleId: number) {
    try {
      if (!email || !name || !surname || !password || !roleId) {
        throw new BadRequestException("Complete todos los campos necesarios.");
      }

      let user = await userRepository.findOne({ where: { email } });
      
      if (user) throw new ConflictException("Ya existe un Usuario con ese email.");

      user = Object.assign(new User(), {
        email,
        name,
        surname,
        password,
        roleId
      });

      await user.hashPassword();
      await userRepository.save(user);

      return user;
    } catch (error: Error | any) {
        throw new InternalServerExcepcion(error.message);
    }
  }

  static async remove(id: number) {
    try {
      if (!id || id  <= 0) throw new BadRequestException("No se ha proporcionado un ID de Usuario.");

      let userToRemove = await userRepository.findOneBy({ id });

      if (!userToRemove) throw new NotFoundException("Usuario no encontrado.");

      const removedUser = await userRepository.remove(userToRemove);

      return removedUser;
    } catch (error: Error | any) {
        throw new InternalServerExcepcion(error.message);
    }
  }

  static async update(
    id: number,
    email: string | null,
    name: string | null,
    surname: string | null,
    password: string | null,
    role: Role | null
  ) {
    try {
      if (!id || id  <= 0) throw new BadRequestException("No se ha proporcionado un ID de usuario válido.");
  
      if (!email && !name && !surname && !password && !role) {
        throw new BadRequestException("Debe proporcionar al menos un campo para actualizar.");
      }
  
      const user = await userRepository.findOneBy({ id });
      
      if (!user) throw new NotFoundException("Usuario no encontrado.");
  
      if (email !== null) user.email = email;
      if (name !== null) user.name = name;
      if (surname !== null) user.surname = surname;
      if (role !== null) user.role = role;

      if (password !== null) {
        user.password = password;
        
        await user.hashPassword();
      }

      await userRepository.save(user);

      return user;
    } catch (error: Error | any) {
        throw new InternalServerExcepcion(error.message);
    }
  }
}