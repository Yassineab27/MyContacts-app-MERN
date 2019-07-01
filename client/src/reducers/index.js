import { combineReducers } from "redux";
import contactsReducer from "./contactsReducer";

const reducer = combineReducers({
  contacts: contactsReducer,
  test: () => "test"
});

export default reducer;
