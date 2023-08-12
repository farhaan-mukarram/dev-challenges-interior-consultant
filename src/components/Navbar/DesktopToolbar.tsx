import { type FunctionComponent } from "react";

import { type NavbarLink } from "./types";

interface Props {
  navbarLinks: NavbarLink[];
}

const DesktopToolbar: FunctionComponent<Props> = ({ navbarLinks }) => {
  return (
    <ul className="items-center justify-between hidden text-lg text-white lg:flex basis-1/2">
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
  );
};

export default DesktopToolbar;
