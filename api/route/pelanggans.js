import express from "express";
import Pelanggan from "../models/Pelanggan.js";

const router = express.Router();

//CREATE
router.post("/", async (req, res) => {
  const newPelanggan = new Pelanggan(req.body);

  try {
    const savedPelanggan = await newPelanggan.save();
    res.status(200).json(savedPelanggan);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE
router.put("/:id", async (req, res) => {
  try {
    const updatedPelanggan = await Pelanggan.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedPelanggan);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", async (req, res) => {
  try {
    await Pelanggan.findByIdAndDelete(req.params.id);
    res.status(200).json("Pelanggan Berhasil dihapus");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET
router.get("/:id", async (req, res) => {
  try {
    const pelanggan = await Pelanggan.findById(req.params.id);
    res.status(200).json(pelanggan);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL
router.get("/", async (req, res) => {
  try {
    const Pelanggans = await Pelanggan.find(req.params.id);
    res.status(200).json(Pelanggans);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
