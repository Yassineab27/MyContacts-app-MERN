import axios from "axios";
import history from "../components/history";
import setAuthorizationToken from "../utils/setAuthorizationToken";

const backend_URL = "http://localhost:5000";

// CONTACTS
export const addContact = contact => {
  return async dispatch => {
    try {
      const response = await axios.post(`${backend_URL}/contacts`, contact);
      dispatch({ type: "ADD_CONTACT", payload: response.data });
      history.push("/contacts");
    } catch (err) {
      if (err.response.status === 401) {
        dispatch({
          type: "SET_ALERT",
          payload: { msg: err.response.data.error, type: "danger" }
        });
        history.push("/users/login");
      } else {
        dispatch({
          type: "SET_ALERT",
          payload: { msg: err.response.data.error, type: "danger" }
        });
      }
    }
  };
};

export const getContacts = () => {
  return async dispatch => {
    try {
      const response = await axios.get(`${backend_URL}/contacts`);

      dispatch({ type: "GET_CONTACTS", payload: response.data });
    } catch (err) {
      if (err.response.status === 401) {
        dispatch({
          type: "SET_ALERT",
          payload: { msg: err.response.data.error, type: "danger" }
        });
        history.push("/users/login");
      } else {
        dispatch({
          type: "SET_ALERT",
          payload: { msg: err.response.data.error, type: "danger" }
        });
      }
    }
  };
};

export const deleteContact = id => {
  return { type: "DELETE_CONTACT", payload: id };
};

export const editContact = (id, newContact) => {
  return async dispatch => {
    try {
      const response = await axios.patch(
        `${backend_URL}/contacts/${id}`,
        newContact
      );
      dispatch({ type: "EDIT_CONTACT", payload: response.data });
      history.push("/contacts");
    } catch (err) {
      if (err.response.status === 401) {
        dispatch({
          type: "SET_ALERT",
          payload: { msg: err.response.data.error, type: "danger" }
        });
        history.push("/users/login");
      } else {
        dispatch({
          type: "SET_ALERT",
          payload: { msg: err.response.data.error, type: "danger" }
        });
      }
    }
  };
};

export const searchContact = search => {
  return { type: "SEARCH_CONTACT", payload: search };
};

// ALERTS
export const setAlert = (msg, type) => {
  return async dispatch => {
    dispatch({
      type: "SET_ALERT",
      payload: { msg, type }
    });
  };
};

export const removeAlert = () => {
  return { type: "REMOVE_ALERT" };
};

// USER
export const registerUser = user => {
  return async dispatch => {
    try {
      await axios.post(`${backend_URL}/users/register`, user);
      dispatch({ type: "REGISTER_USER" });
      history.push("/users/login");
    } catch (err) {
      dispatch({
        type: "SET_ALERT",
        payload: { msg: err.response.data.error, type: "danger" }
      });
    }
  };
};

export const loginUser = user => {
  return async dispatch => {
    try {
      const response = await axios.post(`${backend_URL}/users/login`, user);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      setAuthorizationToken(response.data.token);
      dispatch({ type: "LOGIN_USER", payload: response.data.user });
      history.push("/contacts");
    } catch (err) {
      dispatch({
        type: "SET_ALERT",
        payload: { msg: err.response.data.error, type: "danger" }
      });
    }
  };
};

export const setUser = user => {
  return {
    type: "SET_USER",
    payload: user
  };
};

export const logoutUser = () => {
  localStorage.clear();
  history.push("/users/login");
  return {
    type: "LOGOUT_USER"
  };
};
