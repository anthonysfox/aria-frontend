import React from "react";
import { NextPage } from "next";

import AuthForm from "../../components/auth/AuthForm";

const SignUpPage: NextPage = () => {
  return (
    <div>
      <h1>Sign Up Page</h1>
      <AuthForm editing={false} />
    </div>
  );
};

export default SignUpPage;
