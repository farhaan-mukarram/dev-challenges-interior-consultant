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
    <nav className="sticky top-0 flex items-center justify-between py-4">
      <div className="p-2 text-white uppercase border border-white font-crimson-pro font-extralight">
        This Interior
      </div>

      <DesktopToolbar navbarLinks={navbarLinks} />

      <MobileToolbar navbarLinks={navbarLinks} />
    </nav>
  );
};

export default Navbar;
