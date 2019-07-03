import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = e => {
    e.preventDefault();
    console.log("Registered");
  };

  return (
    <div className="form-container">
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            autoComplete="off"
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
            autoComplete="none"
            required
          />
        </div>
        <button className="btn btn-block btn-medium">Login</button>
      </form>
      <p className="text-center mt-2">
        You dont have an account ?{" "}
        <Link to="/users/register">Please Register here</Link>
      </p>
    </div>
  );
};

export default Login;
