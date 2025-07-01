import React from "react";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const teamData = [
  {
    name: "Richard Warner",
    role: "Building Worker",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    name: "Emma Johnson",
    role: "Site Manager",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    name: "Richard Warner",
    role: "Building Worker",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    name: "Emma Johnson",
    role: "Site Manager",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
];

const Team = () => {
  return (
    <>
      <section className="team_section">
        <div className="container_wrapper">
          <div className="team_content_main">
            <div className="team_top">
              <div className="badge">Our Team</div>
              <h2>
                Meet Our <span>Experienced</span> Experts
              </h2>
              <p>
                Our team consists of highly skilled professionals who bring
                unmatched expertise and commitment to every project
              </p>
            </div>
            <div className="team_bottom">
              {teamData.map((member, index) => (
                <div className="team_card" key={index}>
                  <div className="team_card_image">
                    <img src={member.image} alt={member.name} />
                    <div className="team_social">
                      <Link to={member.social.facebook}>
                        <FaFacebookSquare />
                      </Link>
                      <Link to={member.social.twitter}>
                        <FaSquareXTwitter />
                      </Link>
                      <Link to={member.social.instagram}>
                        <FaInstagram />
                      </Link>
                    </div>
                  </div>
                  <div className="team_card_content">
                    <h5>{member.name}</h5>
                    <p>{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
