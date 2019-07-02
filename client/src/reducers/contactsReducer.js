const initialState = {
  contacts: [
    {
      id: "1",
      name: "Yassine",
      email: "yass@gmail.com",
      phone: "111-111-111",
      type: "professional"
    },
    {
      id: "2",
      name: "Abdou",
      email: "ab@gmail.com",
      phone: "222-222-222",
      type: "personal"
    },
    {
      id: "3",
      name: "Tson",
      email: "tho@gmail.com",
      phone: "333-333-333",
      type: "professional"
    }
  ],
  contactErrors: null
};

const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "EDIT_CONTACT":
      return {
        ...state,
        contacts: state.contacts.map(contact => {
          if (contact.id === action.payload.id) {
            return action.payload.newContact;
          } else {
            return contact;
          }
        })
      };
    case "ADD_CONTACT":
      return { ...state, contacts: [...state.contacts, action.payload] };
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(c => c.id !== action.payload)
      };
    // case "UPDATE_CONTACT":
    // case "FILTER_CONTACTS":
    default:
      return state;
  }
};

export default contactsReducer;
