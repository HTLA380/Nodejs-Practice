const blogModel = require("../models/Blog");
const { StatusCodes } = require("http-status-codes");
const { NotFoundError } = require("../errors");

const getBlogs = async (req, res) => {
  const { fields, author, category, sort } = req.query;

  let queryObject = {};

  if (author) {
    queryObject.author = { $regex: author, $options: "i" };
  }

  if (category) {
    queryObject.category = { $regex: category, $options: "i" };
  }

  let result = blogModel.find(queryObject);

  if(sort) {
    const sortList = sort.split(",").join(" ");
    result = result.sort(sortList)
  } else {
    result = result.sort("-createdAt")
  }

  if (fields) {
    const fieldsList = fields.split(",").join(" ");
    result = result.select(fieldsList);
  }

  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 9;
  const skip = (page - 1) * limit;

  result = result.skip(skip).limit(limit);

  const blogs = await result;
  res.status(StatusCodes.OK).json({ blogs });
};

const createBlog = async (req, res) => {
  const userId = req.user.userId;

  await blogModel.create({ ...req.body, createdBy: userId, });
  res.status(StatusCodes.CREATED).send();
};

const getSingleBlog = async (req, res, next) => {
  const { id: blogID } = req.params;
  const blog = await blogModel.findOne({ _id: blogID });
  res.status(StatusCodes.OK).json({ blog });
};

const updateBlog = async (req, res) => {
  const { id: blogID } = req.params;
  const blog = await blogModel.findByIdAndUpdate({ _id: blogID }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!blog) {
    throw new NotFoundError(`No job with id ${blogID}`);
  }
  res.status(StatusCodes.OK).json({ blog });
};

const deleteBlog = async (req, res) => {
  const { id: blogID } = req.params;
  const blog = await blogModel.findByIdAndDelete({ _id: blogID });
  if (!blog) {
    throw new NotFoundError(`No job with id ${blogID}`);
  }
  res.status(StatusCodes.OK).send();
};

module.exports = {
  getBlogs,
  createBlog,
  getSingleBlog,
  updateBlog,
  deleteBlog,
};
