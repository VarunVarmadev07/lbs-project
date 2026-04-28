import { deleteBook, updateBook } from "../services/api";
import { useState } from "react";

const BookList = ({ books, refreshBooks }) => {
  const [editId, setEditId] = useState(null);
  const [newQty, setNewQty] = useState("");

  const handleUpdate = async (id) => {
    await updateBook(id, { quantity: Number(newQty) });
    setEditId(null);
    refreshBooks();
  };

  return (
    <div>
      {books.map((book) => (
        <div className="card" key={book._id}>
          <h3>{book.title}</h3>
          <p>{book.author}</p>
          <p>Qty: {book.quantity}</p>
          <p>Status: {book.status}</p>

          {editId === book._id ? (
            <>
              <input
                type="number"
                value={newQty}
                onChange={(e) => setNewQty(e.target.value)}
              />
              <button onClick={() => handleUpdate(book._id)}>Save</button>
            </>
          ) : (
            <button onClick={() => setEditId(book._id)}>Update</button>
          )}

          <button onClick={() => { deleteBook(book._id); refreshBooks(); }}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default BookList;