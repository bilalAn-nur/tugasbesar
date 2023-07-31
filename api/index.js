import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./route/auth.js";
import usersRoute from "./route/users.js";
import pelanggansRoute from "./route/pelanggans.js";
import menuRoute from "./route/menu.js";
import resepRoute from "./route/reseps.js";
import bahanbakuRoute from "./route/bahanbakus.js";
import detailbelanjaRoute from "./route/detailbelanjas.js";
import pembelianbahanRoute from "./route/pembelianbahan.js";
import memesanRoute from "./route/memesan.js";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB Disconnected!");
});

//middlewares
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/pelanggan", pelanggansRoute);
app.use("/api/menu", menuRoute);
app.use("/api/resep", resepRoute);
app.use("/api/bahanbaku", bahanbakuRoute);
app.use("/api/detailbelanja", detailbelanjaRoute);
app.use("/api/pembelianbahan", pembelianbahanRoute);
app.use("/api/memesan", memesanRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(8800, () => {
  connect();
  console.log("Connect To Backend!");
});
