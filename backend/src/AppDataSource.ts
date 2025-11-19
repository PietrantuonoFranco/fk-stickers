import "reflect-metadata"
import { DataSource } from "typeorm"
import dotenv from "dotenv"

// Entidades

import { Notification } from "./entity/Notification"
import { Offer } from "./entity/Offer"
import { Purchase } from "./entity/Purchase"
import { PurchaseDetail } from "./entity/PurchaseDetail"
import { Role } from "./entity/Role"
import { Size } from "./entity/Size"
import { Sticker } from "./entity/Sticker"
import { StickerOffer } from "./entity/StickerOffer"
import { StickerTag } from "./entity/StickerTag"
import { Tag } from "./entity/Tag"
import { User } from "./entity/User"
import { UserFavouriteSticker } from "./entity/UserFavouriteSticker"
import { UserNotification } from "./entity/UserNotification"

dotenv.config();

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || "5432"),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: true,
    entities: [
        Notification,
        Offer,
        Purchase,
        PurchaseDetail,
        Role,
        Size,
        Sticker,
        StickerOffer,
        StickerTag,
        Tag,
        User,
        UserFavouriteSticker,
        UserNotification
    ],
    subscribers: [],
    migrations: ["dist/src/migrations/**/*.js"],
})

async function initializeDatabaseWithHealthCheck() {
    try {
        await AppDataSource.initialize();
        console.log("✅ Database connection established");

        // Test connection with a simple query
        await AppDataSource.query("SELECT 1");
        console.log("✅ Database health check passed");

        return AppDataSource;
    } catch (error) {
        console.error("❌ Database initialization failed:", error);
        throw error;
    }
}

// Usage
initializeDatabaseWithHealthCheck()
    .then((dataSource) => {
        console.log("🚀 Application ready to use database");
        // Start your server here
    })
    .catch(() => {
        console.log("💥 Application failed to start due to database issues");
        process.exit(1);
    });