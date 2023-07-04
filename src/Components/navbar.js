import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import logo from "../assets/Logo.png";

const Navbar = () => {
  const handleLinkClick = () => {
    scroll.scrollToTop({
      smooth: true,
      duration: 500,
    });
  };

  return (
    <nav className="w-full flex items-center py-1 top-0 z-20 bg-ihsan-blue sticky">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2" onClick={handleLinkClick}>
          <img src={logo} alt="logo" className="w-14 h-14 object-contain" />
          <p className="text-white text-18 font-bold cursor-pointer hidden lg:flex">Ihsan Mahmood</p>
        </Link>
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="text-white flex items-center gap-2 hover:text-gray-300 cursor-pointer"
        >
          Home
        </Link>
        <Link
          to="skills"
          smooth={true}
          duration={500}
          className="text-white flex items-center gap-2 hover:text-gray-300 cursor-pointer"
        >
          Skills
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          className="text-white flex items-center gap-2 hover:text-gray-300 cursor-pointer"
        >
          Projects
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="text-white flex items-center gap-2 px-2 hover:text-gray-300 cursor-pointer"
        >
          Let's connect!
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;




