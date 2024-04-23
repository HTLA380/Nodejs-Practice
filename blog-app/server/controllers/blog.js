const blogModel = require("../models/Blog");
const { StatusCodes } = require("http-status-codes");

const getBlogs = async (req, res) => {
  try {
    let queryObject = {};

    let result = blogModel.find(queryObject);

    if (req.query.fields) {
      const fieldsList = req.query.fields.split(",").join(" ");
      result = result.select(fieldsList);
    }

    const blogs = await result;
    res.status(StatusCodes.OK).json({ blogs });
  } catch (error) {
    throw new Error(error);
  }
};

const createBlog = (req, res) => {
  res.json({ msg: "create blog" });
};

const getSingleBlog = (req, res) => {
  res.json({ msg: "get single blog" });
};

const updateBlog = (req, res) => {
  res.json({ msg: "update blog" });
};

const deleteBlog = (req, res) => {
  res.json({ msg: "delete blog" });
};

module.exports = {
  getBlogs,
  createBlog,
  getSingleBlog,
  updateBlog,
  deleteBlog,
};
