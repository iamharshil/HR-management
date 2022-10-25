const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    autoIndex: true,
    lowercase: true,
    required: [true, "Email not provided.!!"],
    validate: {
      validator: function (v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      },
      message: "{VALUE} is not a valid email",
    },
  },
  mobile: {
    type: Number,
    minLength: 10,
    maxLength: 10,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  birthDate: {
    type: Date,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  created: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("User", UserSchema);
