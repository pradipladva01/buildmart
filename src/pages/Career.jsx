import React from "react";
import "../styles/Home.css";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar/Navbar";
import { FlipButton } from "../components/FlipTextNavLink";
import HowWeWork1 from "../resources/images/planning.png";
import HowWeWork2 from "../resources/images/developement.png";
import HowWeWork3 from "../resources/images/countruction.png";
import HowWeWork4 from "../resources/images/handover.png";
import Team from "../components/Team";
import Testimonial from "../components/Testimonial";
import Consultation from "../components/Consultation";
import Footer from "../components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import CareerData from "./Data/CareerData";

const howWeWorkData = [
  {
    image: HowWeWork1,
    title: "Competitive Salary With Bonus",
    description:
      "We believe in rewarding talent and hard work. We offer competitive salaries aligned with industry standards to",
  },
  {
    image: HowWeWork2,
    title: "Health & Wellness Programs",
    description:
      "Comprehensive health insurance policies include medical, dental, and vision coverage, as well as wellness programs.",
  },
  {
    image: HowWeWork3,
    title: "Collaborative Work Environment",
    description:
      "Teamwork is at the heart of everything we do. We foster a collaborative work environment where ideas are shared.",
  },
  {
    image: HowWeWork4,
    title: "Employee Safety & Wellbeing",
    description:
      "Safety and wellbeing of our employees are our top priorities. We maintain strict safety protocols on all project sites.",
  },
  // Add more items here if needed
];

const Career = () => {
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>Career | Buildmart</title>
      </Helmet>
      <Navbar />
      <section className="career_section">
        <div className="container_wrapper">
          <div className="career_content_main">
            <div className="career_content_top">
              <div className="top">
                <div className="line"></div>
                <h6>Apply</h6>
              </div>
              <h2>Come join us at Buildmart Construction</h2>
            </div>
            <div className="career_content_bottom">
              <div className="career_content_card_main">
                {CareerData.map((job) => (
                  <div key={job.id} className="career_content_card">
                    <h4>{job.title}</h4>
                    <div className="job_item_inner">
                      <h6>{job.type}</h6>
                      <h5>{job.salary}</h5>
                    </div>
                    <FlipButton
                      className="learn_button"
                      frontText="Learn More"
                      backText="Learn More"
                      onClick={() => {
                        navigate(`/jobs/${job.slug}`);
                      }}
                    />
                  </div>
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
              <div className="badge">Our Benefits</div>
              <h2>
                Building Careers with Care – Discover the
                <span>Benefits</span> of Working at <span>Buildmart</span>
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

export default Career;
