import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "swiper/css/free-mode";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_CHEFS } from "../../services/queries.ts";
import { Query } from "../../types/dbtypes.ts";
import Config from "../../config.json";

const TeamSection = ({ setChefDetail }) => {
  const { data } = useQuery<Query>(GET_CHEFS);

  return (
    <Swiper
      breakpoints={{
        767: { slidesPerView: 1, spaceBetween: 15 },
        768: { slidesPerView: 2, spaceBetween: 30 },
        1024: { slidesPerView: 3, spaceBetween: 30 },
      }}
      speed={900}
      freeMode
      spaceBetween={30}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      modules={[FreeMode, Autoplay]}
      className="mySwiper team_container"
    >
      {data?.chefs?.data?.map((chef, index) => (
        <SwiperSlide
          key={index}
          className="col-12 col-md-4 col-lg-4 swiper-slide"
        >
          <div className="carousel_imges_item hover-effect-img">
            <div className="hover-icons">
              <a
                href={chef.attributes?.facebook!}
                className="in-social slide-left"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a
                href={chef.attributes?.twitter!}
                className="in-social"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a
                href={chef.attributes?.instagram!}
                className="in-social slide-right"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
            <Link to="chef">
              <div className="carousel-img swipe_gallery_img">
                <img
                  src={`${Config.uploadURL}${chef.attributes?.img_410x410?.data?.attributes?.hash}${chef.attributes?.img_410x410?.data?.attributes?.ext}`}
                  alt={`chef-img-${index + 1}`}
                />
              </div>
              <div className="hover-effect the-team"></div>
              <a
                href="javascript;"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdropteam"
                onClick={() => setChefDetail(chef)}
              >
                <div className="team-box">
                  <span>{chef?.attributes?.nome}</span>
                  <p>{chef?.attributes?.cargo}</p>
                </div>
              </a>
            </Link>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TeamSection;
