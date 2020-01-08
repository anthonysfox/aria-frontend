import moment from "moment";

import { IAction } from "../../../../shared/types/redux/redux.action";
import {
  EDIT_FULLNAME,
  EDIT_BIRTHDAY,
  TOGGLE_EDITING,
  EDIT_FIRST_NAME,
  EDIT_LAST_NAME,
  EDIT_EMAIL_ADDRESS,
  EDIT_PASSWORD
} from "../types/authform.types";

export const initialState = {
  editing: false,
  firstName: "",
  lastName: "",
  fullName: "",
  emailAddress: "",
  birthday: moment(new Date()).format("YYYY-MM-DD"),
  password: ""
};

export const authFormReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case TOGGLE_EDITING:
      return {
        ...state,
        editing: action.payload
      };
    case EDIT_FIRST_NAME:
      return {
        ...state,
        firstName: action.payload
      };
    case EDIT_LAST_NAME:
      return {
        ...state,
        lastName: action.payload
      };
    case EDIT_FULLNAME:
      return {
        ...state,
        fullName: action.payload
      };
    case EDIT_EMAIL_ADDRESS:
      return {
        ...state,
        emailAddress: action.payload
      };
    case EDIT_BIRTHDAY:
      return {
        ...state,
        birthday: action.payload
      };
    case EDIT_PASSWORD:
      return {
        ...state,
        password: action.payload
      };

    default:
      return state;
  }
};
