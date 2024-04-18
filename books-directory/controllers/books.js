const BookModel = require("../model/Book");

const getAllBooks = async (req, res) => {
  try {
    const { name, author, genre, sort, fields, numericFilters } = req.query;
    const queryObject = {};

    if (name) {
      queryObject.name = { $regex: name, $options: "i" };
    }
    if (author) {
      queryObject.author = { $regex: author, $options: "i" };
    }
    if (genre) {
      queryObject.genre = { $regex: genre, $options: "i" };
    }

    if (numericFilters) {
      const operatorMap = {
        ">": "$gt",
        ">=": "$gte",
        "=": "$eq",
        "<": "$lt",
        "<=": "$lte",
      };
      const regEx = /\b(<|>|>=|=|<|<=)\b/;
      let filters = numericFilters.replace(regEx, (match) => `-${operatorMap[match]}-`);

      const options = ["price"];
      filters = filters.split(",").forEach((item) => {
        const [field, operator, value] = item.split("-");
        if (options.includes(field)) {
          queryObject[field] = { [operator]: Number(value) };
        }
      });
    }

    let result = BookModel.find(queryObject);

    if (sort) {
      const sortList = sort.split(",").join(" ");
      result = result.sort(sortList);
    } else {
      result = result.sort("date");
    }

    if (fields) {
      const fieldsList = fields.split(",").join(" ");
      result = result.select(fieldsList);
    }

    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    result = result.skip(skip).limit(limit);

    const books = await result;
    res.json({ books });
  } catch (error) {
    throw new Error(error);
  }
};

const getSingleBook = async (req, res) => {
  try {
    const { id: bookID } = req.params;
    const book = await BookModel.findOne({ _id: bookID });
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
