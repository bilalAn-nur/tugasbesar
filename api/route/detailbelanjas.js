import express from "express";
import {
  createDetailBelanja,
  deleteDetailBelanja,
  getDetailBelanja,
  getDetailBelanjas,
  updateDetailBelanja,
} from "../controllers/DetailBelanja.js";
import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/", verifyToken, createDetailBelanja);

//UPDATE
router.put("/:id", verifyToken, updateDetailBelanja);

//DELETE
router.delete("/:id", verifyToken, deleteDetailBelanja);

//GET
router.get("/:id", verifyToken, getDetailBelanja);

//GET ALL
router.get("/", verifyToken, getDetailBelanjas);
router.get("/countBy", verifyToken, getDetailBelanjas);
router.get("/", verifyToken, getDetailBelanjas);

export default router;
