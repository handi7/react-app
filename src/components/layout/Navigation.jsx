import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

export default function Navigation() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav>
      <span
        className="text-xl cursor-pointer"
        onClick={() => setShowMenu(!showMenu)}
      >
        <FontAwesomeIcon icon={faBars} />
      </span>

      {showMenu && (
        <div
          className="fixed bg-black-t-50 top-0 left-0 w-full h-full z-50"
          onClick={() => setShowMenu(!showMenu)}
        />
      )}

      {showMenu && (
        <div className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow p-3">
          Menu
        </div>
      )}
    </nav>
  );
}
