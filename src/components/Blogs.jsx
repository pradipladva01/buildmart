import React from "react";
import { Link } from "react-router-dom";
import BlogPosts from "../pages/Data/BlogData";

const Blogs = () => {
  return (
    <>
      <section className="blogs_section">
        <div className="container_wrapper">
          <div className="blogs_content_main">
            <div className="blogs_top">
              <div className="badge">Latest News</div>
              <h2>
                Stay Informed with <span>Our Latest Blogs</span>
              </h2>
              <p>
                Discover Construction Trends: Uncover Insights and Innovations
                in Our Latest Blog.
              </p>
            </div>
            <div className="blogs_bottom">
              {BlogPosts.map((blog, index) => (
                <Link to={blog.link} className="blog_card" key={index}>
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
      </section>
    </>
  );
};

export default Blogs;
