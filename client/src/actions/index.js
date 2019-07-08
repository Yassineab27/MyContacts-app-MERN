import axios from "axios";
import history from "../components/history";
import setAuthorizationToken from "../utils/setAuthorizationToken";

// CONTACTS
export const addContact = contact => {
  return async dispatch => {
    try {
      const response = await axios.post("/contacts", contact);
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
      const response = await axios.get("/contacts");

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
  return async dispatch => {
    try {
      await axios.delete(`/contacts/${id}`);
      dispatch({ type: "DELETE_CONTACT", payload: id });
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

export const editContact = (id, newContact) => {
  return async dispatch => {
    try {
      const response = await axios.patch(`/contacts/${id}`, newContact);
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
      await axios.post("/users/register", user);
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
      const response = await axios.post("/users/login", user);
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

export const updateUser = user => {
  return async dispatch => {
    try {
      const response = await axios.patch("/users/me/edit", user);
      const newUser = {
        ...JSON.parse(localStorage.getItem("user")),
        ...response.data
      };
      localStorage.setItem("user", JSON.stringify(newUser));
      dispatch({ type: "UPDATE_USER", payload: response.data });
      history.push("/users/me");
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

export const deleteUser = () => {
  return async dispatch => {
    try {
      const response = await axios.delete("/users/me");
      localStorage.clear();
      dispatch({ type: "DELETE_USER", payload: response.data });
      history.push("/users/register");
    } catch (err) {
      if (err.response.status === 401) {
        dispatch({
          type: "SET_ALERT",
          payload: {
            msg: err.response.data.error,
            type: "danger"
          }
        });
        history.push("/users/login");
      } else {
        dispatch({
          type: "SET_ALERT",
          payload: {
            msg: err.response.data.error,
            type: "danger"
          }
        });
      }
    }
  };
};
