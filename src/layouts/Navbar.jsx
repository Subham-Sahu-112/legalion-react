import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../public/Images/logo.png";
import "./Navbar.css";

export default function Navbar() {
  const [showHamburg, setShowHamburg] = useState(window.innerWidth < 768);
  const [hamburgeClick, setHambClick] = useState(false);
  const [showNavbar, setShowNavar] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowHamburg(window.innerWidth < 768);
      // Reset mobile menu state when switching to desktop
      if (window.innerWidth >= 768) {
        setHambClick(false);
        setShowNavar(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleHambClick = () => {
    setHambClick(!hamburgeClick);
    setShowNavar(!showNavbar);
  };

  const handleLinkClick = () => {
    // Close mobile menu when a link is clicked
    if (showHamburg) {
      setHambClick(false);
      setShowNavar(false);
    }
  };

  return (
    <nav className="navbar" id="navbar">
      <div className="nav-container">
        <Link to="/#home" className="nav-logo">
          <img src={Logo} alt="Legalion" className="logo-img" />
        </Link>

        {/* Always show hamburger on mobile, always show menu on desktop */}
        <div
          className={`hamburger ${hamburgeClick ? "active" : ""}`}
          id="hamburger"
          onClick={handleHambClick}
          style={{ display: showHamburg ? 'flex' : 'none' }}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <ul
          className={`nav-menu ${showHamburg ? (showNavbar ? "active" : "") : ""}`}
          id="nav-menu"
        >
            <li className="nav-item">
              <Link to="/#home" className="nav-link" onClick={handleLinkClick}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-link" onClick={handleLinkClick}>
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#about" className="nav-link" onClick={handleLinkClick}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#team" className="nav-link" onClick={handleLinkClick}>
                Team
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#contact" className="nav-link" onClick={handleLinkClick}>
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#contact" className="nav-link cta-btn" onClick={handleLinkClick}>
                Get Started
              </Link>
            </li>
          </ul>
      </div>
    </nav>
  );
}
