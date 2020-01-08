import React, { useCallback } from "react";
import moment from "moment";

import {
  EDIT_FIRST_NAME,
  EDIT_LAST_NAME,
  EDIT_PASSWORD,
  EDIT_EMAIL_ADDRESS,
  EDIT_BIRTHDAY
} from "./types/authform.types";

interface AuthFormInputProps {
  label: string;
  id: string;
  name: string;
  value: any;
  inputType?: string;
  callback: Function;
}

const AuthFormInput: React.FC<AuthFormInputProps> = ({
  label,
  id,
  name,
  value,
  inputType,
  callback
}) => {
  const handleChange = useCallback(
    (e: any) => {
      if (!e || (e && !e.target)) {
        return;
      }

      const { name, value } = e.target;

      let type: string = "";
      let payload: string | boolean = "";

      switch (name) {
        case "firstName":
          type = EDIT_FIRST_NAME;
          payload = value;
          break;
        case "lastName":
          type = EDIT_LAST_NAME;
          payload = value;
          break;
        case "password":
          type = EDIT_PASSWORD;
          payload = value;
          break;
        case "emailAddress":
          type = EDIT_EMAIL_ADDRESS;
          payload = value;
          break;
        case "birthday":
          type = EDIT_BIRTHDAY;
          payload = moment(value).format("YYYY-MM-DD");
          break;
        default:
          break;
      }

      callback({ type, payload });
    },
    [callback]
  );

  return (
    <>
      <label htmlFor={label}>{label}</label>
      <input
        type={inputType || "text"}
        id={id}
        name={name}
        value={value}
        onChange={handleChange}
        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
      />
    </>
  );
};

export default AuthFormInput;
