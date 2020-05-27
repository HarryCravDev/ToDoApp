import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-primary text-center text-white p-3">
      <h1 className="m-0">React: Todo List</h1>
      <Link style={linkStyle} to="/">
        Home
      </Link>{" "}
      |{" "}
      <Link style={linkStyle} to="/about">
        About
      </Link>
    </header>
  );
}

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
};
