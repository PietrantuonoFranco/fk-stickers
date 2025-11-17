import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { User } from "./User";
import { Notification } from "./Notification";

@Entity('user_notifications')
export class UserNotification {
    // Tabla Many-to-Many para notificaciones de usuario
    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'user_sender_id' })
    userSender!: User; // Asumo el campo 'user_sender_id'

    @ManyToOne(() => User)
    @JoinColumn({ name: 'user_receiver_id' })
    userReceiver!: User; // Asumo el campo 'user_receiver_id'

    @ManyToOne(() => Notification, notification => notification.userNotifications)
    @JoinColumn({ name: 'notification_id' })
    notification!: Notification;
}