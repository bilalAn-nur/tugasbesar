import BahanBaku from "../models/BahanBaku.js";

export const createBahanBaku = async (req, res, next) => {
  const newBahanBaku = new BahanBaku(req.body);

  try {
    const savedBahanBaku = await newBahanBaku.save();
    res.status(200).json(savedBahanBaku);
  } catch (err) {
    next(err);
  }
};

export const updateBahanBaku = async (req, res, next) => {
  try {
    const updatedBahanBaku = await BahanBaku.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedBahanBaku);
  } catch (err) {
    next(err);
  }
};

export const deleteBahanBaku = async (req, res, next) => {
  try {
    await BahanBaku.findByIdAndDelete(req.params.id);
    res.status(200).json("BahanBaku Berhasil dihapus");
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getBahanBaku = async (req, res, next) => {
  try {
    const BahanBaku = await BahanBaku.findById(req.params.id);
    res.status(200).json(BahanBaku);
  } catch (err) {
    next(err);
  }
};

export const getBahanBakus = async (req, res, next) => {
  try {
    const BahanBakus = await BahanBaku.find();
    res.status(200).json(BahanBakus);
  } catch (err) {
    next(err);
  }
};
