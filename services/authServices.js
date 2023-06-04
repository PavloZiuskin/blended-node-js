const bcrypt = require("bcrypt");

const User = require("../models/User");
const assignTokens = require("../utils/assignTokens");
const HttpError = require("../utils/HttpError");

const signupService = async (body) => {
  const { email, userName, password } = body;
  const fetchedUser = await User.findOne({ email });
  if (fetchedUser) {
    throw new HttpError(409, "Email should be unique");
  }
  //   const hashedPassword = await bcrypt.hash(password, 12);
  const newUser = await User.create({
    email,
    userName,
    password,
  });
  return newUser;
};

const loginService = async (body) => {
  const { email, password } = body;
  const fetchedUser = await User.findOne({ email });
  if (!fetchedUser) {
    throw new HttpError(401, "Email not found");
  }
  const isPasswordCorrect = await bcrypt.compare(
    password,
    fetchedUser.password
  );
  if (!isPasswordCorrect) {
    throw new HttpError(401, "Password not found");
  }
  const { refreshToken, accessToken } = assignTokens(fetchedUser);
  await User.findByIdAndUpdate(fetchedUser._id, {
    refresh_token: refreshToken,
  });

  return { user: fetchedUser, accessToken };
};

module.exports = { signupService, loginService };
