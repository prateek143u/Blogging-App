import React, { useContext } from "react";
import BlogForm from "./BlogForm";
import { useParams } from "react-router-dom";
import BlogContext from "../context/BlogContext";

const EditBlog = ({ history }) => {
  const { books, setBooks } = useContext(BlogContext);
  const { id } = useParams();
  const bookToEdit = books.find((book) => book.id === id);

  const handleOnSubmit = (book) => {
    const filteredBooks = books.filter((book) => book.id !== id);
    setBooks([book, ...filteredBooks]);
    history.push("/");
  };

  return (
    <div>
      <BlogForm book={bookToEdit} handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default EditBlog;
