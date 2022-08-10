import React, { useContext } from "react";
import BlogForm from "./BlogForm";
import BlogContext from "../context/BlogContext";

const AddBlog = ({ history }) => {
  const { books, setBooks } = useContext(BlogContext);

  const handleOnSubmit = (book) => {
    setBooks([book, ...books]);
    history.push("/");
  };

  return (
    <React.Fragment>
      <BlogForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddBlog;
