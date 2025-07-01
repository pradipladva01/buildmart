import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar/Navbar";
import BlogPosts from "./Data/BlogData";
import { Link } from "react-router-dom";
import Testimonial from '../components/Testimonial';
import Team from '../components/Team';
import Consultation from '../components/Consultation';
import Footer from '../components/Footer/Footer';

const Blogs = () => {
  return (
    <>
      <Helmet>
        <title>Blogs | Buildmart</title>
      </Helmet>
      <Navbar />
      <section className="blogs_section">
        <div className="container_wrapper">
          <div className="blogs_content_main">
            <div className="blogs_content_top">
              <div className="top">
                <div className="line"></div>
                <h6>Latest News</h6>
              </div>
              <h2>Stay Informed with Our Latest Blogs</h2>
            </div>
            <div className="blogs_content_bottom">
              <div className="blogs_card_main">
                {BlogPosts.map((blog, index) => (
                  <Link
                    to={`/blog-details/${blog.slug}`}
                    className="blog_card"
                    key={index}
                  >
                    <div className="blogs_image">
                      <img src={blog.image} alt={blog.title} />
                    </div>
                    <div className="blogs_content">
                      <div className="blogs_title">
                        <span>{blog.date}</span>
                        <h5>{blog.title}</h5>
                      </div>
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
      <Team />
      <Testimonial />
      <Consultation />
      <Footer />
    </>
  );
};

export default Blogs;
