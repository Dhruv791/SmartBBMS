import mongoose from "mongoose";

const requestSchema = new mongoose.Schema({
  hospitalName: {
    type: String,
    required: true,
  },
  bloodGroupRequired: {
    type: String,
    required: true,
  },
  unitsRequired: {
    type: Number,
    required: true,
  },
  urgency: {
    type: String,
    enum: ["Normal", "High", "Critical"],
    default: "Normal",
  },
  status: {
    type: String,
    enum: ["Pending", "Approved", "Rejected"],
    default: "Pending",
  },
  requestDate: {
    type: Date,
    default: Date.now,
  },
}, { timestamps: true });

export default mongoose.model("Request", requestSchema);