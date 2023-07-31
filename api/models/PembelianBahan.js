import mongoose from "mongoose";
const { Schema } = mongoose;

const PembelianBahanSchema = new mongoose.Schema({
  id_bahan_baku: {
    type: [String],
    required: true,
  },
  harga: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("pembelian_bahan", PembelianBahanSchema);
