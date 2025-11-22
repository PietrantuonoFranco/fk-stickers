import express from "express";
import "reflect-metadata";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv"

import { AppDataSource } from "./src/AppDataSource";

//Routes
import AuthRoutes from "./src/routes/AuthRoutes";


dotenv.config();

AppDataSource.initialize()
  // Database connection
  .then(() => console.log("✅ Conection to the database established successfully"))
  .catch((error) => console.log("❌ Error when connecting to the database: ", error))
    
  // Start Express server
  .then(async () => {
    // Application instance
    const app = express();


    // Allow CORS
    app.use(cors({
      origin: process.env.CORS_ORIGIN,
      credentials: true,
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      allowedHeaders: ['Content-Type', 'Authorization']
    }));


    // Middlewares 
    app.use(cookieParser());
    app.use(express.json());

    
    // Health check route
    app.get('/health', (request, response) => {
      response
        .status(200)
        .json({
          status: 'OK',
          timestamp: new Date().toISOString()
        });
    });


    // Routes definition
    app.use("/auth", AuthRoutes);


    // Listen server at defined port
    app.listen(process.env.EXPRESS_PORT, () => {
      console.log("Server running at PORT: ", process.env.EXPRESS_PORT); 
    }).on("error", (error) => {
      throw new Error(error.message);
    });
})