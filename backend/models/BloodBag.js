import mongoose from "mongoose";

const bloodBagSchema = new mongoose.Schema({
  donorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Donor",
    required: true,
  },
  bloodGroup: {
    type: String,
    required: true,
  },
  collectionDate: {
    type: Date,
    default: Date.now,
  },
  expiryDate: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ["Available", "Issued", "Expired"],
    default: "Available",
  },
}, { timestamps: true });

export default mongoose.model("BloodBag", bloodBagSchema);