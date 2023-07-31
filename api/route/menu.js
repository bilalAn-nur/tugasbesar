import express from "express";
import Menu from "../models/Menu.js";
import {
  createMenu,
  deleteMenu,
  getMenu,
  getMenus,
  updateMenu,
} from "../controllers/menu.js";
import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/", verifyToken, createMenu);

//UPDATE
router.put("/:id", verifyToken, updateMenu);

//DELETE
router.delete("/:id", verifyToken, deleteMenu);

//GET
router.get("/:id", verifyToken, getMenu);

//GET ALL
router.get("/", verifyToken, getMenus);
router.get("/countBy", verifyToken, getMenus);
router.get("/", verifyToken, getMenus);

export default router;
