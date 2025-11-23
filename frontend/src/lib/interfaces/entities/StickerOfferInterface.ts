import Sticker from './StickerInterface';
import Offer from './OfferInterface';

export default interface StickerOffer {
    id: number;
    stickerId?: number;
    offerId?: number;
    sticker?: Sticker;
    offer?: Offer;
}