import React, { Component } from "react";
import ContactForm from "./ContactForm";

import { connect } from "react-redux";
import { editContact } from "../../actions";

class EditContact extends Component {
  handleUpdate = contact => {
    this.props.editContact(this.props.match.params.id, {
      ...contact,
      id: this.props.contact.id
    });
  };
  render() {
    console.log(this.props.contact);
    return (
      <div>
        <h2>Edit Contact</h2>
        <ContactForm
          contact={this.props.contact}
          onSubmit={this.handleUpdate}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    contact: state.contacts.contacts.find(
      contact => contact.id === ownProps.match.params.id
    )
  };
};

export default connect(
  mapStateToProps,
  { editContact }
)(EditContact);
