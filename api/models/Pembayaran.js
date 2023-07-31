import mongoose from "mongoose";
const { Schema } = mongoose;

const PembayaranSchema = new mongoose.Schema({
  id_pelanggan: {
    type: String,
    required: true,
  },
  metode_pembayaran: {
    type: String,
    required: true,
  },
  status_pembayaran: {
    type: String,
    required: true,
  },
  bukti_pembayaran: {
    type: String,
  },
});

export default mongoose.model("Pembayaran", PembayaranSchema);
