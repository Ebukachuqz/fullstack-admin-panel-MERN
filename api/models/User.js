const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name"],
    },
    email: {
      type: String,
      required: [true, "Please provide Email"],
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please provide a valid email",
      ],
      unique: true,
    },
    password: {
      type: String,
      minlength: [5, "Password must be at least 5 Characters"],
    },
    city: {
      type: String,
      // required: [true, "Please provide a name"],
    },
    state: {
      type: String,
      // required: [true, "Please provide a name"],
    },
    country: {
      type: String,
      // required: [true, "Please provide a name"],
    },
    occupation: {
      type: String,
      // required: [true, "Please provide a name"],
    },
    phoneNumber: {
      type: String,
      // required: [true, "Please provide a name"],
    },
    transactions: {
      type: Array,
      // required: [true, "Please provide a name"],
    },
    role: {
      type: String,
      enum: ["user", "admin", "superadmin"],
      default: "admin",
      // required: [true, "Please provide a name"],
    },
  },
  { timestamps: true }
);

UserSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = bcrypt.hash(this.password, salt);
});

module.exports = mongoose.model("User", UserSchema);
