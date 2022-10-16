import React from "react";
import { Link } from "react-router-dom";
import CardStore from "../Card-store";
import Products from "./Products";

const Nav = () => {
  return (
    <div>
      <Link to="/" className="m-2 p-3">
        Home
      </Link>
      <Link to="/cardStore" className="m-2 p-3">
        Cart-Store
      </Link>
    </div>
  );
};

export default Nav;
