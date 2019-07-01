import React from "react";
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
        <button className="btn btn-dark btn-sm">
          <i className="fas fa-user-edit" />
        </button>
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
