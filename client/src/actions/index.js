import history from "../components/history";

export const addContact = contact => {
  history.push("/contacts");
  return { type: "ADD_CONTACT", payload: contact };
};

export const deleteContact = id => {
  return { type: "DELETE_CONTACT", payload: id };
};

export const editContact = (id, newContact) => {
  history.push("/contacts");
  return { type: "EDIT_CONTACT", payload: { id, newContact } };
};
