import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
//routes
import auhtRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import matchesRoutes from "./routes/matchesRoutes.js";
import messagesRoutes from "./routes/messagesRoutes.js";

import cors from "cors";
import { createServer } from "http";

import { initializeSocket } from "./socket/socket.server.js";

import { connectDB } from "./lib/db.js";
dotenv.config();

const app = express();
const httpServer = createServer(app);
const PORT = process.env.PORT || 5002;

initializeSocket(httpServer);

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));

app.use("/api/auth", auhtRoutes);
app.use("/api/users", userRoutes);
app.use("/api/matches", matchesRoutes);
app.use("/api/messages", messagesRoutes);

httpServer.listen(PORT, () => {
  console.log(`Server in port: ${PORT}`);
  connectDB();
});
