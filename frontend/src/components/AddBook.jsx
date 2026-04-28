import { useState } from "react";
import { addBook } from "../services/api";

const AddBook = ({ refreshBooks }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addBook({
      title,
      author,
      quantity: Number(quantity),
    });

    setTitle("");
    setAuthor("");
    setQuantity("");

    refreshBooks();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} />
      <input type="number" placeholder="Qty" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
      <button>Add Book</button>
    </form>
  );
};

export default AddBook;