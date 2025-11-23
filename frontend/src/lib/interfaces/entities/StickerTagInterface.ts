import Sticker from './StickerInterface';
import Tag from './TagInterface';

export default interface StickerTag {
    id: number;
    stickerId?: number;
    tagId?: number;
    sticker?: Sticker;
    tag?: Tag;
}