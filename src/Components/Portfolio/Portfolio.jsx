import React from "react";
import portfolioCss from "../Portfolio/Portfolio.module.css";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

function Portfolio() {
  return (
    <>
      <section className={`${portfolioCss.portfolioWrapper} section`} id="portfolio">
      <h2>My Portfolio</h2>
        <p className={portfolioCss.pera}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus
          explicabo saepe facilis consequuntur adipisci consectetur aliquid.
        </p>
        <Swiper
          className={portfolioCss.swiper}
          spaceBetween={30}
          slidesPerView={3}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          loop={true}
          autoplay={{
            delay:2500,
          }}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <div className={`${portfolioCss.Card} ${portfolioCss.Card1}`}>
              <div className={portfolioCss.content}>
                <h2>Linkedin Post</h2>
                <h3>Linkedin</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`${portfolioCss.Card} ${portfolioCss.Card2}`}>
              <div className={portfolioCss.content}>
                <h2>Instagram Post</h2>
                <h3>Instagram</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`${portfolioCss.Card} ${portfolioCss.Card3}`}>
              <div className={portfolioCss.content}>
                <h2>Behance Post</h2>
                <h3>Behance</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`${portfolioCss.Card} ${portfolioCss.Card4}`}>
              <div className={portfolioCss.content}>
                <h2>Social Post</h2>
                <h3>Social</h3>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
}

export default Portfolio;
