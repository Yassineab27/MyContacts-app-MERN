import React from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

const Home = props => {
  return (
    <div>
      <h1 className="mt-2">
        Welcome To <span style={{ color: "#b48911" }}>My Contacts Saver</span>
      </h1>
      <h3>Never loose your contacts again.</h3>
      {props.isAuthenticated ? (
        <div className="text-center mt-2">
          <Link to="/contacts" className="btn btn-medium">
            See My contacts
          </Link>
        </div>
      ) : (
        <div className="text-center mt-2">
          <Link to="/users/login" className="btn btn-medium">
            Login
          </Link>
          <Link to="/users/register" className="btn btn-medium">
            Register
          </Link>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return { isAuthenticated: state.auth.isAuthenticated };
};

export default connect(mapStateToProps)(Home);
