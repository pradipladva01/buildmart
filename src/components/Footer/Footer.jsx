import React from "react";
import Logo from "../../resources/images/Logo_White.png";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FlipButton } from "../../components/FlipTextNavLink";
import { FaLocationDot } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";
import { IoCall } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="footer_section">
      <div className="container_wrap">
        <div className="footer_content_wrap">
          <div className="footer_grid">
            <div className="footer_content">
              <Link to="">
                <img src={Logo} alt={Logo} />
              </Link>
              <p>
                Building a sustainable future with quality craftsmanship and
                innovative construction solutions.
              </p>
              <form className="footer_form">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your email address"
                />
                <FlipButton
                  className="submit_button"
                  frontText="Submit"
                  backText="Submit"
                  onClick={() => {}}
                />
              </form>
            </div>
            <div className="footer_link">
              <h6>QUICK LINKS</h6>
              <ul>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="">Services</Link>
                </li>
                <li>
                  <Link to="">Career</Link>
                </li>
                <li>
                  <Link to="">Projects</Link>
                </li>
              </ul>
            </div>
            <div className="footer_link">
              <h6>FOLLOW US</h6>
              <ul>
                <li>
                  <Link to="">Facebook</Link>
                </li>
                <li>
                  <Link to="">Linkedin</Link>
                </li>
                <li>
                  <Link to="">Instagram</Link>
                </li>
                <li>
                  <Link to="">Twitter</Link>
                </li>
              </ul>
            </div>
            <div className="footer_link contact_us">
              <h6>CONTACT US</h6>
              <ul>
                <li>
                  <FaLocationDot />
                  <Link to="">2715 Ash Dr. San Jose, South Dakota 83475</Link>
                </li>
                <li>
                  <MdMarkEmailUnread />
                  <Link to="">hello.buildmar@gmail.com</Link>
                </li>
                <li>
                  <IoCall />
                  <Link to="">+(528) 456-7592</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer_bottom">
            <span>© {new Date().getFullYear()} All rights reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
