import mongoose from "mongoose";
const { Schema } = mongoose;

const OwnerSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Owner", OwnerSchema);
