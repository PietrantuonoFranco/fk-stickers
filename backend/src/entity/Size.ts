import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { PurchaseDetail } from "./PurchaseDetail";

@Entity('sizes')
export class Size {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: "varchar", length: 45 })
    name!: string;

    @Column({ type: "varchar", length: 45 })
    description!: string;

    @Column({ type: "float" })
    price!: number;

    @OneToMany(() => PurchaseDetail, detail => detail.size)
    purchaseDetails!: PurchaseDetail[];
}