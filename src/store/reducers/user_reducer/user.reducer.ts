import { IAction } from "../../../shared/types/redux.action";

const initialState = {
  isLoggedIn: false
};

const userReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default userReducer;
