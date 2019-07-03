import history from "../components/history";
import axios from "axios";

const backend_URL = "http://localhost:5000";

// CONTACTS
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

export const searchContact = search => {
  return { type: "SEARCH_CONTACT", payload: search };
};

// ALERTS
export const setAlert = (msg, type, timeout = 5000) => {
  return {
    type: "SET_ALERT",
    payload: { msg, type }
  };
};

export const removeAlert = () => {
  return {
    type: "REMOVE_ALERT"
  };
};

// USER
export const registerUser = user => {
  return async dispatch => {
    try {
      const response = await axios.post(`${backend_URL}/users/register`, user);
      dispatch({ type: "REGISTER_USER", payload: response.data });
    } catch (err) {
      dispatch({
        type: "SET_ALERT",
        payload: { msg: err.response.data.error, type: "danger" }
      });
    }
  };
};
