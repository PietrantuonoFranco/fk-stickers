import "reflect-metadata";
import { Entity, Column, OneToMany } from "typeorm"
import { User } from "./User";

@Entity()
export class Role {
    @Column()
    id!: number

    @Column()
    name!: string

    // Relaciones
    @OneToMany(() => User, user => user.rol)
        users!: User[];
}