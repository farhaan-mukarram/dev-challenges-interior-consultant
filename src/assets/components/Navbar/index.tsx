const Navbar = () => {
  const navbarLinks = [
    { text: "home", isActive: true },
    { text: "collection", isActive: false },
    { text: "about", isActive: false },
    { text: "contact", isActive: false },
  ];

  return (
    <nav className="flex items-center justify-between px-20 py-12">
      <div className="p-2 text-white uppercase border border-white font-crimson-pro font-extralight">
        This Interior
      </div>

      <ul className="flex items-center justify-between text-lg text-white basis-1/3">
        {navbarLinks.map(({ text, isActive }) => (
          <li
            key={text}
            className={`transition ease-in capitalize pb-2 border-b-2 cursor-pointer relative ${
              isActive
                ? "font-bold border-white"
                : "font-medium border-black hover:border-white"
            }`}
          >
            <a href="#">{text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
