const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  user: null,
  alert: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER_USER":
      return {
        ...state,
        alert: {
          msg: "You were registered successfully. Please login",
          type: "success"
        }
      };
    case "REMOVE_ALERT":
      return { ...state, alert: null };
    case "SET_ALERT":
      return { ...state, alert: action.payload };
    case "LOGIN_USER":
      return { user: action.payload, authenticated: true };
    case "LOGOUT_USER":
      return { user: null, authenticated: false };
    default:
      return state;
  }
};

export default authReducer;
