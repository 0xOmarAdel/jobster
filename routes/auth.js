const express = require("express");
const rateLimiter = require("express-rate-limit");
const router = express.Router();
const authenticateUser = require("./middleware/auth");

const apiLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000, // 15m
  max: 5,
  message: {
    msg: "Too many requests!",
  },
});

const { register, login, updateUser } = require("../controllers/auth");

router.post("/register", apiLimiter, register);
router.post("/login", apiLimiter, login);
router.patch("/update-user", authenticateUser, updateUser);

module.exports = router;
