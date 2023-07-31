import express from "express";
import Memesan from "../models/Memesan.js";
import {
  createMemesan,
  deleteMemesan,
  getMemesan,
  getMemesans,
  updateMemesan,
} from "../controllers/memesan.js";
import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/", verifyToken, createMemesan);

//UPDATE
router.put("/:id", verifyToken, updateMemesan);

//DELETE
router.delete("/:id", verifyToken, deleteMemesan);

//GET
router.get("/:id", verifyToken, getMemesan);

//GET ALL
router.get("/", verifyToken, getMemesans);
router.get("/countBy", verifyToken, getMemesans);
router.get("/", verifyToken, getMemesans);

export default router;
