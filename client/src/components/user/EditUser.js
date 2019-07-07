import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateUser, setAlert } from "../../actions";

const EditUser = props => {
  const [name, setName] = useState(props.user ? props.user.name : "");
  const [email, setEmail] = useState(props.user ? props.user.email : "");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (password !== password2) {
      return props.setAlert("Please make sure 2 passwords match!", "danger");
    }
    if (password.length < 6) {
      return props.setAlert(
        "Password too short (at least 6 characs.)",
        "danger"
      );
    }
    const newUser = {
      name,
      email,
      password
    };
    props.updateUser(newUser);
  };

  return (
    <React.Fragment>
      <h2>User</h2>
      <div className="underline" />
      <form onSubmit={handleSubmit} style={{ width: "70%" }}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
          autoComplete="no"
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          autoComplete="no"
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          placeholder="******"
          onChange={e => setPassword(e.target.value)}
          autoComplete="off"
          required
        />
        <input
          type="password"
          name="password2"
          value={password2}
          placeholder="******"
          onChange={e => setPassword2(e.target.value)}
          autoComplete="off"
          required
        />
        <div>
          <button className="btn btn-main btn-block">Update</button>
        </div>
      </form>
      <div style={{ width: "70%" }} className="cancelButton">
        <Link to="/users/me">
          <button className="btn btn-medium btn-block">
            Cancel <i className="fas fa-window-close fa-lg" />
          </button>
        </Link>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return { user: state.auth.user };
};

export default connect(
  mapStateToProps,
  { updateUser, setAlert }
)(EditUser);
