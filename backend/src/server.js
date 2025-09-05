import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

import userRoutes from "./routes/user.route.js";

import { connectDB } from "./config/db.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/api/user", userRoutes);
// more routes

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connectDB();
});
