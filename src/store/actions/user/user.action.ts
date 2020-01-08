import { User } from "../../../shared/types/user/user";
import { REGISTER_USER } from "../../types/user.types";

export const registerUserAction = (
  authToken: string,
  user: Partial<User> = {}
) => {
  return async (dispatch: Function, getState: Function) => {
    const userVals = Object.keys(user).length;

    if (!authToken || !userVals) {
      return;
    }

    dispatch({
      type: REGISTER_USER,
      payload: {
        user,
        authToken
      }
    });
  };
};
