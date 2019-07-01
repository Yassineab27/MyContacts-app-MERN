import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-main">
      <Link to="/contacts">
        <h1>
          My Contacts <i className="far fa-address-book" />
        </h1>
      </Link>
      <ul>
        <li>
          <Link to="/contacts">Contacts</Link>
        </li>
        <li>
          <Link to="/contacts/new">Add Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
