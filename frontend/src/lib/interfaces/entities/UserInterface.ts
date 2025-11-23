import Role from "./RoleInterface";
import Purchase from "./PurchaseInterface";
import Sticker from "./StickerInterface";
import UserFavouriteSticker from "./UserFavouriteStickerInterface";
import UserNotification from "./UserNotificationInterface";

export default interface User {
    id: number;

    username: string;
    email: string;
    name: string;
    surname: string;
    password: string;

    role: Role;
    favouriteStickers: UserFavouriteSticker[];
    purchases: Purchase[];
    createdStickers: Sticker[];
    sentNotifications: UserNotification[];
    receivedNotifications: UserNotification[];
}