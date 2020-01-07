import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import userReducer from "./user_reducer/user.reducer";
import history from "../history/browser.history";

const rootReducer = combineReducers({
  router: connectRouter(history),
  user: userReducer
});

export default rootReducer;
