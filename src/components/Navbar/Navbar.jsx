import React, { useState } from "react";
import logo from "../../resources/images/Logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { FlipButton, FlipNavLink } from "../FlipTextNavLink";

const Navbar = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const navigate = useNavigate();
  const handleMenuClick = () => {
    setIsMenuActive((prevState) => !prevState);
  };

  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Me" },
    { path: "/service", label: "Service" },
    { path: "/career", label: "Career" },
    { path: "/blogs", label: "Blog" },
  ];
  return (
    <>
      <nav className={`header_area ${isMenuActive ? "active" : ""} `}>
        <div className="container_wrapper">
          <div className="header_bg d-flex align-items-center justify-content-between">
            <NavLink to="/" className="logo">
              <img
                src={logo}
                alt="logo"
                loading="lazy"
                className="desktop_logo"
              />
            </NavLink>
            <nav className={`navbar ${isMenuActive ? "active" : ""}`}>
              <ul className="menu">
                {menuItems.map((item, index) => (
                  <li key={index} className="menu-item">
                    <FlipNavLink
                      to={item.path}
                      frontText={item.label}
                      backText={item.label}
                    />
                  </li>
                ))}
              </ul>
              <FlipButton
                frontText="Book a Call"
                backText="Book a Call"
                onClick={() => {
                  navigate("/contact-us");
                }}
              />
            </nav>
            <div className="navbar_responsive">
              <div
                className={`show_menu ${isMenuActive ? "active" : ""}`}
                onClick={handleMenuClick}
              >
                <span></span>
                <span></span>
              </div>
              <div className="log_infos">
                <FlipButton
                  frontText="Book a Call"
                  backText="Book a Call"
                  onClick={() => {
                    navigate("/contact-us");
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
