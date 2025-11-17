import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { UserNotification } from "./UserNotification";

@Entity('notifications')
export class Notification {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: "varchar", length: 45 })
    message!: string;

    @Column({ type: "datetime" })
    timestamp!: Date;

    @OneToMany(() => UserNotification, userNotification => userNotification.notification)
    userNotifications!: UserNotification[];
}