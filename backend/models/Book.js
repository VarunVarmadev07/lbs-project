const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    quantity: { type: Number, required: true },
    available: { type: Number, required: true },
    status: { type: String, default: "Available" },
  },
  { timestamps: true }
);

// ✅ THIS LINE IS CRITICAL
module.exports = mongoose.model("Book", bookSchema);