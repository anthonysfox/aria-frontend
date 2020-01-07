import React from "react";

import Nav from "./nav";

interface PageWrapperProps {}

const Page: React.FC<PageWrapperProps> = ({ children }) => {
  return (
    <main>
      <Nav />
      {children}
    </main>
  );
};

export default Page;
