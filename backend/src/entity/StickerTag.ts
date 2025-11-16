import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Sticker } from "./Sticker";
import { Tag } from "./Tag";

@Entity('sticker_tags')
export class StickerTag {
    // Esta tabla es de muchos a muchos (Many-to-Many). Usaré un ID simple.
    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToOne(() => Sticker, sticker => sticker.stickerTags)
    @JoinColumn({ name: 'sticker_id' })
    sticker!: Sticker;

    @ManyToOne(() => Tag, tag => tag.stickerTags)
    @JoinColumn({ name: 'tag_id' })
    tag!: Tag;
}