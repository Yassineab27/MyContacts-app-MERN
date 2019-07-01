const initialState = {
  contacts: [
    {
      id: 1,
      name: "Yassine",
      email: "yass@gmail.com",
      phone: "111-111-111",
      type: "professional"
    },
    {
      id: 2,
      name: "Abdou",
      email: "ab@gmail.com",
      phone: "222-222-222",
      type: "personal"
    },
    {
      id: 3,
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
    case "GET_CONTACTS":
      return { ...state, contacts: action.payload };
    // case "ADD_CONTACT":
    // case "UPDATE_CONTACT":
    // case "DELETE_CONTACT":
    // case "FILTER_CONTACTS":
    default:
      return state;
  }
};

export default contactsReducer;
