import { type FunctionComponent, useState, useEffect } from "react";

import hamburgerMenu from "../../assets/hamburgerMenu.svg";
import crossIcon from "../../assets/crossIcon.svg";

import { type NavbarLink } from "./types";

interface Props {
  navbarLinks: NavbarLink[];
}

const MobileNavMenu: FunctionComponent<Props> = ({ navbarLinks }) => {
  const [isMobileNavMenuOpen, setIsMobileNavMenuOpen] = useState(false);

  useEffect(() => {
    const body = document.querySelector("body") as HTMLBodyElement;

    if (isMobileNavMenuOpen) body.style.overflow = "hidden";
    else body.style.overflow = "";
  }, [isMobileNavMenuOpen]);

  return (
    <>
      <img
        src={isMobileNavMenuOpen ? crossIcon : hamburgerMenu}
        alt={
          isMobileNavMenuOpen
            ? "close-hamburger-menu-icon"
            : "open-mobile-hamburger-menu-icon"
        }
        className="z-50 block w-10 h-10 cursor-pointer lg:hidden"
        onClick={() => setIsMobileNavMenuOpen((prevOpen) => !prevOpen)}
      />

      <ul
        className={`fixed top-0 right-0 flex flex-col items-center text-lg text-white bg-[#181719] h-screen justify-center z-40 space-y-6 transition-all ease-in-out duration-300 overflow-hidden ${
          isMobileNavMenuOpen ? "w-full" : "w-0"
        }`}
      >
        {navbarLinks.map(({ text, isActive }) => (
          <li
            key={text}
            className={`transition ease-in capitalize pb-2 border-b-2 cursor-pointer relative ${
              isActive
                ? "font-bold border-white"
                : "font-medium border-[#181719] hover:border-white"
            }`}
          >
            <a href="#">{text}</a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MobileNavMenu;
