import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config({
  path: "./.env",
});

const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => app.listen(process.env.PORT))
  .then(() => console.log(`connected to db at port ${port} :)`))
  .catch((err) => console.log(`${err} is error`));
