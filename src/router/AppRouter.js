import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Header from "../components/Header";
import AddBlog from "../components/AddBlog";
import BlogsList from "../components/BlogsList";
import useLocalStorage from "../hooks/useLocalStorage";
import EditBlog from "../components/EditBlog";
import BlogContext from "../context/BlogContext";

const AppRouter = () => {
  const [books, setBooks] = useLocalStorage("books", []);

  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <BlogContext.Provider value={{ books, setBooks }}>
            <Switch>
              <Route component={BlogsList} path="/" exact={true} />
              <Route component={AddBlog} path="/add" />
              <Route component={EditBlog} path="/edit/:id" />
              <Route component={() => <Redirect to="/" />} />
            </Switch>
          </BlogContext.Provider>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
