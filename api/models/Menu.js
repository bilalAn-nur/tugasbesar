import mongoose from "mongoose";
const { Schema } = mongoose;

const MenuSchema = new mongoose.Schema({
  nama_menu: {
    type: String,
    required: true,
  },
  harga: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("Menu", MenuSchema);
