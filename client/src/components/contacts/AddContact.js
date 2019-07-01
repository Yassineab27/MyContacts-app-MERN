import React, { Component } from "react";
import ContactForm from "./ContactForm";

class AddContact extends Component {
  handleSubmit = contact => {
    console.log(contact);
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

export default AddContact;
