import React, { useState } from "react";
import { connect } from "react-redux";

const User = props => {
  const [name, setName] = useState(props.user.name);
  const [email, setEmail] = useState(props.user.email);
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    const newUser = {
      name,
      email,
      password
    };
    console.log(newUser);
  };

  return (
    <React.Fragment>
      <form style={{ width: "75%" }} onSubmit={handleSubmit}>
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
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          autoComplete="off"
        />
        <div>
          <button className="btn btn-main btn-block">Update User</button>
        </div>
      </form>
      <div style={{ width: "75%" }} className="cancelButton">
        <button className="btn btn-medium btn-block">
          Delete User <i className="fas fa-trash-alt" />
        </button>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return { user: state.auth.user };
};

export default connect(mapStateToProps)(User);
