import Purchase from './PurchaseInterface';
import Sticker from './StickerInterface';
import Size from './SizeInterface';

export default interface PurchaseDetail {
    id: number;
    quantity: number;
    subtotal: number;
    purchaseId?: number;
    stickerId?: number;
    sizeId?: number;
    purchase: Purchase;
    sticker: Sticker;
    size: Size;
}