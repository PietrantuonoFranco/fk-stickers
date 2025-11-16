import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Purchase } from "./Purchase";
import { Size } from "./Size";
import { Sticker } from "./Sticker";

@Entity('purchases_details')
export class PurchaseDetail {
    // Nota: Aunque el diagrama muestra 'id', 'purchase_id', 'size_id' y 'sticker_id' como FKs,
    // en TypeORM a menudo se usa una clave primaria compuesta o un ID auto-incrementable
    // para tablas intermedias. Seguiré la estructura del diagrama con un 'id' simple.
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: "int" })
    quantity!: number;

    @Column({ type: "float" })
    subtotal!: number;

    // Relaciones
    @ManyToOne(() => Purchase, purchase => purchase.details)
    @JoinColumn({ name: 'purchase_id' })
    purchase!: Purchase;

    @ManyToOne(() => Sticker, sticker => sticker.purchaseDetails)
    @JoinColumn({ name: 'sticker_id' })
    sticker!: Sticker;

    @ManyToOne(() => Size, size => size.purchaseDetails)
    @JoinColumn({ name: 'size_id' })
    size!: Size;
}