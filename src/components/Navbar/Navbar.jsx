import React, { useEffect, useState } from "react";
import "./navbar.css";
import logo from "../../assets/images/logos/burger-logo.svg";
import { RiCloseLargeLine } from "react-icons/ri";
import { RiAppsFill } from "react-icons/ri";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [openMenu, setOpenMenu] = useState(false);
  const handleToggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  // Ferme le menu lorsqu'un lien est cliqué
  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${scrolled ? "window-scrolled" : ""}`}>
      <nav className="container nav__container">
        <a href="#" className="nav__logo">
          <div>
            <img src={logo} className="nav__logo-img" alt="nav__logo-img" />
          </div>
          <span>Burger</span>
        </a>
        <div className={`nav__menu ${openMenu ? "active" : ""}`} id="nav-menu">
          <ul className="nav__list">
            <li>
              <a 
                href="#home" 
                className={`nav__link ${activeLink === "home" ? "active-link" : ""}`} 
                onClick={() => setActiveLink("home")}>
                Home
              </a>
            </li>
            <li>
              <a 
                href="#recipe" 
                className={`nav__link ${activeLink === "recipe" ? "active-link" : ""}`}
                onClick={() => setActiveLink("recipe")}>
                Recipe
              </a>
            </li>
            <li>
              <a 
                href="#popular" 
                className={`nav__link ${activeLink === "popular" ? "active-link" : ""}`}
                onClick={() => setActiveLink("popular")}
                >
                Popular
              </a>
            </li>
            <li>
              <a 
                href="#delivery" 
                className={`nav__link ${activeLink === "delivery" ? "active-link" : ""}`}
                onClick={() => setActiveLink("delivery")}
                >
                Delivery
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className={`nav__link ${activeLink === "contact" ? "active-link" : ""}`}
                onClick={() => setActiveLink("contact")}
                >
                Contact
              </a>
            </li>
          </ul>

          <div className="nav__close" id="nav-close" onClick={handleCloseMenu}>
            <RiCloseLargeLine />
          </div>
        </div>

        <div className="nav__toggle" id="nav-toggle" onClick={handleToggleMenu}>
          <RiAppsFill />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
