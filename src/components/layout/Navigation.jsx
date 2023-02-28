import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTransition, animated } from "@react-spring/web";
import React, { useState } from "react";

export default function Navigation() {
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
              <div className="font-bold border-b py-3">Menu</div>
              <ul>
                <li>Home</li>
              </ul>
            </animated.div>
          )
      )}
    </nav>
  );
}
