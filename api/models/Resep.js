import mongoose from "mongoose";
const { Schema } = mongoose;

const ResepSchema = new mongoose.Schema({
  id_menu: {
    type: String,
    required: true,
  },
  id_bahan_baku: {
    type: [String],
    required: true,
  },
  tata_cara: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Resep", ResepSchema);
