import React from "react";
import { Link } from "react-router-dom";

interface ILink {
  href: string;
  label: string;
}

const links = [
  { href: "/auth/signup", label: "Sign Up" },
  { href: "/auth/login", label: "Login" }
];

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">
          <a>Home</a>
        </Link>
      </li>
      {links.map(({ href, label }) => (
        <li key={href}>
          <Link to={href}>
            <a>{label}</a>
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Nav;
