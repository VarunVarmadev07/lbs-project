const Book = require("../models/Book");

// ➕ ADD BOOK
exports.addBook = async (req, res) => {
  try {
    const { title, author, quantity } = req.body;

    // 🔥 Fix: quantity should be number
    if (!title || !author || quantity === undefined) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const qty = Number(quantity);

    const book = new Book({
      title,
      author,
      quantity: qty,
      available: qty,
      status: qty > 0 ? "Available" : "Out of Stock",
    });

    await book.save();
    res.status(201).json(book);
  } catch (error) {
    console.error("Add Book Error:", error);
    res.status(500).json({ message: error.message });
  }
};

// 📚 GET ALL BOOKS
exports.getBooks = async (req, res) => {
  try {
    const books = await Book.find().sort({ createdAt: -1 });
    res.json(books);
  } catch (error) {
    console.error("Get Books Error:", error);
    res.status(500).json({ message: error.message });
  }
};

// ✏️ UPDATE BOOK
exports.updateBook = async (req, res) => {
  try {
    const { quantity } = req.body;

    // 🔥 Fix: validate quantity
    if (quantity === undefined) {
      return res.status(400).json({ message: "Quantity is required" });
    }

    const book = await Book.findById(req.params.id);

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    const qty = Number(quantity);

    book.quantity = qty;
    book.available = qty;
    book.status = qty > 0 ? "Available" : "Out of Stock";

    await book.save();

    res.json(book);
  } catch (error) {
    console.error("Update Error:", error);
    res.status(500).json({ message: error.message });
  }
};

// ❌ DELETE BOOK
exports.deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.json({ message: "Book deleted successfully" });
  } catch (error) {
    console.error("Delete Error:", error);
    res.status(500).json({ message: error.message });
  }
};