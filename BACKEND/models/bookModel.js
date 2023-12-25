const mongoose = require("mongoose");

const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please add the title"],
    },
    author: {
      type: String,
      required: [true, "Please add the author"],
    },
    publishYear: {
      type: Number,
      required: [true, "Please add the publish year"],
    },
    imageSrc: {
      type: String,
      required: [true, "Please add the image"],
    },
    description: {
      type: String,
      required: [true, "Please add the description"],
    },
    price: {
      type: Number,
      required: [true, "Please add the  price"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Book", bookSchema);