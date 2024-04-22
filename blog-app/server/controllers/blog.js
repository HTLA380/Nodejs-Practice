const getBlogs = (req, res) => {
  res.json({ msg: "get all blogs" });
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
