const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const { body, validationResult } = require("express-validator");
const User = require("../models/User.model");

router.post(
  "/",
  body("email").isEmail(),
  body("password").isLength({ min: 8 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(403).json({ errors: errors.array() });
    } else {
      User.findOne({ email: req.body.email }, (err, data) => {
        if (err) throw err;
        res.status(200).json(data);
      });
    }
  }
);

module.exports = router;
