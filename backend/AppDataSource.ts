import { DataSource } from "typeorm"

import { User } from "./src/entity/User"
import { Role } from "./src/entity/Role"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "test",
    password: "test",
    database: "test",
    synchronize: true,
    logging: true,
    entities: [User, Role],
    subscribers: [],
    migrations: [],
})