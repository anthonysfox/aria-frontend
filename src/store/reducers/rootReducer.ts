import { combineReducers } from "redux";

import userReducer from "./user_reducer/user.reducer";

const rootReducer = combineReducers({
  user: userReducer
});

export default rootReducer;
