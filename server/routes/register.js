const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");

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
  (req, res) => {
    // const {
    //   firstName,
    //   lastName,
    //   gender,
    //   email,
    //   mobile,
    //   country,
    //   birthDate,
    //   password,
    //   password2,
    // } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
    }
    res.send(req.body);

    // get all above field as register user
    // 1. check if all field is filled
    // 2. check if email exists
    // 3. check if password and password2 match
  }
);

module.exports = router;
