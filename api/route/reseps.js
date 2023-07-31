import express from "express";
import {
  countByBahan,
  createResep,
  deleteResep,
  getResep,
  getReseps,
  updateResep,
} from "../controllers/resep.js";
import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/", verifyToken, createResep);
router.put("/:id", verifyToken, updateResep);
router.delete("/:id", verifyToken, deleteResep);
router.get("/find/:id", verifyToken, getResep);

router.get("/", verifyToken, getReseps);

export default router;
