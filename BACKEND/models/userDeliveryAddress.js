const mongoose = require("mongoose");

const userAddressSchema = mongoose.Schema(
  {
    userID: {
      type: String,
      required: [true, "Please add the userId"],
    },
    userName: {
        type: String,
        required: [true, "Please add the user userName"],
      },
    address: {
      type: String,
      required: [true, "Please add the address"],
    },
    phone: {
      type: String,
      required: [true, "Please add the user email address"],
    },
    
  },
  {
    timestamps: true,
  }
);



module.exports = mongoose.model("UserAddress", userAddressSchema);