import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from "typeorm";
import { User } from "./User";
import { StickerTag } from "./StickerTag";
import { UserFavouriteSticker } from "./UserFavouriteSticker";
import { StickerOffer } from "./StickerOffer";
import { PurchaseDetail } from "./PurchaseDetail";

@Entity('stickers')
export class Sticker {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: "varchar", length: 45 })
    name!: string;

    @Column({ type: "varchar", length: 45 })
    url!: string;

    @Column({ type: "varchar", length: 45 })
    description!: string;

    @Column({ type: "float" })
    price!: number;

    @ManyToOne(() => User) // Asumo que author_id se relaciona con User
    @JoinColumn({ name: 'author_id' })
    author!: User;

    @OneToMany(() => StickerTag, tag => tag.sticker)
    stickerTags!: StickerTag[];

    @OneToMany(() => UserFavouriteSticker, favourite => favourite.sticker)
    favouriteByUsers!: UserFavouriteSticker[];

    @OneToMany(() => StickerOffer, offer => offer.sticker)
    stickerOffers!: StickerOffer[];

    @OneToMany(() => PurchaseDetail, detail => detail.sticker)
    purchaseDetails!: PurchaseDetail[];
}