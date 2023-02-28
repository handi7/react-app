import React from "react";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="fixed w-full border-b shadow bg-white p-3 top-0 flex justify-between item-center">
      <Link to="/">
        <span className="font-bold">Mini App</span>
      </Link>

      <Navigation />
    </header>
  );
}
