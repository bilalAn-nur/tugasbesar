import Memesan from "../models/Memesan.js";

export const createMemesan = async (req, res, next) => {
  const newMemesan = new Memesan(req.body);

  try {
    const savedMemesan = await newMemesan.save();
    res.status(200).json(savedMemesan);
  } catch (err) {
    next(err);
  }
};

export const updateMemesan = async (req, res, next) => {
  try {
    const updatedMemesan = await Memesan.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedMemesan);
  } catch (err) {
    next(err);
  }
};

export const deleteMemesan = async (req, res, next) => {
  try {
    await Memesan.findByIdAndDelete(req.params.id);
    res.status(200).json("Memesan Berhasil dihapus");
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getMemesan = async (req, res, next) => {
  try {
    const memesan = await Memesan.findById(req.params.id);
    res.status(200).json(memesan);
  } catch (err) {
    next(err);
  }
};

export const getMemesans = async (req, res, next) => {
  try {
    const Memesans = await Memesan.find();
    res.status(200).json(Memesans);
  } catch (err) {
    next(err);
  }
};
