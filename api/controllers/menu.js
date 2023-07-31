import Menu from "../models/Menu.js";

export const createMenu = async (req, res, next) => {
  const newMenu = new Menu(req.body);

  try {
    const savedMenu = await newMenu.save();
    res.status(200).json(savedMenu);
  } catch (err) {
    next(err);
  }
};

export const updateMenu = async (req, res, next) => {
  try {
    const updatedMenu = await Menu.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedMenu);
  } catch (err) {
    next(err);
  }
};

export const deleteMenu = async (req, res, next) => {
  try {
    await Menu.findByIdAndDelete(req.params.id);
    res.status(200).json("Menu Berhasil dihapus");
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getMenu = async (req, res, next) => {
  try {
    const menu = await Menu.findById(req.params.id);
    res.status(200).json(menu);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getMenus = async (req, res, next) => {
  try {
    const Menus = await Menu.find();
    res.status(200).json(Menus);
  } catch (err) {
    next(err);
  }
};
