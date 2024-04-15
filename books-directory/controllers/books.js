const BookModel = require("../model/Book");

const getAllBooks = async (req, res) => {
  try {
    const books = await BookModel.find({});
    res.json({ books });
  } catch (error) {
    throw new Error(error);
  }
};

const getSingleBook = async (req, res) => {
  try {
    const { id: bookID } = req.params;
    const book = await BookModel.findById({ _id: bookID });
    if (!book) {
      throw new Error(`Book with id: ${bookID} not found`);
    }
    res.json({ book });
  } catch (error) {
    throw new Error(error);
  }
};

const createBook = async (req, res) => {
  try {
    await BookModel.create(req.body);
    res.json({ success: true });
  } catch (error) {
    throw new Error(error);
  }
};

const updateBook = async (req, res) => {
  try {
    const { id: bookID } = req.params;
    const updates = req.body;

    const book = await BookModel.findByIdAndUpdate(bookID, updates, { runValidators: true, new: true });
    if (!book) {
      throw new Error(`Book with id: ${bookID} not found`);
    }
    res.json({ success: true });
  } catch (error) {
    throw new Error(error);
  }
};

const deleteBook = async (req, res) => {
  const { id: bookID } = req.params;

  try {
    const book = await BookModel.findByIdAndDelete(bookID);
    if (!book) {
      throw new Error(`Book with id: ${bookID} not found`);
    }
    return res.json({ success: true });
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  getAllBooks,
  getSingleBook,
  createBook,
  updateBook,
  deleteBook,
};
