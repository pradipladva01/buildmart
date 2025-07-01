import React from "react";
import "../styles/Home.css";
import Navbar from "../components/Navbar/Navbar";
import { Helmet } from "react-helmet-async";
import WhyChooseImage from "../resources/images/choose_image.webp";
import { Link } from "react-router-dom";
import Team from "../components/Team";
import Testimonial from "../components/Testimonial";
import Consultation from "../components/Consultation";
import Footer from "../components/Footer/Footer";
import HowWeWork1 from "../resources/images/planning.png";
import HowWeWork2 from "../resources/images/developement.png";
import HowWeWork3 from "../resources/images/countruction.png";
import HowWeWork4 from "../resources/images/handover.png";

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

const serviceCards = [
  {
    id: 1,
    title: "Renovation & Remodeling",
    image: WhyChooseImage,
    link: "",
  },
  {
    id: 2,
    title: "Interior Design",
    image: WhyChooseImage,
    link: "",
  },
  {
    id: 3,
    title: "Landscape Architecture",
    image: WhyChooseImage,
    link: "",
  },
  {
    id: 4,
    title: "Commercial Fit-Outs",
    image: WhyChooseImage,
    link: "",
  },
  {
    id: 5,
    title: "Kitchen Renovations",
    image: WhyChooseImage,
    link: "",
  },
  {
    id: 6,
    title: "Bathroom Upgrades",
    image: WhyChooseImage,
    link: "",
  },
  {
    id: 7,
    title: "Home Extensions",
    image: WhyChooseImage,
    link: "",
  },
  {
    id: 8,
    title: "Custom Carpentry",
    image: WhyChooseImage,
    link: "",
  },
  {
    id: 9,
    title: "Flooring Solutions",
    image: WhyChooseImage,
    link: "",
  },
];

const Service = () => {
  return (
    <>
      <Helmet>
        <title>Service | Buildmart</title>
      </Helmet>
      <Navbar />
      <section className="services_section">
        <div className="container_wrapper">
          <div className="services_content_main">
            <div className="services_content_top">
              <div className="top">
                <div className="line"></div>
                <h6>What We Offer</h6>
              </div>
              <h2>Our Services</h2>
            </div>
            <div className="services_content_bottom">
              <div className="service_card_main">
                {serviceCards.map((card) => (
                  <Link key={card.id} className="service_card" to={card.link}>
                    <div className="service_img">
                      <img src={card.image} alt={card.title} />
                    </div>
                    <div className="service_details">
                      <h2>{card.title}</h2>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="blog-card-svg"
                      >
                        <path
                          d="M2.33938 14.5896C1.44846 11.2534 2.31164 7.54623 4.92893 4.92893C8.83418 1.02369 15.1658 1.02369 19.0711 4.92893C22.9763 8.83418 22.9763 15.1658 19.0711 19.0711C16.4538 21.6884 12.7466 22.5515 9.41045 21.6606M15.0001 15.0001V9.0001M15.0001 9.0001H9.00014M15.0001 9.0001L4.99995 19"
                          stroke="currentColor"
                          strokeWidth="1.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </Link>
                ))}
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

export default Service;
