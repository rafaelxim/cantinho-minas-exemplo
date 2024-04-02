import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { Query } from "../../types/dbtypes";
import "swiper/css/free-mode";
import shapeImg1 from "../../assets/images/svg/shape-img1.svg";
import shapeImg2 from "../../assets/images/svg/shape-img2.svg";
import { useQuery } from "@apollo/client";
import Config from "../../config.json";

import { GET_SLIDERS } from "../../services/queries.ts";

const SliderSection = () => {
  const { data } = useQuery<Query>(GET_SLIDERS);

  return (
    <Swiper
      centeredSlides
      speed={1500}
      simulateTouch
      // clickable="true"
      parallax
      effect="slide"
      watchSlidesProgress
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      className="mySwiper"
      modules={[Autoplay, Pagination, Navigation]}
    >
      {data?.sliders?.data.map((slide, index) => (
        <SwiperSlide key={index} className="swiper-slide">
          <div className="slide-inner">
            <div
              className="slide-bg-image"
              style={{
                backgroundImage: `url(${
                  slide.attributes?.type === "video"
                    ? ""
                    : `${Config.uploadURL}${slide.attributes?.media1540x940.data?.attributes?.hash}${slide.attributes?.media1540x940.data?.attributes?.ext}`
                })`,
              }}
            >
              {slide.attributes?.type === "video" && (
                <video playsInline autoPlay muted loop>
                  <source
                    src={`${Config.uploadURL}${slide.attributes?.media1540x940.data?.attributes?.hash}${slide.attributes?.media1540x940.data?.attributes?.ext}`}
                    type="video/mp4"
                  />
                </video>
              )}
            </div>
            <div className="parallax-overlay"></div>
            <div className="slider_shape_img1">
              <img src={shapeImg1} alt="shape-img1 img" />
            </div>
            <div className="slider_shape_img2">
              <img src={shapeImg2} alt="shape-img2 img" />
            </div>
            <div className="container">
              <div
                className="slide_inn_content text-center wow fadeIn"
                data-wow-duration="3s"
                data-wow-delay=".4s"
              >
                <span>{slide.attributes?.subTitle}</span>
                <div className="slide_title col-12 col-lg-10 col-md-12 m-auto">
                  {slide.attributes?.mainTitle}
                </div>
                <div className="foholic_button">
                  <a href="#reservation" className="button-light">
                    Reserve Agora
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
      {/* <div class="swiper-pagination"></div> */}
    </Swiper>
  );
};

export default SliderSection;
