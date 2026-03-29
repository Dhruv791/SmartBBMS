import mongoose from "mongoose";

const donorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  bloodGroup: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  contactNumber: {
    type: String,
  },
  lastDonationDate: {
    type: Date,
  },
  medicalHistory: {
    type: String,
  },
}, { timestamps: true });

export default mongoose.model("Donor", donorSchema);