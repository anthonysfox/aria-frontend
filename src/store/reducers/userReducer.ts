import { IAction } from "../../shared/types/redux/redux.action";
import { REGISTER_USER } from "../types/user.types";

const initialState = {
  isLoggedIn: false,
  user: {}
};

const userReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload
      };

    default:
      return state;
  }
};

export default userReducer;
