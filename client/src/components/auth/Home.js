import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1 className="mt-2">
        Welcome To <span style={{ color: "#b48911" }}>My Contacts Saver</span>
      </h1>
      <h3>Never loose your contacts again.</h3>
      <div className="text-center my-3">
        <Link to="/users/login" className="btn btn-medium">
          Login
        </Link>
        <Link to="/users/register" className="btn btn-medium">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Home;
