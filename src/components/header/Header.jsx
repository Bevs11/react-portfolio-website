import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import "./header.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.png";

const Menu = () => {
  return (
    <>
      <p>
        <a href="#home">Home</a>
      </p>
      <p>
        <a href="#about">About Me</a>
      </p>
      <p>
        <a href="#projects">Projects</a>
      </p>
      <p>
        <a href="#cta">Contact Me</a>
      </p>
    </>
  );
};

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="header__container">
      <div className="header__logo-container">
        <div className="gradient__text header__logo">BM</div>
      </div>
      <div className="header__navbar-container">
        <Menu />
      </div>
      <div className="header__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="header__navbar-menu_container scale-up-center">
            <div className="header__navbar-menu_container-links">
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
