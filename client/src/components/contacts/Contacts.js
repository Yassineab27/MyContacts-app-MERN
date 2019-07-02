import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import ContactItem from "./ContactItem";
import SearchBar from "./SearchBar";

class Contacts extends Component {
  render() {
    const renderContacts = this.props.contacts.map(contact => (
      <ContactItem key={contact.id} contact={contact} />
    ));

    // console.log(this.props.contacts);
    return (
      <Fragment>
        <h2>Contacts</h2>
        <div className="underline" />
        <SearchBar />
        {this.props.contacts.length ? (
          <div className="grid-2 mb-1">{renderContacts}</div>
        ) : (
          <div className="text-center">
            <h2>No contacts found..</h2>
          </div>
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  const { searchContact, contacts } = state.contacts;
  return {
    contacts: contacts.filter(
      contact =>
        contact.name.toLowerCase().startsWith(searchContact) ||
        contact.phone.startsWith(searchContact)
    )
  };
};

export default connect(mapStateToProps)(Contacts);
