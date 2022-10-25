const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const User = require("../models/User.model");

router.post(
  "/",
  body("email").isEmail().normalizeEmail(),
  body("password").isLength({ min: 8 }),
  body("password2").isLength({ min: 8 }),
  body("password2").custom(async (password2, { req }) => {
    const password = req.body.password;
    if (password !== password2) {
      throw new Error("Password must be same");
    }
  }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
    }
    const { firstName, lastName, email, password } = req.body;
    try {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
      }

      // code to save user info into  database
      res.status(200).json({ message: "User does not exists" });
    } catch (err) {
      console.log(err);
    }
  }
);

module.exports = router;
