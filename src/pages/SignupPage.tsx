import React from "react";
import AuthForm from "../components/auth/AuthForm/AuthForm";

const SignupPage: React.FC = () => {
  return (
    <div>
      <AuthForm editing={false} />
    </div>
  );
};

export default SignupPage;
