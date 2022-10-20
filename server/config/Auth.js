const jwt = require("jsonwebtoken");
// const Register = require("./models/Register.model");

const auth = async (req, res, next) => {
  try {
    const token = req.cookie.jwt;
    const verifyUser = jwt.verify(token, process.env.SECRET_KEY);
    console.log(verifyUser);
  } catch (err) {
    res.status(401).send(err);
  }
};

module.exports = auth;
