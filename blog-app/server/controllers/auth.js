const userModel = require("../models/User");
const { BadRequestError, UnauthenticatedError } = require("../errors");
const { StatusCodes } = require("http-status-codes");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
  const user = await userModel.create(req.body);
  const token = user.createJWT();
  res.json({ user: { name: user.name, email: user.email }, token });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new BadRequestError("Please provide email and password");
  }

  const user = await userModel.findOne({ email });

  if (!user) {
    throw new UnauthenticatedError(`User with email:${email} doesn't exist`);
  }

  const isPasswordMatch = await user.comparePassword();

  if (!isPasswordMatch) {
    throw new UnauthenticatedError("Incorrect Password");
  }

  const token = user.createJWT();

  res
    .status(StatusCodes.OK)
    .json({ user: { name: user.name, email: user.email }, token });
};

module.exports = { register, login };
