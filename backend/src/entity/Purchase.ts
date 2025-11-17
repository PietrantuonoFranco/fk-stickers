import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from "typeorm";
import { User } from "./User";
import { PurchaseDetail } from "./PurchaseDetail"; // Asumo que el archivo se llamará PurchaseDetail.ts

@Entity('purchase')
export class Purchase {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: "float" })
    total!: number;

    @Column({ type: "datetime" })
    date!: Date;

    @ManyToOne(() => User, user => user.purchases) // Relación con la entidad User
    @JoinColumn({ name: 'user_id' })
    user!: User;

    @OneToMany(() => PurchaseDetail, detail => detail.purchase) // Relación con PurchaseDetail
    details!: PurchaseDetail[];
}