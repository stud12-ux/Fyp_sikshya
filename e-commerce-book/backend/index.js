import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/index.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8800;

app.use(cors());

// 🔧 Increase body size limits to fix 413 error
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use(router);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
