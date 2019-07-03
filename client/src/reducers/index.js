import { combineReducers } from "redux";
import contactsReducer from "./contactsReducer";
import authReducer from "./authReducer";

const reducer = combineReducers({
  contacts: contactsReducer,
  auth: authReducer
});

export default reducer;
