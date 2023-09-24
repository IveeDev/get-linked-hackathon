import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/getlinked.svg";

import "./NavBar.scss";
import Button from "../button/Button";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/register");
  };
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Function to close the mobile menu when a link is clicked
  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Add or remove class from body when menuOpen changes
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }

    // Clean up the class when the component unmounts
    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [menuOpen]);

  /* Mobile Menu Icon */

  return (
    <div className="header">
      <nav className="nav">
        <Link to="/">
          <img src={logo} className="nav__logo" alt="getlinked" />
        </Link>

        <div className={`nav__link ${menuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <Link to="/" className="link" onClick={closeMenu}>
                Timeline
              </Link>
            </li>

            <li>
              <Link to="/" className="link" onClick={closeMenu}>
                Overview
              </Link>
            </li>

            <li>
              <Link to="/" className="link" onClick={closeMenu}>
                FAQs
              </Link>
            </li>

            <li>
              <Link to="/contact" className="link" onClick={closeMenu}>
                Contact
              </Link>
            </li>

            <Button text="Register" onClick={handleClick} />
          </ul>
        </div>
        <div
          className={`nav__toggle ${menuOpen && "open"}`}
          onClick={toggleMenu}
        >
          <div className="bar"></div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
