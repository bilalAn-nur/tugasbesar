import mongoose from "mongoose";

const { Schema } = mongoose;

const MemesanSchema = new mongoose.Schema({
  id_menu: {
    type: String,
    required: true,
  },
  jumlah_pemesanan: {
    type: Number,
    required: true,
  },
  tanggal_pengiriman: {
    type: Date,
    default: Date.now,
  },
  id_pelanggan: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Memesan", MemesanSchema);
