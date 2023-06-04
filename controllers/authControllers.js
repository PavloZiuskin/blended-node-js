const controllerWrapper = require("../utils/controllerWrapper");
const { signupService, loginService } = require("../services/authServices");

const signup = controllerWrapper(async (req, res) => {
  const user = await signupService(req.body);
  res
    .status(201)
    .json({ userName: user.userName, email: user.email, _id: user._id });
});
const login = controllerWrapper(async (req, res) => {
  const { user, accessToken } = await loginService(req.body);
  res.status(200).json({ user, accessToken });
});
const logout = controllerWrapper(async (req, res) => {});

module.exports = { signup, login, logout };
