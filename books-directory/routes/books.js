const express = require("express");
const router = express.Router();
const { getAllBooks, getSingleBook, createBook, updateBook, deleteBook } = require("../controllers/books");

router.get("/", getAllBooks);
router.get("/:id", getSingleBook);
router.post("/", createBook);
router.patch("/:id", updateBook);
router.delete("/:id", deleteBook);

module.exports = router;
