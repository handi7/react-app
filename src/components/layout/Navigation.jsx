import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTransition, animated } from "@react-spring/web";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navData } from "../../data/navData";

export default function Navigation() {
  const path = window.location.pathname;

  const [showMenu, setShowMenu] = useState(false);

  const slide = useTransition(showMenu, {
    from: { transform: "translateX(-100%)" },
    enter: { transform: "translateX(0%)" },
    leave: { transform: "translateX(-100%)" },
  });

  const fade = useTransition(showMenu, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <nav>
      <span
        className="text-xl cursor-pointer"
        onClick={() => setShowMenu(!showMenu)}
      >
        <FontAwesomeIcon icon={faBars} />
      </span>

      {fade(
        (style, show) =>
          show && (
            <animated.div
              style={style}
              className="fixed bg-black-t-50 top-0 left-0 w-full h-full z-50"
              onClick={() => setShowMenu(!showMenu)}
            />
          )
      )}

      {slide(
        (style, show) =>
          show && (
            <animated.div
              style={style}
              className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow p-3"
            >
              <div className="font-bold border-b py-3 px-2">Menu</div>
              <ul>
                {navData.map((menu, idx) => {
                  const selected = menu?.path === path;

                  return (
                    <li key={idx}>
                      <Link
                        className={`${
                          selected
                            ? "text-white bg-blue-500 rounded"
                            : "text-blue-500"
                        } block p-2 border-b`}
                        to={menu?.path}
                        onClick={() => setShowMenu(!showMenu)}
                      >
                        {menu?.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </animated.div>
          )
      )}
    </nav>
  );
}
