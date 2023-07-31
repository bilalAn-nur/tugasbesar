import Pembayaran from "../models/Pembayaran.js";

export const createPembayaran = async (req, res, next) => {
  const newPembayaran = new Pembayaran(req.body);

  try {
    const savedPembayaran = await newPembayaran.save();
    res.status(200).json(savedPembayaran);
  } catch (err) {
    next(err);
  }
};

export const updatePembayaran = async (req, res, next) => {
  try {
    const updatedPembayaran = await Pembayaran.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedPembayaran);
  } catch (err) {
    next(err);
  }
};

export const deletePembayaran = async (req, res, next) => {
  try {
    await Pembayaran.findByIdAndDelete(req.params.id);
    res.status(200).json("Pembayaran Berhasil dihapus");
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getPembayaran = async (req, res, next) => {
  try {
    const pembayaran = await Pembayaran.findById(req.params.id);
    res.status(200).json(pembayaran);
  } catch (err) {
    next(err);
  }
};

export const getPembayarans = async (req, res, next) => {
  try {
    const Pembayarans = await Pembayaran.find();
    res.status(200).json(Pembayarans);
  } catch (err) {
    next(err);
  }
};
