const express = require("express");
const router = express.Router();
const authenticateUser = require("./middleware/auth");

const { register, login, updateUser } = require("../controllers/auth");

router.post("/register", register);
router.post("/login", login);
router.patch("/update-user", authenticateUser, updateUser);

module.exports = router;
