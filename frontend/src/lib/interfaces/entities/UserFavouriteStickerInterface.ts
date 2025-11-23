import User from './UserInterface';
import Sticker from './StickerInterface';

export default interface UserFavouriteSticker {
    id: number;
    userId?: number;
    stickerId?: number;
    user?: User;
    sticker?: Sticker;
}