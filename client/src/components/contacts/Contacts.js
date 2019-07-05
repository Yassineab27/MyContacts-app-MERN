import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getContacts } from "../../actions";

import ContactItem from "./ContactItem";
import SearchBar from "./SearchBar";
import Spinner from "../layout/Spinner";
import("../../index.css");

class Contacts extends Component {
  componentDidMount() {
    this.props.getContacts();
  }

  render() {
    if (!this.props.contacts) {
      return <Spinner />;
    }
    return (
      <Fragment>
        <h2>Contacts</h2>
        <div className="underline" />
        <SearchBar />
        {this.props.contacts.length ? (
          <div className="grid-2 mb-1">
            {this.props.contacts.map(contact => (
              <ContactItem key={contact._id} contact={contact} />
            ))}
          </div>
        ) : (
          <div className="text-center">
            <h2>No contacts found, please create one!</h2>
          </div>
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  const { searchContact, contacts } = state.contacts;
  if (!contacts) {
    return {};
  }
  return {
    contacts: contacts.filter(
      contact =>
        contact.name.toLowerCase().startsWith(searchContact) ||
        contact.name.startsWith(searchContact) ||
        contact.phone.startsWith(searchContact)
    )
  };
};

export default connect(
  mapStateToProps,
  { getContacts }
)(Contacts);
