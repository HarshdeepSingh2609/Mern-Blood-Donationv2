const mongoose = require("mongoose");
console.log("🔥 inventoryModel.js HAS BEEN LOADED! Version: 2025-07-06-B");

const inventorySchema = new mongoose.Schema(
  {
    inventoryType: {
      type: String,
      required: [true, "inventory type required"],
      enum: ["in", "out"],
    },
    bloodGroup: {
      type: String,
      required: [true, "blood group is require"],
      enum: ["O+", "O-", "AB+", "AB-", "A+", "A-", "B+", "B-"],
    },
    quantity: {
      type: Number,
      require: [true, "blood quanity is require"],
    },
    email: {
      type: String,
      required: [true, "Donar Email is Required"],
    },
    organisation: {
      type: mongoose.Schema.Types.ObjectId, //This relationship implies that each inventory record is associated with a specific organization
      ref: "users",
      required: [true, "organisation is require"],
    },
    hospital: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: function () {
        return this.inventoryType === "out";
      },
    },
    donar: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: function () {
        return this.inventoryType === "in";
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Inventory", inventorySchema);
