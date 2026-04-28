import { useEffect, useState } from "react";
import { getBooks } from "./services/api";
import AddBook from "./components/AddBook";
import BookList from "./components/BookList";
import "./index.css";

function App() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");

  const loadBooks = async () => {
    try {
      const res = await getBooks();

      // 🔥 IMPORTANT FIX (forces React re-render properly)
      setBooks([...res.data]);

      console.log("Books Loaded:", res.data); // debug
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  useEffect(() => {
    loadBooks();
  }, []);

  // 🔍 Search logic (safe check added)
  const filteredBooks = books.filter((book) =>
    book.title?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>📚 Library Management System</h1>

      {/* 🔍 Search Bar */}
      <input
        type="text"
        placeholder="Search books..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* ➕ Add Book */}
      <AddBook refreshBooks={loadBooks} />

      {/* 📚 Book List */}
      <BookList books={filteredBooks} refreshBooks={loadBooks} />
    </div>
  );
}

export default App;