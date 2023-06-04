const express = require("express");
const router = express.Router();
const {
  updateUserValidationSchema,
  createUserValidationSchema,
} = require("../utils/validation/authValidationSchema");
const { signup, login, logout } = require("../controllers/authControllers");
const validateBody = require("../utils/validation/validateBody");
const auth = require("../middlewares/auth");

router.post("/signup", validateBody(createUserValidationSchema), signup);
router.post("/login", validateBody(updateUserValidationSchema), login);
router.post("/logout", auth, logout);

module.exports = { authRouter: router };
