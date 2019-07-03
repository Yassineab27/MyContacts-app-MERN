import React, { useState } from "react";

import { connect } from "react-redux";
import { setAlert, registerUser } from "../../actions";

const Register = props => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const onSubmit = e => {
    e.preventDefault();
    if (password !== password2) {
      props.setAlert("Please make sure both passwords match.", "danger");
    } else {
      const user = {
        name,
        email,
        password
      };
      props.registerUser(user);
    }
  };

  return (
    <div className="form-container">
      <h1>
        Account <span style={{ color: "#b48911" }}>Register</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
            autoComplete="none"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            autoComplete="none"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            autoComplete="off"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password2">Confirm Password</label>
          <input
            type="password"
            name="password2"
            value={password2}
            required
            onChange={e => setPassword2(e.target.value)}
          />
        </div>
        <button className="btn btn-block btn-medium">Register</button>
      </form>
    </div>
  );
};

export default connect(
  null,
  { setAlert, registerUser }
)(Register);
