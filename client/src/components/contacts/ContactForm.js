import React, { useState } from "react";
import { withRouter } from "react-router-dom";

const ContactForm = ({ contact, onSubmit, history }) => {
  const [name, setName] = useState(contact ? contact.name : "");
  const [email, setEmail] = useState(contact ? contact.email : "");
  const [phone, setPhone] = useState(contact ? contact.phone : "");
  const [website, setWebsite] = useState(contact ? contact.website : "");
  const [type, setType] = useState(contact ? contact.type : "personal");

  const handleSubmit = e => {
    e.preventDefault();
    const newContact = {
      name,
      email,
      phone,
      website,
      type
    };
    onSubmit(newContact);
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
          autoComplete="no"
        />
        <input
          type="email"
          placeholder="email"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          autoComplete="no"
        />
        <input
          type="text"
          placeholder="phone"
          name="phone"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          autoComplete="off"
        />
        <input
          type="text"
          placeholder="website"
          name="website"
          value={website}
          onChange={e => setWebsite(e.target.value)}
          autoComplete="off"
        />
        <h5>Contact Type</h5>
        <input
          type="radio"
          name="type"
          value="personal"
          checked={type === "personal"}
          onChange={e => setType("personal")}
        />{" "}
        Personal{" "}
        <input
          type="radio"
          name="type"
          value="professional"
          checked={type === "professional"}
          onChange={e => setType("professional")}
        />{" "}
        Professional
        <div>
          <button className="btn btn-main btn-block">
            {contact ? "Update Contact" : "Add Contact"}
          </button>
        </div>
      </form>
      <div className="cancelButton">
        <button
          onClick={() => history.go(-1)}
          className="btn btn-medium btn-block"
        >
          Cancel
        </button>
      </div>
    </React.Fragment>
  );
};

export default withRouter(ContactForm);
