import mongoose from "mongoose";
const { Schema } = mongoose;

const DetailBelanjaSchema = new mongoose.Schema({
  tanggal: {
    type: Date,
    default: Date.now,
  },
  total_harga: {
    type: Number,
    required: true,
  },
  id_pembelian: {
    type: [String],
    required: true,
  },
});

export default mongoose.model("Detail_belanja", DetailBelanjaSchema);
