const initialState = {
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
          msg: "You were registered successfully. Please login!",
          type: "success"
        }
      };
    case "REMOVE_ALERT":
      return { ...state, alert: null };
    case "SET_ALERT":
      return { ...state, alert: action.payload };
    case "LOGIN_USER":
      return {
        user: action.payload,
        isAuthenticated: true,
        alert: {
          msg: "You were logged in successfully!",
          type: "success"
        }
      };
    case "SET_USER":
      return { ...state, user: action.payload, isAuthenticated: true };
    case "LOGOUT_USER":
      return {
        user: null,
        isAuthenticated: false,
        alert: { msg: "You were logged out successfully!", type: "success" }
      };
    default:
      return state;
  }
};

export default authReducer;
