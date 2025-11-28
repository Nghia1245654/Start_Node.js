import express from "express";
import dotenv from "dotenv";
import studentRouter from "./routes/studentRouter.js";
import mongoose from "mongoose";
import connectDB from "./config/db.js";
import { swaggerDocs } from "./swagger.js";
import swaggerUI from "swagger-ui-express";

dotenv.config();
const app = express();
app.use(express.json());

connectDB();
app.use("/api/students", studentRouter);
const PORT = process.env.PORT || 3000;
swaggerDocs(app);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
