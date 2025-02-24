import { useEffect, useRef, useState } from "react";

import { FaXmark } from "react-icons/fa6";
import { CgMenuRight } from "react-icons/cg";

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

      <button
        onClick={() => setShowMobileMenu(true)}
        className="p-2 rounded-md bg-white/5 absolute top-6 right-6 sm:hidden"
      >
        <CgMenuRight className="size-6 text-white/50" />
      </button>

      <nav
        ref={navbarRef}
        className={`bg-zinc-900  fixed  inset-0  flex items-center justify-center sm:hidden transform transition-transform duration-300 ease-in ${
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
