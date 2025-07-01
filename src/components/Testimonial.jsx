import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import SliderQuote from "../resources/images/slider_quote.svg";

const testimonials = [
  {
    quote: (
      <>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A nesciunt
        maxime, pariatur dignissimos, inventore ad quam asperiores quibusdam
        similique necessitatibus exercitationem porro tenetur possimus facere
        eum reprehenderit consequuntur officia deserunt.
      </>
    ),
    name: "Esther Howard",
    title: "Founder, Navana",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
  },
  {
    quote: (
      <>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A nesciunt
        maxime, pariatur dignissimos, inventore ad quam asperiores quibusdam
        similique necessitatibus exercitationem porro tenetur possimus facere
        eum reprehenderit consequuntur officia deserunt.
      </>
    ),
    name: "Esther Howard",
    title: "Founder, Navana",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
  },
  {
    quote: (
      <>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A nesciunt
        maxime, pariatur dignissimos, inventore ad quam asperiores quibusdam
        similique necessitatibus exercitationem porro tenetur possimus facere
        eum reprehenderit consequuntur officia deserunt.
      </>
    ),
    name: "Esther Howard",
    title: "Founder, Navana",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
  },
  {
    quote: (
      <>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A nesciunt
        maxime, pariatur dignissimos, inventore ad quam asperiores quibusdam
        similique necessitatibus exercitationem porro tenetur possimus facere
        eum reprehenderit consequuntur officia deserunt.
      </>
    ),
    name: "Esther Howard",
    title: "Founder, Navana",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
  },
  {
    quote: (
      <>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A nesciunt
        maxime, pariatur dignissimos, inventore ad quam asperiores quibusdam
        similique necessitatibus exercitationem porro tenetur possimus facere
        eum reprehenderit consequuntur officia deserunt.
      </>
    ),
    name: "Esther Howard",
    title: "Founder, Navana",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
  },
];

const Testimonial = () => {
  return (
    <>
      <section className="testimonial_section">
        <div className="container_wrapper">
          <div className="testimonial_content_main">
            <div className="testimonial_top">
              <div className="badge">Testimonials</div>
              <h2>
                What Our Customers Say <span>About Us</span>
              </h2>
            </div>
            <div className="testimonial_bottom">
              <Swiper
                modules={[Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  640: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 4 },
                }}
              >
                {testimonials.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="testimonial_card">
                      <img
                        src={SliderQuote}
                        alt="Quote"
                        className="quote_img"
                      />
                      <p className="p_quote">{item.quote}</p>
                      <div className="client_profile">
                        <img src={item.image} alt={item.name} />
                        <div className="client_content">
                          <h6>{item.name}</h6>
                          <p>{item.title}</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonial
