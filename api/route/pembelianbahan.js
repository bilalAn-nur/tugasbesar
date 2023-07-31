import express from "express";
import PembelianBahan from "../models/PembelianBahan.js";
import {
  createPembelianBahan,
  deletePembelianBahan,
  getPembelianBahan,
  getPembelianBahans,
  updatePembelianBahan,
} from "../controllers/pembelianbahan.js";
import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/", verifyToken, createPembelianBahan);

//UPDATE
router.put("/:id", verifyToken, updatePembelianBahan);

//DELETE
router.delete("/:id", verifyToken, deletePembelianBahan);

//GET
router.get("/:id", verifyToken, getPembelianBahan);

//GET ALL
router.get("/", verifyToken, getPembelianBahans);

export default router;
