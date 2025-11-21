import "reflect-metadata"
import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne, OneToMany } from "typeorm"

import bcrypt from "bcrypt"
import "dotenv"

import { Role } from "./Role"
import { Purchase } from "./Purchase"
import { Sticker } from "./Sticker"
import { UserFavouriteSticker } from "./UserFavouriteSticker"
import { UserNotification } from "./UserNotification"


@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id!: number

    @Column({ type: "varchar", length: 45, unique: true })
    username!: string
    
    @Column({ type: "varchar", length: 45, unique: true })
    email!: string
    
    @Column({ type: "varchar", length: 45 })
    name!: string

    @Column({ type: "varchar", length: 45 })
    surname!: string

    @Column({ type: "varchar", length: 255 })
    password!: string

    @ManyToOne(() => Role)
        @JoinColumn({ name: 'role_id' })
        role!: Role;
    
    @OneToMany(() => UserFavouriteSticker, favourite => favourite.user)
        favouriteStickers!: UserFavouriteSticker[];

    @OneToMany(() => Purchase, purchase => purchase.user)
    purchases!: Purchase[];

    @OneToMany(() => Sticker, sticker => sticker.author)
    createdStickers!: Sticker[];

    @OneToMany(() => UserNotification, notification => notification.userSender)
    sentNotifications!: UserNotification[];

    @OneToMany(() => UserNotification, notification => notification.userReceiver)
    receivedNotifications!: UserNotification[];


    // Methods
    async hashPassword() {
        this.password = await bcrypt.hash(this.password, parseInt(process.env.SALT_ROUNDS  || "10"));
    }
    
    async comparePassword(attempt: string): Promise<boolean> {
        return await bcrypt.compare(attempt, this.password);
    }
}