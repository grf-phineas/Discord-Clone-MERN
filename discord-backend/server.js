import express from "express";
import http from "http";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
dotenv.config();

const PORT = process.env.PORT || process.env.API_PORT;

const app = express();
app.use(express.json()); //the incoming request data will be changed to the JSON format
app.use(cors());

//register router
app.use("/api/auth", authRoutes);

const server = http.createServer(app); //create server instance

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server is listening on ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("database connection failed. Server not started");
    console.log(err);
  });
