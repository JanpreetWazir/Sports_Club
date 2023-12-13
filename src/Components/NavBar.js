import React, { useState } from 'react';
import SvgImage from '../Assets/Rectangle 2.png';
import '../Style/Navbar.css';

function CustomNavbar({
  scrollToHome,
  scrollToAboutUs,
  scrollToGallery,
  scrollToEvent,
  scrollToMentor,
  scrollToOurTeam,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`custom-navbar ${isMenuOpen ? 'open' : ''}`}>
      <div className="custom-navbar-container">
        <a className="custom-navbar-brand" href="/">
          <img
            src={SvgImage}
            alt="Logo"
            width="35"
            height="38"
            className="custom-navbar-logo"
          />
          <span className="custom-navbar-logotext mx-2"> SPORTS CLUB</span>
        </a>
        <div className="custom-navbar-toggler" onClick={toggleMenu}>
          <div className={`custom-navbar-toggler-icon ${isMenuOpen ? 'open' : ''}`}></div>
        </div>
        <div className={`custom-navbar-links ${isMenuOpen ? 'open' : ''}`}>
          <a className="custom-navbar-link" href="/" onClick={closeMenu}>
            HOME
          </a>
          <a className="custom-navbar-link" href="#aboutus" onClick={scrollToAboutUs}>
            ABOUT US
          </a>
          <a className="custom-navbar-link" href="#event" onClick={scrollToEvent}>
            UPCOMING EVENTS
          </a>
          <a className="custom-navbar-link" href="#mentors" onClick={scrollToMentor}>
            MENTORS
          </a>
          <a className="custom-navbar-link" href="#ourteam" onClick={scrollToOurTeam}>
            BOARD
          </a>
          <a className="custom-navbar-link" href="#gallery" onClick={scrollToGallery}>
            VISUAL HUB
          </a>
        </div>
      </div>
    </nav>
  );
}

export default CustomNavbar;
