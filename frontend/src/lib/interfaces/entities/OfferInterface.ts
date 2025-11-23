import StickerOffer from "./StickerOfferInterface";

export default interface Offer {
    id: number;
    multiplier: number;
    description: string;
    stickerOffers?: StickerOffer[];
}