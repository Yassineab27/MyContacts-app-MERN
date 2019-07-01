import React, { Component } from "react";
import { connect } from "react-redux";
import ContactItem from "./ContactItem";

class Contacts extends Component {
  renderList = this.props.contacts.map(contact => (
    <ContactItem key={contact.id} contact={contact} />
  ));

  render() {
    console.log(this.props.contacts);
    return <div className="grid-2 mb-1">{this.renderList}</div>;
  }
}

const mapStateToProps = state => {
  return { contacts: state.contacts.contacts };
};

export default connect(mapStateToProps)(Contacts);
