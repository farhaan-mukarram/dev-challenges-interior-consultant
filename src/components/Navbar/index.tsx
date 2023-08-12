import DesktopToolbar from "./DesktopToolbar";
import MobileToolbar from "./MobileNavMenu";

const Navbar = () => {
  const navbarLinks = [
    { text: "home", isActive: true },
    { text: "collection", isActive: false },
    { text: "about", isActive: false },
    { text: "contact", isActive: false },
  ];

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-3 py-4 mx-auto bg-primary max-w-7xl lg:px-20 sm:px-14">
      <div className="p-2 text-white uppercase border border-white font-crimson-pro font-extralight">
        This Interior
      </div>

      <DesktopToolbar navbarLinks={navbarLinks} />

      <MobileToolbar navbarLinks={navbarLinks} />
    </nav>
  );
};

export default Navbar;
