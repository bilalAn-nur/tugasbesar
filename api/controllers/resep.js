import Resep from "../models/Resep.js";

export const createResep = async (req, res, next) => {
  const newResep = new Resep(req.body);

  try {
    const savedResep = await newResep.save();
    res.status(200).json(savedResep);
  } catch (err) {
    next(err);
  }
};

export const updateResep = async (req, res, next) => {
  try {
    const updatedResep = await Resep.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedResep);
  } catch (err) {
    next(err);
  }
};

export const deleteResep = async (req, res, next) => {
  try {
    await Resep.findByIdAndDelete(req.params.id);
    res.status(200).json("Resep Berhasil dihapus");
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getResep = async (req, res, next) => {
  try {
    const resep = await Resep.findById(req.params.id);
    res.status(200).json(resep);
  } catch (err) {
    next(err);
  }
};

export const getReseps = async (req, res, next) => {
  try {
    const Reseps = await Resep.find();
    res.status(200).json(Reseps);
  } catch (err) {
    next(err);
  }
};

export const countByBahan = async (req, res, next) => {
  const bahan = req.query.id_bahan_baku.split(",");
  try {
    const list = await Promise.all({ bahan: bahan });
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};
