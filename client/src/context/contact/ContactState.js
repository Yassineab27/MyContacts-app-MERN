import React, { useReducer, createContext } from "react";
import uuid from "uuid";
import ContactReducer from "./ContactReducer";

const ContactContext = createContext();

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "Yassine",
        email: "yass@hotmail.com",
        phone: "111-111-111",
        type: "personal"
      },
      {
        id: 2,
        name: "Abdou",
        email: "abd@hotmail.com",
        phone: "222-111-333",
        type: "personal"
      },
      {
        id: 3,
        name: "tso",
        email: "tso@hotmail.com",
        phone: "444-222-111",
        type: "personal"
      }
    ]
  };

  const [state, dispatch] = useReducer(ContactReducer, initialState);

  return (
    <ContactContext.Provider value={{ contacts: state.contacts }}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
