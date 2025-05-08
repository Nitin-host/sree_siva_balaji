import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import "../styles/Header.scss";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMenus = () => {
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
      <div className="header__container">
        <Link to="/" className="header__logo" onClick={() => navigate("/")}>
          YourLogo
        </Link>

        <button
          className="header__mobile-toggle"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <FiX size={24} color="#fff" />
          ) : (
            <FiMenu size={24} color="#fff" />
          )}
        </button>

        <nav className={`header__menu ${isMobileMenuOpen ? "active" : ""}`}>
          {isMobileMenuOpen && (
            <button
              className="header__mobile-close"
              onClick={closeMenus}
              aria-label="Close menu"
            >
              <FiX />
            </button>
          )}

          <div
            className={`header__link ${isActive("/") ? "active" : ""}`}
            onClick={() => {
              closeMenus();
              navigate("/");
            }}
          >
            Home
          </div>

          <div
            className="header__dropdown"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <div
              className={`header__dropdown-toggle ${
                isActive("/commercial") || isActive("/residential")
                  ? "active"
                  : ""
              }`}
              onClick={toggleDropdown}
            >
              Projects
            </div>
            {isDropdownOpen && (
              <ul className="header__dropdown-menu">
                <li>
                  <div
                    className="header__dropdown-link"
                    onClick={() => {
                      closeMenus();
                      navigate("/commercial");
                    }}
                  >
                    Commercial
                  </div>
                </li>
                <li>
                  <div
                    className="header__dropdown-link"
                    onClick={() => {
                      closeMenus();
                      navigate("/residential");
                    }}
                  >
                    Residential
                  </div>
                </li>
              </ul>
            )}
          </div>

          <div
            className={`header__link ${isActive("/about") ? "active" : ""}`}
            onClick={() => {
              closeMenus();
              navigate("/about");
            }}
          >
            About
          </div>

          <div
            className={`header__link ${isActive("/contact") ? "active" : ""}`}
            onClick={() => {
              closeMenus();
              navigate("/contact");
            }}
          >
            Contact
          </div>
        </nav>
      </div>
    </header>
  );
}
