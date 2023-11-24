import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isPanelVisible, setIsPanelVisible] = useState(false);
  const [isRtl, setIsRtl] = useState(false);
  const togglePanel = () => {
    setIsPanelVisible(!isPanelVisible);
  };

  useEffect(() => {
    const language = navigator.language;
    setIsRtl(language.includes("ar") || language.includes("he"));
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg ${
        isRtl ? "navbar-rtl" : "navbar-ltr"
      } navbar-dark bg-dark`}
    >
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src="/logo.png"
            alt="Climate Change Logo"
            id="logo"
            width={100}
            height={100}
          />
        </Link>
        <Link className="navbar-brand" to="/">
          <h1>GreeNGO</h1>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={togglePanel}
          aria-controls="navbarNav"
          aria-expanded={isPanelVisible}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isPanelVisible ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/emissions">
                CO2 Emissionen
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
