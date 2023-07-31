import DetailBelanja from "../models/DetailBelanja.js";

export const createDetailBelanja = async (req, res, next) => {
  const newDetailBelanja = new DetailBelanja(req.body);

  try {
    const savedDetailBelanja = await newDetailBelanja.save();
    res.status(200).json(savedDetailBelanja);
  } catch (err) {
    next(err);
  }
};

export const updateDetailBelanja = async (req, res, next) => {
  try {
    const updatedDetailBelanja = await DetailBelanja.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedDetailBelanja);
  } catch (err) {
    next(err);
  }
};

export const deleteDetailBelanja = async (req, res, next) => {
  try {
    await DetailBelanja.findByIdAndDelete(req.params.id);
    res.status(200).json("DetailBelanja Berhasil dihapus");
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getDetailBelanja = async (req, res, next) => {
  try {
    const DetailBelanja = await DetailBelanja.findById(req.params.id);
    res.status(200).json(DetailBelanja);
  } catch (err) {
    next(err);
  }
};

export const getDetailBelanjas = async (req, res, next) => {
  try {
    const DetailBelanjas = await DetailBelanja.find();
    res.status(200).json(DetailBelanjas);
  } catch (err) {
    next(err);
  }
};
