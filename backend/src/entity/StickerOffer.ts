import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Sticker } from "./Sticker";
import { Offer } from "./Offer";

@Entity('sticker_offers')
export class StickerOffer {
    // Tabla Many-to-Many para ofertas
    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToOne(() => Sticker, sticker => sticker.stickerOffers)
    @JoinColumn({ name: 'sticker_id' })
    sticker!: Sticker;

    @ManyToOne(() => Offer, offer => offer.stickerOffers)
    @JoinColumn({ name: 'offer_id' })
    offer!: Offer;
}