import UserNotification from "./UserNotificationInterface";

export default interface Notification {
    id: number;
    message: string;
    timestamp: string | Date;
    userNotifications?: UserNotification[];
}