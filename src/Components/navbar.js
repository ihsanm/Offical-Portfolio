import React, { useState } from "react";
import { Link } from "react-router-dom";
import { animateScroll as scroll, scroller } from "react-scroll";
import logo from "../assets/Logo.png";

const Navbar = () => {
  const [active, setActive] = useState("");

  const handleSetActive = () => {
    setActive("");
    scroll.scrollToTop();
  };

  const handleScrollToSection = (section) => {
    setActive(section);
    scroller.scrollTo(section, {
      duration: 500,
      smooth: "easeInOutQuart",
      offset: -50, // Adjust the offset based on your layout
    });
  };

  return (
    <nav className="w-full flex items-center py-1 top-0 z-20 bg-ihsan-blue sticky">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/home"
          className="flex items-center gap-2"
          onClick={handleSetActive}
        >
          <img src={logo} alt="logo" className="w-14 h-14 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer hidden lg:flex">
            Ihsan Mahmood
          </p>
        </Link>
        <Link
          to="/home"
          className={`nav-link ${active === "home" ? "active" : ""}`}
          onClick={() => handleScrollToSection("home")}
        >
          <p className="text-white flex items-center gap-2">Home</p>
        </Link>
        <Link
          to="/skills"
          className={`nav-link ${active === "skills" ? "active" : ""}`}
          onClick={() => handleScrollToSection("skills")}
        >
          <p className="text-white flex items-center gap-2">Skills</p>
        </Link>
        <Link
          to="/projects"
          className={`nav-link ${active === "projects" ? "active" : ""}`}
          onClick={() => handleScrollToSection("projects")}
        >
          <p className="text-white flex items-center gap-2">Projects</p>
        </Link>
        <Link
          to="/contact"
          className={`nav-link ${active === "contact" ? "active" : ""}`}
          onClick={() => handleScrollToSection("contact")}
        >
          <p className="text-white flex items-center gap-2 px-2">Let's Connect!</p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

