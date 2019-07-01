import React, { useState } from "react";

const ContactForm = props => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [type, setType] = useState("personal");

  const handleSubmit = e => {
    e.preventDefault();
    const newContact = {
      name,
      email,
      phone,
      type
    };
    props.submit(newContact);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="name"
        name="name"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="email"
        name="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="phone"
        name="phone"
        value={phone}
        onChange={e => setPhone(e.target.value)}
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
        <input
          type="submit"
          value="Add Contact"
          className="btn btn-main btn-block"
        />
      </div>
    </form>
  );
};

export default ContactForm;
