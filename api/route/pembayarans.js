import express from "express";
import Pembayaran from "../models/Pembayaran.js";
import {
  createPembayaran,
  deletePembayaran,
  getPembayaran,
  getPembayarans,
  updatePembayaran,
} from "../controllers/Pembayaran.js";
import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/", verifyToken, createPembayaran);

//UPDATE
router.put("/:id", verifyToken, updatePembayaran);

//DELETE
router.delete("/:id", verifyToken, deletePembayaran);

//GET
router.get("/:id", verifyToken, getPembayaran);

//GET ALL
router.get("/", verifyToken, getPembayarans);
router.get("/countBy", verifyToken, getPembayarans);
router.get("/", verifyToken, getPembayarans);

export default router;
