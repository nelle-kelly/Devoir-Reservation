import express from 'express';
const app = express();
import destinationRouter from "./routes/destination_route.js";
import reservationRouter from "./routes/reservation_route.js";
import voyageurRouter from "./routes/voyageur_route.js";

import mongoose from "mongoose";

app.use(express.json());
app.use("/api/destinations",destinationRouter);
app.use("/api/reservations",reservationRouter);
app.use("/api/voyageurs",voyageurRouter);

import dotenv from "dotenv";
dotenv.config()

mongoose.connect(process.env.DB_URL)
        .then((result)=>{
            app.listen(process.env.PORT,()=>console.log("server is running"))
        }).catch((err)=>{
            console.log(err);
        });
        
console.log("Starting")

