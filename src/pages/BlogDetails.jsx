import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar/Navbar";
import { useParams } from "react-router-dom";
import BlogPosts from "./Data/BlogData";
import Team from "../components/Team";
import Testimonial from "../components/Testimonial";
import Consultation from "../components/Consultation";
import Footer from "../components/Footer/Footer";

const BlogDetails = () => {
  const { slug } = useParams();
  const blog = BlogPosts.find((item) => item.slug === slug);
  return (
    <>
      <Helmet>
        <title>Blogs | Buildmart</title>
      </Helmet>
      <Navbar />
      <section className="blogs_details_section">
        <div className="container_wrapper">
          <div className="blogs_details_content_main">
            <div className="blogs_details_content_top">
              <div className="top">
                <div className="line"></div>
                <h6>Latest News</h6>
              </div>
              <h2>{blog?.title}</h2>
            </div>
            <div className="blogs_details_content_bottom">
              <div className="blog_image">
                <img src={blog?.image} alt="" />
              </div>
              <div className="blog_main_content">
                {blog.content.map((block, index) => {
                  if (block.type === "image") {
                    return (
                      <div className="blog_image" key={index}>
                        <img src={block.src} alt="" />
                      </div>
                    );
                  } else if (block.type === "paragraph") {
                    return <p key={index}>{block.text}</p>;
                  } else if (block.type === "heading") {
                    return <h2 key={index}>{block.text}</h2>;
                  } else if (block.type === "list") {
                    return (
                      <ul key={index}>
                        {block.items.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    );
                  } else {
                    return null;
                  }
                })}
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

export default BlogDetails;
