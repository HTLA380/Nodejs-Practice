const express = require("express");
const router = express.Router();

const { getBlogs, createBlog, getSingleBlog, updateBlog, deleteBlog } = require("../controllers/blog");

const path = require('path')
const multer = require("multer")

const Storage = multer.diskStorage({
  destination: 'uploads',
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname))
  }
})

const upload = multer({
  storage: Storage
}).single('blogImage')

router.route("/").get(getBlogs).post(upload, createBlog);
router.route("/:id").get(getSingleBlog).patch(updateBlog).delete(deleteBlog);

module.exports = router;
