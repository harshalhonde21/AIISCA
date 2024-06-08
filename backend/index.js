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
app.use(express.urlencoded({ extended: true }));

import userRouter from "./routes/auth.route.js";
import contactRouter from "./routes/contact.route.js";
import memberRouter from "./routes/member.route.js";
import GalleryRouter from "./routes/gallery.route.js";
import EventRouter from "./routes/event.route.js";
import BlogRouter from "./routes/blog.route.js";

app.use("/api/v1/user", userRouter);
app.use("/api/v2/contact", contactRouter);
app.use("/api/v3/member", memberRouter);
app.use("/api/v4/gallery", GalleryRouter);
app.use("/api/v5/event", EventRouter);
app.use("/api/v6/blog", BlogRouter);

const port = process.env.PORT;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => app.listen(port))
  .then(() =>
    console.log(`⚙️  Server is running and connected to db at port ${port} :)`)
  )
  .catch((err) => console.log(`${err} is error`));
