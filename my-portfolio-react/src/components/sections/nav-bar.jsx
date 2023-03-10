/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import appData from "../../data/app.json";
import {
  handleDropdown,
  handleMobileDropdown,
  handleSearch,
} from "../../common/navbar";
import scrollToTop from "../../common/scrollToTo";

const Navbar = ({ lr, nr, theme }) => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <nav
      ref={nr}
      className={`navbar navbar-expand-lg change ${
        theme === "themeL" ? "light" : ""
      }`}
    >
      <div className="container">
        <Link href="/">
          <a className="logo mb-2" onClick={handleClick}>
            {theme ? (
              theme === "themeL" ? (
                <img ref={lr} src={`${appData.darkLogo}`} alt="logo" width="50px" height="25px"/>
              ) : (
                <img ref={lr} src={`${appData.lightLogo}`} alt="logo" width="50px" height="25px"/>
              )
            ) : (
              <img ref={lr} src={`${appData.lightLogo}`} alt="logo" width="50px" height="25px"/>
            )}
          </a>
        </Link>

        <button
          className="navbar-toggler mb-2"
          type="button"
          onClick={handleMobileDropdown}
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link href="#works">
                <a className="nav-link" onClick={handleMobileDropdown}>Works</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#contact">
                <a className="nav-link" onClick={handleMobileDropdown}>Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
