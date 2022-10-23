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
    } else {
      User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        gender: req.body.gender,
        email: req.body.email,
        mobile: req.body.mobile,
        country: req.body.country,
        birthDate: req.body.birthDate,
        password: req.body.password,
        password2: req.body.password2,
      });
      res.status(200).send(await User.find({ email: req.body.email }));
    }

    // get all above field as register user
    // 1. check if all field is filled
    // 2. check if email exists
    // 3. check if password and password2 match
  }
);

module.exports = router;
