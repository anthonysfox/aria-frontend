import React from "react";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

const HomePage: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Home Page</h1>
      <b onClick={() => dispatch(push("/signup"))}>Click Me</b>
    </div>
  );
};

export default HomePage;
