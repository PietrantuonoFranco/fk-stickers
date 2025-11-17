import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { User } from "./User";
import { Sticker } from "./Sticker";

@Entity('user_favourite_stickers')
export class UserFavouriteSticker {
    // Tabla Many-to-Many para favoritos
    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToOne(() => User, user => user.favouriteStickers) // Asumo que User tendrá una propiedad favouriteStickers
    @JoinColumn({ name: 'user_id' })
    user!: User;

    @ManyToOne(() => Sticker, sticker => sticker.favouriteByUsers)
    @JoinColumn({ name: 'sticker_id' })
    sticker!: Sticker;
}