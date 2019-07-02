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
