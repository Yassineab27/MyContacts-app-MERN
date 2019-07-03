import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-main">
      <h1>
        My Contacts <i className="far fa-address-book" />
      </h1>
      <ul>
        <li>
          <Link to="/contacts">
            <i className="fas fa-users fa-lg" />
          </Link>
        </li>
        <li>
          <Link to="/contacts/new">
            <i className="fas fa-user-plus fa-lg" />
          </Link>
        </li>
        <li>
          <Link to="/users/login">
            <i className="fas fa-sign-in-alt fa-lg" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
