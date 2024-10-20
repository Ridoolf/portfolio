import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar_container">
      <h1>
        <Link to={"/"}>LUCAS RIDOLFI</Link>
      </h1>
      <div
        className={`hamburger_menu ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul className={`navbar_list_container ${isMenuOpen ? "active" : ""}`}>
        <li>
          <Link to={"/"} onClick={closeMenu}>
            About Me
          </Link>
        </li>
        <li>
          <Link to={"/projects"} onClick={closeMenu}>
            Projects
          </Link>
        </li>
        <li>
          <Link to={"/skills"} onClick={closeMenu}>
            Skills
          </Link>
        </li>
        <li>
          <Link to={"/contact"} onClick={closeMenu}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};
