import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateUser, deleteUser } from "../../actions";

const User = props => {
  const handleDelete = () => {
    console.log("deleted");
    const confirm = window.confirm(
      "If you delete your account you are gonna loose all your contacts. Are you sure you want to do that ?"
    );
    if (confirm) {
      props.deleteUser();
    }
  };
  return (
    <React.Fragment>
      <h2>User</h2>
      <div className="underline" />
      <form style={{ width: "70%" }}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          placeholder={props.user ? props.user.name : ""}
          disabled
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          placeholder={props.user ? props.user.email : ""}
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
        <button
          onClick={() => handleDelete()}
          className="btn btn-medium btn-block"
        >
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
  { updateUser, deleteUser }
)(User);
