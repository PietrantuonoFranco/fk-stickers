import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { StickerTag } from "./StickerTag";

@Entity('tags')
export class Tag {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: "varchar", length: 45 })
    name!: string;

    @OneToMany(() => StickerTag, stickerTag => stickerTag.tag)
    stickerTags!: StickerTag[];
}