import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteContact } from "../../actions";

const ContactItem = ({ contact, deleteContact }) => {
  return (
    <div className="card bg-light">
      <h3 className="text-main text-left">
        {contact.name}{" "}
        <span
          className={`badge ${
            contact.type === "professional" ? "badge-second" : "badge-success"
          }`}
        >
          {contact.type}
        </span>
      </h3>
      <ul className="list">
        {contact.email && (
          <li>
            <i className="fas fa-envelope-open" /> {contact.email}
          </li>
        )}
        {contact.phone && (
          <li>
            <i className="fas fa-phone" /> {contact.phone}
          </li>
        )}
      </ul>
      <div>
        <Link to={`/contacts/${contact.id}`} className="btn btn-dark btn-sm">
          <i className="fas fa-user-edit" />
        </Link>
        <button
          onClick={() => deleteContact(contact.id)}
          className="btn btn-danger btn-sm"
        >
          <i className="fas fa-trash-alt" />
        </button>
      </div>
    </div>
  );
};

export default connect(
  null,
  { deleteContact }
)(ContactItem);
