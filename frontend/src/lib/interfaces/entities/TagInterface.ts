import StickerTag from './StickerTagInterface';

export default interface Tag {
    id: number;
    name: string;
    stickerTags?: StickerTag[];
}