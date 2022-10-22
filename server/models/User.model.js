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
    type: email,
    required: true,
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
    type: date,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

nodule.exports = mongoose.model("User", UserSchema);
