import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { StickerOffer } from "./StickerOffer";

@Entity('offers')
export class Offer {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: "float" })
    multiplier!: number;

    @Column({ type: "varchar", length: 45 })
    description!: string;

    @OneToMany(() => StickerOffer, stickerOffer => stickerOffer.offer)
    stickerOffers!: StickerOffer[];
}