import mongoose from "mongoose";
const { Schema } = mongoose;

const BahanBakuSchema = new mongoose.Schema({
  nama_bahan_baku: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Bahan_baku", BahanBakuSchema);
