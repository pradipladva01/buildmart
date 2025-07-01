import React from "react";
import HeroImage from "../resources/images/hero_image.webp";
import "../styles/Home.css";
import { FlipButton } from "./FlipTextNavLink";

const HeroSection = () => {
  return (
    <>
      <section className="hero_section">
        <div className="container_wrapper">
          <div className="hero_container">
            <div className="hero_content_main">
              <h1>Strong Foundations for Tomorrow’s Landmarks</h1>
              <p>
                With a commitment to delivering high-quality solutions, our
                construction and consultancy services are tailored to meet your
                needs and exceed expectations.
              </p>
              <div className="button_main">
                <FlipButton
                  className="hero_button_1"
                  frontText="Learn More"
                  backText="Learn More"
                  onClick={() => {
                    // navigate("/contact-us");
                  }}
                />
              </div>
            </div>
          </div>
          <div className="hero_img">
            <img src={HeroImage} alt={HeroImage} />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
