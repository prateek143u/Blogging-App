import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Bloging App</h1>
      <hr />
      <div className="links">
        <NavLink to="/" className="link" activeClassName="active" exact>
          Blog
        </NavLink>
        <NavLink to="/add" className="link" activeClassName="active">
          Add Blog
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
