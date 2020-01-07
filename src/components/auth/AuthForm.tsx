import React, { useState } from "react";

import AuthFormInput from "./AuthFormInput";

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
  birthday
}) => {
  const [fName, setFName] = useState<string>("");
  const [lName, setLName] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [bDay, setBDay] = useState<string>("");

  return (
    <div>
      <form>
        <AuthFormInput
          id="fullName"
          label="First Name"
          value={editing ? firstName : fName}
          callback={setFName}
        />
        <AuthFormInput
          id="lastName"
          label="Last Name"
          value={editing ? lastName : lName}
          callback={setLName}
        />
        <AuthFormInput
          id="password"
          label="Password"
          value={editing ? password : pass}
          inputType="password"
          callback={setPass}
        />
        <AuthFormInput
          id="email"
          label="Email"
          value={editing ? emailAddress : email}
          inputType="email"
          callback={setEmail}
        />
        <AuthFormInput
          id="birthday"
          label="Birthday"
          value={editing ? birthday : bDay}
          inputType="date"
          callback={setBDay}
        />
      </form>
    </div>
  );
};

export default AuthForm;
