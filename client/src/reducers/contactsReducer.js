const initialState = {
  // contacts: [
  //   {
  //     id: "1",
  //     name: "Yassine",
  //     email: "yass@gmail.com",
  //     phone: "111-111-111",
  //     website: "yassine.com",
  //     type: "professional"
  //   },
  //   {
  //     id: "2",
  //     name: "Abdou",
  //     email: "ab@gmail.com",
  //     phone: "222-222-222",
  //     type: "personal",
  //     website: "abdou.fr"
  //   },
  //   {
  //     id: "3",
  //     name: "Tson",
  //     email: "tho@gmail.com",
  //     phone: "333-333-333",
  //     type: "professional",
  //     website: ""
  //   }
  // ],
  contacts: null,
  searchContact: "",
  alert: null
};

const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CONTACTS":
      return { ...state, contacts: action.payload };
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
    case "SEARCH_CONTACT":
      return {
        ...state,
        searchContact: action.payload
      };
    default:
      return state;
  }
};

export default contactsReducer;
