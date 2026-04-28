import axios from "axios";

const API_URL = "https://library-management-system-g59p.onrender.com/api/books";

export const getBooks = () => axios.get(API_URL);
export const addBook = (data) => axios.post(API_URL, data);
export const deleteBook = (id) => axios.delete(`${API_URL}/${id}`);
export const updateBook = (id, data) =>
  axios.put(`${API_URL}/${id}`, data);