import React, { useCallback, useReducer, useEffect } from "react";

import { useSignupUserMutation } from "../../../lib/generated/GeneratedGraphQLComponents";
import AuthFormInput from "./AuthFormInput";
import { authFormReducer, initialState } from "./reducers/authform.reducer";
import { EDIT_FULLNAME, TOGGLE_EDITING } from "./types/authform.types";

interface AuthFormProps {
  editing: boolean;
  fullName?: string;
  emailAddress?: string;
  firstName?: string;
  lastName?: string;
  password?: string;
  birthday?: string;
}

const AuthForm: React.FC<AuthFormProps> = ({
  editing,
  password,
  emailAddress,
  firstName,
  lastName,
  birthday,
  fullName
}) => {
  const [state, dispatch] = useReducer(authFormReducer, initialState);

  const [signup, { data, loading, error }] = useSignupUserMutation({
    variables: {
      fullName: fullName || state.fullName,
      emailAddress: state.emailAddress,
      password: state.password,
      birthday: state.birthday
    }
  });

  useEffect(() => {
    dispatch({
      type: TOGGLE_EDITING,
      payload: editing ? editing : false
    });
  }, [editing]);

  const handleChange = useCallback(
    ({ type, payload }) => {
      const fullName = `${state.firstName} ${state.lastName}`;

      dispatch({
        type,
        payload
      });

      dispatch({
        type: EDIT_FULLNAME,
        payload: fullName
      });
    },
    [state]
  );

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          signup();
        }}
      >
        <AuthFormInput
          id='firstName'
          name='firstName'
          label='First Name'
          value={editing ? firstName : state.firstName}
          callback={handleChange}
        />
        <AuthFormInput
          id='lastName'
          name='lastName'
          label='Last Name'
          value={editing ? lastName : state.lastName}
          callback={handleChange}
        />
        <AuthFormInput
          id='password'
          name='password'
          label='Password'
          value={editing ? password : state.password}
          inputType='password'
          callback={handleChange}
        />
        <AuthFormInput
          id='emailAddress'
          name='emailAddress'
          label='Email'
          value={editing ? emailAddress : state.emailAddress}
          inputType='email'
          callback={handleChange}
        />
        <AuthFormInput
          id='birthday'
          name='birthday'
          label='Birthday'
          value={editing ? birthday : state.birthday}
          inputType='date'
          callback={handleChange}
        />

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default AuthForm;
