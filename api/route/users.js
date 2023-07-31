import express from "express";
import {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
} from "../controllers/user.js";
import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//   res.send("Hello, anda sedang login");
// });

// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//   res.send("Hello, anda sedang login dan anda bisa menghapus akun anda");
// });

// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//   res.send("Hello, anda sedang login dan anda bisa menghapus semua akun");
// });

//UPDATE
router.put("/:id", verifyToken, updateUser);

//DELETE
router.delete("/:id", verifyToken, deleteUser);

//GET
router.get("/:id", verifyToken, getUser);

export default router;
