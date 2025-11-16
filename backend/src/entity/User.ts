import "reflect-metadata"
import { Entity, Column, ManyToOne, JoinColumn } from "typeorm"
import { Role } from "./Role"
import bcrypt from "bcrypt"
import "dotenv"

@Entity()
export class User {
    @Column()
    id!: number

    @Column({ type: "varchar", length: 45, unique: true })
    username!: string
    
    @Column({ type: "varchar", length: 45, unique: true })
    email!: string
    
    @Column({ type: "varchar", length: 45, unique: true })
    name!: string

    @Column({ type: "varchar", length: 45, unique: true })
    surname!: string

    @Column({ type: "varchar", length: 45, unique: true })
    password!: string

    @ManyToOne(() => Role)
        @JoinColumn({ name: 'role_id' })
        rol!: Role;

    // Methods
    async hashpassword() {
        this.password = await bcrypt.hash(this.password, parseInt(process.env.SALT_ROUNDS  || "10"));
    }
    
    async comparepassword(attempt: string): Promise<boolean> {
        return await bcrypt.compare(attempt, this.password);
    }
}