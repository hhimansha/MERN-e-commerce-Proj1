const mongoose = require("mongoose");

const orderCartSchema = mongoose.Schema(
  {
    bookId: {
      type: String,
      required: [true, "Please add the title"],
    },
    bookName: {
      type: String,
      required: [true, "Please add the author"],
    },
    qty: {
      type: Number,
      required: [true, "Please add the publish year"],
    },
    imageSrc: {
      type: String,
      required: [true, "Please add the image"],
    },
   
    TotPrice: {
      type: Number,
      required: [true, "Please add the  price"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Cart", orderCartSchema);