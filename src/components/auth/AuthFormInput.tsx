import React, { useCallback } from "react";

interface AuthFormInputProps {
  label: string;
  id: string;
  value: any;
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
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </>
  );
};

export default AuthFormInput;
