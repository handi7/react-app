import React from "react";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="fixed w-full border-b shadow bg-white p-3 top-0 flex justify-between item-center">
      <span className="font-bold">AppName</span>
      <Navigation />
    </header>
  );
}
