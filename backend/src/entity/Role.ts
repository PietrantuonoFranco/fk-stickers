import "reflect-metadata";
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm"
import { User } from "./User";

@Entity('roles')
export class Role {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    name!: string

    // Relaciones
    @OneToMany(() => User, user => user.rol)
        users!: User[];
}