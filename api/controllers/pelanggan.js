import Pelanggan from "../models/Pelanggan.js";

export const createPelanggan = async (req, res, next) => {
  const newPelanggan = new Pelanggan(req.body);

  try {
    const savedPelanggan = await newPelanggan.save();
    res.status(200).json(savedPelanggan);
  } catch (err) {
    next(err);
  }
};

export const updatePelanggan = async (req, res, next) => {
  try {
    const updatedPelanggan = await Pelanggan.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedPelanggan);
  } catch (err) {
    next(err);
  }
};

export const deletePelanggan = async (req, res, next) => {
  try {
    await Pelanggan.findByIdAndDelete(req.params.id);
    res.status(200).json("Pelanggan Berhasil dihapus");
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getPelanggan = async (req, res, next) => {
  try {
    const pelanggan = await Pelanggan.findById(req.params.id);
    res.status(200).json(pelanggan);
  } catch (err) {
    next(err);
  }
};

export const getPelanggans = async (req, res, next) => {
  try {
    const Pelanggans = await Pelanggan.find();
    res.status(200).json(Pelanggans);
  } catch (err) {
    next(err);
  }
};
