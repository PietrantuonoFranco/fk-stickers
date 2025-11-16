import "reflect-metadata"
import { DataSource } from "typeorm"
import dotenv from "dotenv"

// Entidades

import { User } from "./src/entity/User"
import { Role } from "./src/entity/Role"

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
    entities: [User, Role],
    subscribers: [],
    migrations: [],
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