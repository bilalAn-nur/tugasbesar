import PembelianBahan from "../models/PembelianBahan.js";

export const createPembelianBahan = async (req, res, next) => {
  const newPembelianBahan = new PembelianBahan(req.body);

  try {
    const savedPembelianBahan = await newPembelianBahan.save();
    res.status(200).json(savedPembelianBahan);
  } catch (err) {
    next(err);
  }
};

export const updatePembelianBahan = async (req, res, next) => {
  try {
    const updatedPembelianBahan = await PembelianBahan.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedPembelianBahan);
  } catch (err) {
    next(err);
  }
};

export const deletePembelianBahan = async (req, res, next) => {
  try {
    await PembelianBahan.findByIdAndDelete(req.params.id);
    res.status(200).json("PembelianBahan Berhasil dihapus");
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getPembelianBahan = async (req, res, next) => {
  try {
    const pembelianBahan = await PembelianBahan.findById(req.params.id);
    res.status(200).json(pembelianBahan);
  } catch (err) {
    next(err);
  }
};

export const getPembelianBahans = async (req, res, next) => {
  try {
    const PembelianBahans = await PembelianBahan.find();
    res.status(200).json(PembelianBahans);
  } catch (err) {
    next(err);
  }
};
