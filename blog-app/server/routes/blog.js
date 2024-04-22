const express = require("express");
const router = express.Router();
const { getBlogs, createBlog, getSingleBlog, updateBlog, deleteBlog } = require("../controllers/blog");

router.route("/").get(getBlogs).post(createBlog);
router.route("/:id").get(getSingleBlog).patch(updateBlog).delete(deleteBlog);

module.exports = router;
