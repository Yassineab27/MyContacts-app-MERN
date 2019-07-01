import React, { Component } from "react";
import { connect } from "react-redux";
import ContactItem from "./ContactItem";

class Contacts extends Component {
  render() {
    const renderContacts = this.props.contacts.map(contact => (
      <ContactItem key={contact.id} contact={contact} />
    ));

    console.log(this.props.contacts);
    return <div className="grid-2 mb-1">{renderContacts}</div>;
  }
}

const mapStateToProps = state => {
  return { contacts: state.contacts.contacts };
};

export default connect(mapStateToProps)(Contacts);
