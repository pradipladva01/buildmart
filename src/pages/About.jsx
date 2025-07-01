import React from "react";
import "../styles/Home.css";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar/Navbar";
import RoundArrow from "../resources/images/round_arrow.svg";
import HowWeWork1 from "../resources/images/planning.png";
import HowWeWork2 from "../resources/images/developement.png";
import HowWeWork3 from "../resources/images/countruction.png";
import HowWeWork4 from "../resources/images/handover.png";
import Team from "../components/Team";
import Testimonial from "../components/Testimonial";
import Consultation from "../components/Consultation";
import Footer from "../components/Footer/Footer";

const howWeWorkData = [
  {
    image: HowWeWork1,
    title: "Planning",
    description:
      "At Buildmart, our planning process is the foundation of every successful project. We begin by listening closely to our clients, understanding their vision, goals, and requirements.",
  },
  {
    image: HowWeWork2,
    title: "Development",
    description:
      "At Buildmart, our planning process is the foundation of every successful project. We begin by listening closely to our clients, understanding their vision, goals, and requirements.",
  },
  {
    image: HowWeWork3,
    title: "Construction",
    description:
      "At Buildmart, our planning process is the foundation of every successful project. We begin by listening closely to our clients, understanding their vision, goals, and requirements.",
  },
  {
    image: HowWeWork4,
    title: "Handover",
    description:
      "At Buildmart, our planning process is the foundation of every successful project. We begin by listening closely to our clients, understanding their vision, goals, and requirements.",
  },
  // Add more items here if needed
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About | Buildmart</title>
      </Helmet>
      <Navbar />
      <section className="about_us_section">
        <div className="container_wrapper">
          <div className="about_us_content_top">
            <div className="top">
              <div className="line"></div>
              <h6>Our Story</h6>
            </div>
            <h2>
              Our goal is to exceed the <span>client expectations</span> through
              meticulous planning, execution, and quality assurance.
            </h2>
          </div>
          <div className="about_us_content_main">
            <div className="about_us_left">
              <div className="about_us_left_grid">
                <div className="image">
                  <img
                    src="https://cdn.prod.website-files.com/673a3e776ccbf2bcc1e5706e/674141cbaec64307f6b0e6ca_about-image-1.webp"
                    alt=""
                  />
                </div>
                <div className="number">
                  <div className="number_right">SINCE</div>
                  <div className="number_left">2024</div>
                </div>
              </div>
              <div className="about_us_right_grid">
                <img
                  src="https://cdn.prod.website-files.com/673a3e776ccbf2bcc1e5706e/674141cb1dbc1071eb01f8c5_about-image-2.webp"
                  alt=""
                />
              </div>
            </div>
            <div className="about_us_right">
              <div className="about_us_right_top">
                <h4>
                  Our <span>Vision</span>
                </h4>
                <p>
                  Where we bring visions to life with quality and unflinching
                  dedication. Our mission is to be the leading construction
                  company known for turning innovative ideas into spectacular
                  reality.
                </p>
              </div>
              <div className="about_us_right_bottom">
                <div className="about_item">
                  <img src={RoundArrow} alt={RoundArrow} />
                  <p>Promoting eco-friendly development and expansion</p>
                </div>
                <div className="about_item">
                  <img src={RoundArrow} alt={RoundArrow} />
                  <p>Promoting eco-friendly development and expansion</p>
                </div>
                <div className="about_item">
                  <img src={RoundArrow} alt={RoundArrow} />
                  <p>Promoting eco-friendly development and expansion</p>
                </div>
                <div className="about_item">
                  <img src={RoundArrow} alt={RoundArrow} />
                  <p>Promoting eco-friendly development and expansion</p>
                </div>
              </div>
            </div>
          </div>
          <div className="about_us_content_main bottom">
            <div className="about_us_right">
              <div className="about_us_right_top">
                <h4>
                  Our <span>Mission</span>
                </h4>
                <p>
                  Where we bring visions to life with quality and unflinching
                  dedication. Our mission is to be the leading construction
                  company known for turning innovative ideas into spectacular
                  reality.
                </p>
              </div>
              <div className="about_us_right_bottom">
                <div className="about_item">
                  <img src={RoundArrow} alt={RoundArrow} />
                  <p>Promoting eco-friendly development and expansion</p>
                </div>
                <div className="about_item">
                  <img src={RoundArrow} alt={RoundArrow} />
                  <p>Promoting eco-friendly development and expansion</p>
                </div>
                <div className="about_item">
                  <img src={RoundArrow} alt={RoundArrow} />
                  <p>Promoting eco-friendly development and expansion</p>
                </div>
                <div className="about_item">
                  <img src={RoundArrow} alt={RoundArrow} />
                  <p>Promoting eco-friendly development and expansion</p>
                </div>
              </div>
            </div>
            <div className="about_us_left">
              <div className="about_us_left_grid">
                <div className="image">
                  <img
                    src="https://cdn.prod.website-files.com/673a3e776ccbf2bcc1e5706e/674141cb007a2b11e7b99dba_about-image-3.webp"
                    alt=""
                  />
                </div>
                <div className="number">
                  <div className="number_right">30k+</div>
                  <div className="number_left">Happy Clients</div>
                </div>
              </div>
              <div className="about_us_right_grid">
                <img
                  src="https://cdn.prod.website-files.com/673a3e776ccbf2bcc1e5706e/674141cccd37f981a4459ab0_about-image-4.webp"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="howwework_section">
        <div className="container_wrapper">
          <div className="howwework_content_main">
            <div className="howwework_top">
              <div className="badge">How We Work?</div>
              <h2>
                Built on <span>Precision</span>, Driven by{" "}
                <span>Excellence</span>
              </h2>
            </div>
            <div className="howwework_bottom">
              {howWeWorkData.map((item, index) => (
                <div className="howwework_card" key={index}>
                  <img src={item.image} alt={item.title} />
                  <h6>{item.title}</h6>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Team />
      <Testimonial />
      <Consultation />
      <Footer />
    </>
  );
};

export default About;
