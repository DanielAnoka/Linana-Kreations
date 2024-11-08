import { useState, useEffect } from "react";
import { FiX } from "react-icons/fi";
import { socialLinks } from "../Data/Data";
import { navItems } from "../Data/Data";

const NavLink = ({ href, label }) => (
  <a href={href} className="text-gray-800 hover:text-orange-500">
    {label}
  </a>
);

const SocialLink = ({ href, icon, label }) => (
  <a
    href={href}
    className="text-gray-800 hover:text-orange-500"
    aria-label={label}
  >
    {icon}
  </a>
);

const Sidebar = ({ isOpen, toggle }) => (
  <div
    className={`fixed inset-y-0 left-0 bg-white w-64 z-50 flex flex-col shadow-lg transform transition-transform duration-300 ${
      isOpen ? "translate-x-0" : "-translate-x-full"
    }`}
  >
    {/* Logo and Close Icon */}
    <div className="relative flex items-center justify-between px-4 py-4">
      <a href="/" className="flex items-center font-font text-2xl text-black">
       <img src="assets/logo.PNG" alt="logo" className="w-[100px]" />
      </a>
      <button onClick={toggle} className="text-gray-800">
        <FiX size={24} />
      </button>
    </div>

    <div className="flex-grow">
      <nav className="flex flex-col space-y-4 px-6 py-8 text-lg">
        {navItems.map(({ href, label }) => (
          <NavLink key={href} href={href} label={label} />
        ))}
      </nav>
    </div>

    <div className="px-6 py-4 text-sm">
      <div className="flex items-center space-x-6 mt-4">
        {socialLinks.map(({ href, icon }) => (
          <SocialLink key={href} href={href} icon={icon} label={href} />
        ))}
      </div>
    </div>
  </div>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-main shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        {/* Left Menu (Desktop) */}
        <div className="hidden md:flex items-center space-x-6">
          <button
            onClick={toggleSidebar}
            className="text-gray-800 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isSidebarOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Logo */}
        <div className="flex-shrink-0 hidden md:block">
          <a href="/" className="text-2xl font-bold text-gray-800 font-viga">
            Liana-kreations
          </a>
        </div>

        {/* Right Menu (Desktop) */}
        <div className="hidden md:flex space-x-6">
          {/* Profile icon removed */}
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex w-full justify-between items-center">
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>

          {/* Mobile Logo (Centered) */}
          <div className="flex-grow text-center">
            <a href="/" className="text-2xl font-bold text-gray-800 font-viga">
              Liana-kreation
            </a>
          </div>
        </div>
      </div>

      {isOpen && (
        <Sidebar isOpen={isOpen} toggle={toggleMenu} logo="Liana-kreation" />
      )}

      {isSidebarOpen && (
        <Sidebar
          isOpen={isSidebarOpen}
          toggle={toggleSidebar}
          logo={
            <img src="assets/logo.PNG" alt="Logo" className="w-[170px] mr-4" />
          }
        />
      )}
    </nav>
  );
};

export default Header;
