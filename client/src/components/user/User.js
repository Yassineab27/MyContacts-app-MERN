import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateUser } from "../../actions";

const User = props => {
  // useEffect(() => {
  //   props.getUser();
  // }, []);
  return (
    <React.Fragment>
      <h2>User</h2>
      <div className="underline" />
      <form style={{ width: "70%" }}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" placeholder={props.user.name} disabled />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          placeholder={props.user.email}
          disabled
        />
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" placeholder="******" disabled />
        <div>
          <Link to="/users/me/edit">
            <button className="btn btn-main btn-block">
              Edit User <i className="fas fa-edit" />
            </button>
          </Link>
        </div>
      </form>
      <div style={{ width: "70%" }} className="cancelButton">
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

export default connect(
  mapStateToProps,
  { updateUser }
)(User);
