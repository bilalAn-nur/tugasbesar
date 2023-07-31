import express from "express";
import {
  createBahanBaku,
  deleteBahanBaku,
  getBahanBaku,
  getBahanBakus,
  updateBahanBaku,
} from "../controllers/bahanbaku.js";
import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/", verifyToken, createBahanBaku);

//UPDATE
router.put("/:id", verifyToken, updateBahanBaku);

//DELETE
router.delete("/:id", verifyToken, deleteBahanBaku);

//GET
router.get("/:id", verifyToken, getBahanBaku);

//GET ALL
router.get("/", verifyToken, getBahanBakus);
router.get("/countBy", verifyToken, getBahanBakus);
router.get("/", verifyToken, getBahanBakus);

export default router;
