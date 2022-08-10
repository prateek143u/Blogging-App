import React, { useContext } from "react";
import _ from "lodash";
import Blog from "./Blog";
import BlogContext from "../context/BlogContext";

const BlogList = () => {
  const { books, setBooks } = useContext(BlogContext);

  const handleRemoveBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <React.Fragment>
      <div className="book-list">
        {!_.isEmpty(books) ? (
          books.map((book) => (
            <Blog key={book.id} {...book} handleRemoveBook={handleRemoveBook} />
          ))
        ) : (
          <p className="message">No blogs available</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default BlogList;
