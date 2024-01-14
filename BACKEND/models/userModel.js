const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    firstname: {
      type: String,
      required: [true, "Please add the firstname"],
    },
    lastname: {
      type: String,
      required: [true, "Please add the firstname"],
    },
    email: {
      type: String,
      required: [true, "Please add the user email address"],
      unique : [true, "Email address already taken"],
    },
    password: {
      type: String,
      required: [true, "Please add the user password"],
    },
  },
  {
    timestamps: true,
  }
);



module.exports = mongoose.model("User", userSchema);


