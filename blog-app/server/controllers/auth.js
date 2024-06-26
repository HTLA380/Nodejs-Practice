const userModel = require("../models/User");
const { BadRequestError, UnauthenticatedError } = require("../errors");
const { StatusCodes } = require("http-status-codes");

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

  const isPasswordMatch = await user.comparePassword(password);

  if (!isPasswordMatch) {
    throw new UnauthenticatedError("Incorrect Password");
  }

  const token = user.createJWT();

  res
    .status(StatusCodes.OK)
    .json({ user: { name: user.name, email: user.email, id: user._id }, token });
};

const getUser = async (req, res) => {
  const {_id, name, email} = await userModel.findOne({_id: req.user.userId})
  res.json({_id, name, email})
}

module.exports = { register, login, getUser };
