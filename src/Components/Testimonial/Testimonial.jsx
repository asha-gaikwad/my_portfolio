import React from "react";
import testimonialCss from "../Testimonial/Testimonial.module.css";
import user1 from "../../assets/1 (1).jpg";
import user2 from "../../assets/2 (1).jpg";
import user3 from "../../assets/3.jpg";
import quote from "../../assets/quote.svg";
import "swiper/css";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay } from "swiper/modules";


function Testimonial() {
  return (
    <>
      <section className={`${testimonialCss.TestimonialWrapper} section`} id="testimonial">
        <h2>What Our Clients Says</h2>
        <p className={testimonialCss.pera}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus
          explicabo saepe facilis consequuntur adipisci consectetur aliquid.
        </p>
        <Swiper className={testimonialCss.swiper}
           spaceBetween={30}
           slidesPerView={3}
           breakpoints={{
             0: {
               slidesPerView: 1,
             },
             768: {
               slidesPerView: 2,
             },
             1200: {
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
            <div className={testimonialCss.Testimonial}>
              <div className={testimonialCss.profile}>
                <img src={user1} alt="" />
                <h3>
                  Nairobi Doe <span>Graphic Designer</span>
                </h3>
                <img src={quote} alt="" className={testimonialCss.quote} />
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ducimus, provident distinctio.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={testimonialCss.Testimonial}>
              <div className={testimonialCss.profile}>
                <img src={user2} alt="" />
                <h3>
                  Mitsuba <span>Marketer</span>
                </h3>
                <img src={quote} alt="" className={testimonialCss.quote} />
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ducimus, provident distinctio.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={testimonialCss.Testimonial}>
              <div className={testimonialCss.profile}>
                <img src={user3} alt="" />
                <h3>
                  Kimonashi Parker<span>Sales</span>
                </h3>
                <img src={quote} alt="" className={testimonialCss.quote} />
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ducimus, provident distinctio.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={testimonialCss.Testimonial}>
              <div className={testimonialCss.profile}>
                <img src={user2} alt="" />
                <h3>
                  Akshda <span>Developer</span>
                </h3>
                <img src={quote} alt="" className={testimonialCss.quote} />
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ducimus, provident distinctio.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
}

export default Testimonial;
