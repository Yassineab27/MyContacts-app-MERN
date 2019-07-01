import React, { Component } from "react";
import ContactForm from "./ContactForm";
import uuid from "uuid";

import { connect } from "react-redux";
import { addContact } from "../../actions";

class AddContact extends Component {
  handleSubmit = contact => {
    this.props.addContact({ ...contact, id: uuid.v4() });
  };

  render() {
    return (
      <div>
        <h2>Add Contact</h2>
        <ContactForm submit={this.handleSubmit} />
      </div>
    );
  }
}

export default connect(
  null,
  { addContact }
)(AddContact);
