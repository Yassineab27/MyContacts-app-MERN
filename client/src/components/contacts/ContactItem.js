import React from "react";

const ContactItem = ({ contact }) => {
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
        <button className="btn btn-danger btn-sm">
          <i className="fas fa-trash-alt" />
        </button>
      </div>
    </div>
  );
};

export default ContactItem;
