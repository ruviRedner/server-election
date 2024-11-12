import exp from "express";
import "dotenv/config";
import userController from "./controllers/userController";
import adminController from "./controllers/admin";
import candidatesController from "./controllers/candidates";
import votesController from "./controllers/votes";
import { connectToMongo } from "./config/db";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";
import { handelShackConnection } from "./socket/io";
const PORT = process.env.PORT || 3000;

const app = exp();
const httpServer = http.createServer(app);
export const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: "*",
  },
});
io.on("connection", handelShackConnection);

app.use(exp.json());
app.use(cors());
connectToMongo();
app.use("/api/users", userController);
app.use("/api/admin", adminController);
app.use("/api/candidates", candidatesController);
app.use("/api/votes", votesController);

httpServer.listen(PORT, () => {
  console.log(`server app and runing in port ${PORT}`);
});
