import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router";

import { FaXmark } from "react-icons/fa6";
import { CgMenuRight } from "react-icons/cg";
import { LuPhone } from "react-icons/lu";

import NavItems from "./NavItems";

export default function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  const navbarRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (navbarRef.current == null) return;

    const observer = new ResizeObserver((entries) => {
      const navbar = entries[0]?.target;
      if (navbar == null) return;
      setShowMobileMenu(false);
    });

    observer.observe(navbarRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <nav className="bg-white/5 px-6 py-3 mx-auto rounded-lg my-4 hidden sm:block">
        <NavItems />
      </nav>

      <div className="absolute top-6 right-6 sm:hidden">
        <div className="flex items-center gap-2">
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              [isActive ? "hidden" : "block"].join(" ")
            }
          >
            <div className="flex items-center justify-center bg-white/5 size-10 rounded-full">
              <LuPhone className="size-4 text-white/50" />
            </div>
          </NavLink>

          <button
            onClick={() => setShowMobileMenu(true)}
            className="p-2 rounded-md bg-white/5"
          >
            <CgMenuRight className="size-6 text-white/50" />
          </button>
        </div>
      </div>

      <nav
        ref={navbarRef}
        className={`bg-zinc-900 z-50 fixed  inset-0  flex items-center justify-center sm:hidden transform transition-transform duration-300 ease-in ${
          showMobileMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setShowMobileMenu(false)}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/5 sm:hidden"
        >
          <FaXmark className="size-4 text-white/50" />
        </button>

        <NavItems onClick={() => setShowMobileMenu(false)} />
      </nav>
    </>
  );
}
