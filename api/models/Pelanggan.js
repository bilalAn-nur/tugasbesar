import mongoose from "mongoose";
const { Schema } = mongoose;

const PelangganSchema = new mongoose.Schema({
  nama: {
    type: String,
    required: true,
  },
  alamat: {
    type: String,
    required: true,
  },
  no_telp: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Pelanggan", PelangganSchema);
