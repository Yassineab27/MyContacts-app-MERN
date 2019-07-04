import React from "react";
import { connect } from "react-redux";
import { removeAlert } from "../../actions";
import "../../index.css";

const Alert = props => {
  if (props.alert) {
    setTimeout(() => props.removeAlert(), 3000);
    return (
      <div className={`alert alert-${props.alert.type}`}>
        <i className="fas fa-info-circle"> {props.alert.msg}</i>
      </div>
    );
  }
  return null;
};

const mapStateToProps = state => {
  return { alert: state.auth.alert };
};

export default connect(
  mapStateToProps,
  { removeAlert }
)(Alert);
