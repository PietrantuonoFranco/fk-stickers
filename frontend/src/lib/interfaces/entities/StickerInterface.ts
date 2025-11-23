import User from './UserInterface';
import StickerTag from './StickerTagInterface';
import UserFavouriteSticker from './UserFavouriteStickerInterface';
import StickerOffer from './StickerOfferInterface';
import PurchaseDetail from './PurchaseDetailInterface';

export default interface Sticker {
    id: number;
    name: string;
    url: string;
    description: string;
    price: number;
    authorId?: number;
    author?: User;
    stickerTags?: StickerTag[];
    favouriteByUsers?: UserFavouriteSticker[];
    stickerOffers?: StickerOffer[];
    purchaseDetails?: PurchaseDetail[];
}