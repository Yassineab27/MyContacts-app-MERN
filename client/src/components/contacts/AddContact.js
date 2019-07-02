import React, { Component } from "react";
import ContactForm from "./ContactForm";

import { connect } from "react-redux";
import { addContact } from "../../actions";
const uuidv4 = require("uuid/v4");

class AddContact extends Component {
  handleSubmit = contact => {
    this.props.addContact({ ...contact, id: uuidv4() });
  };

  render() {
    return (
      <div>
        <h2>Add Contact</h2>
        <ContactForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default connect(
  null,
  { addContact }
)(AddContact);
