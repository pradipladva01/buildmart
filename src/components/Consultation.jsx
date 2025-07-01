import React from "react";
import { FlipButton } from "../components/FlipTextNavLink";

const Consultation = () => {
  return (
    <>
      <section className="consultation_section">
        <div className="container_wrapper">
          <div className="consultation_content_main">
            <div className="consultation_card">
              <div className="consultation_left">
                <h2>
                  Contact Us Today for a <br /> <span>Free Consultation</span>
                </h2>
                <p>
                  At Buildmart, we believe that every construction project is an
                  opportunity to create something exceptional.
                </p>
                <FlipButton
                  className="about_button"
                  frontText="Get Free Quote"
                  backText="Get Free Quote"
                  onClick={() => {}}
                />
              </div>
              <div className="consultation_right">
                <div className="cta_image">
                  <img
                    src="https://cdn.prod.website-files.com/673a3e776ccbf2bcc1e5706e/673c1be85bd296750527c1ee_cta-image.webp"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Consultation;
