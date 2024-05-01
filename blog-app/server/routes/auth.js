const express = require("express");
const router = express.Router();
const { register, login, getUser } = require("../controllers/auth");
const authenticationMiddleware = require("../middleware/authentication");

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/user").get(authenticationMiddleware, getUser);

module.exports = router;
