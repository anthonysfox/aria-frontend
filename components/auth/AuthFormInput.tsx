import React, { useCallback } from "react";

interface AuthFormInputProps {
  label: string;
  id: string;
  value: string;
  inputType?: string;
  callback: Function;
}

const AuthFormInput: React.FC<AuthFormInputProps> = ({
  label,
  id,
  value,
  inputType,
  callback
}) => {
  const handleChange = useCallback(e => {
    const {
      target: { value }
    } = e;

    callback(value);
  }, []);

  return (
    <>
      <label htmlFor={label}>{label}</label>
      <input
        type={inputType || "text"}
        id={id}
        value={value}
        onChange={handleChange}
      />
    </>
  );
};

export default AuthFormInput;
