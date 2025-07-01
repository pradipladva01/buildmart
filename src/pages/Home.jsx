import React from "react";
import "../styles/Home.css";
import Navbar from "../components/Navbar/Navbar";
import HeroSection from "../components/HeroSection";
import { MdConstruction } from "react-icons/md";
import { FlipButton } from "../components/FlipTextNavLink";
import AboutImage from "../resources/images/about_image.webp";
import ServiceIcon1 from "../resources/images/service_image_1.svg";
import ServiceIcon2 from "../resources/images/service_image_2.svg";
import ServiceIcon3 from "../resources/images/service_image_3.svg";
import ServiceIcon4 from "../resources/images/service_image_4.svg";
import WhyChooseImage from "../resources/images/choose_image.webp";
import CountUp from "react-countup";
import Team from "../components/Team";
import Blogs from "../components/Blogs";
import Consultation from "../components/Consultation";
import Footer from "../components/Footer/Footer";
import Testimonial from "../components/Testimonial";

const servicedata = [
  {
    id: 1,
    img: ServiceIcon1,
    title: "Residential Construction",
    description:
      "Lorem ipsum dolor sit amet consectetur. Dictum rhoncus id sed ullamcorper amet aliquam.......",
  },
  {
    id: 2,
    img: ServiceIcon2,
    title: "Structrual Engineering",
    description:
      "Lorem ipsum dolor sit amet consectetur. Dictum rhoncus id sed ullamcorper amet aliquam.......",
  },
  {
    id: 3,
    img: ServiceIcon3,
    title: "Commercial Construction",
    description:
      "Lorem ipsum dolor sit amet consectetur. Dictum rhoncus id sed ullamcorper amet aliquam.......",
  },
  {
    id: 4,
    img: ServiceIcon4,
    title: "Home Interior Design",
    description:
      "Lorem ipsum dolor sit amet consectetur. Dictum rhoncus id sed ullamcorper amet aliquam.......",
  },
];
const whyChooseData = [
  {
    id: 1,
    img: ServiceIcon1,
    title: "Accurate Measurements",
    description: "Lorem ipsum dolor sit amet consectetur. Dictum rhoncus",
  },
  {
    id: 2,
    img: ServiceIcon2,
    title: "Beat Sustainability",
    description: "Lorem ipsum dolor sit amet consectetur. Dictum rhoncus",
  },
  {
    id: 3,
    img: ServiceIcon3,
    title: "Residential Structures",
    description: "Lorem ipsum dolor sit amet consectetur. Dictum rhoncus",
  },
  {
    id: 4,
    img: ServiceIcon4,
    title: "Tackle Environment",
    description: "Lorem ipsum dolor sit amet consectetur. Dictum rhoncus",
  },
];

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <section className="about_section">
        <div className="container_wrapper">
          <div className="about_content_main">
            <div className="about_content_left">
              <div class="badge">About Us</div>
              <h3>
                Shaping the <span>Future</span> with Expertise and Integrity
              </h3>
              <p>
                At Buildmart, our mission goes beyond construction – we believe
                in creating environments that uplift, inspire, and transform
                lives.Our approach blends traditional craftsmanship with modern
                innovation, ensuring durability and elegance in every build.With
                a passion for quality craftsmanship and a commitment to client
                satisfaction, we have been proudly serving New York (USA) and
                surrounding areas for 13-Years of Experties.
              </p>
              <div className="about_items">
                <div className="about_item">
                  <MdConstruction />
                  Residential Construction
                </div>
                <div className="about_item">
                  <MdConstruction />
                  Residential Construction
                </div>
                <div className="about_item">
                  <MdConstruction />
                  Residential Construction
                </div>
              </div>
              <FlipButton
                className="about_button"
                frontText="More about us"
                backText="More about us"
                onClick={() => {
                  // navigate("/contact-us");
                }}
              />
            </div>
            <div className="about_content_right">
              <img src={AboutImage} alt={AboutImage} />
            </div>
          </div>
        </div>
      </section>
      <section className="service_section">
        <div className="container_wrapper">
          <div className="service_content_main">
            <div className="service_content_top">
              <div class="badge">Our Services</div>
              <h3>
                <span>Shaping Spaces</span> with Expertise, Innovation, and Care
              </h3>
              <FlipButton
                className="service_button"
                frontText="Explore Our Service"
                backText="Explore Our Service"
                onClick={() => {
                  // navigate("/contact-us");
                }}
              />
            </div>
            <div className="service_content_bottom">
              {servicedata.map((service, index) => (
                <div className="service_card" key={index}>
                  <img src={service.img} alt={service.img} />
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
                  <FlipButton
                    className="service_button"
                    frontText="Learn More"
                    backText="Learn More"
                    onClick={() => {
                      // navigate("/contact-us");
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="why_choose_section">
        <div className="container_wrapper">
          <div className="why_choose_content_main_top">
            <div class="badge">Why Choose Us</div>
            <h3>
              <span>Elevating Standards</span> in Construction
            </h3>
          </div>
          <div className="why_choose_content_main">
            <div className="why_choose_left">
              <div className="why_choose_main">
                {whyChooseData.map((service, index) => (
                  <div className="why_choose_card" key={index}>
                    <img src={service.img} alt={service.img} />
                    <h4>{service.title}</h4>
                    <p>{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="why_choose_right">
              <img src={WhyChooseImage} alt={WhyChooseImage} />
            </div>
          </div>
        </div>
      </section>
      {/* <section className="statistic_section">
        <div className="container_wrapper">
          <div className="statistic_content_main">
            <div className="statistic_card">
              <h2>
                <CountUp end={123} duration={2} />+
              </h2>
              <h6>Completed Projects</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur. Mattis orci purus
                egestas dis enim non feugiat bibendum tristique.
              </p>
            </div>
            <div className="statistic_card">
              <h2>
                <CountUp end={123} duration={2} />+
              </h2>
              <h6>Completed Projects</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur. Mattis orci purus
                egestas dis enim non feugiat bibendum tristique.
              </p>
            </div>
            <div className="statistic_card">
              <h2>
                <CountUp end={123} duration={2} />+
              </h2>
              <h6>Completed Projects</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur. Mattis orci purus
                egestas dis enim non feugiat bibendum tristique.
              </p>
            </div>
          </div>
        </div>
      </section> */}
      <Testimonial />
      <Team />
      <Blogs />
      <Consultation />
      <Footer />
    </>
  );
};

export default Home;
