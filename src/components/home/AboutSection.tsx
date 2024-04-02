import React from "react";

import { useQuery } from "@apollo/client";
import { GET_ABOUT } from "../../services/queries.ts";
import { Query } from "../../types/dbtypes.ts";
import Config from "../../config.json";

const AboutSection = () => {
  const { data } = useQuery<Query>(GET_ABOUT);

  return (
    <div className="container">
      <div className="restro-history">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-6">
            <div
              className="our_history wow fadeIn"
              data-wow-duration="3s"
              data-wow-delay=".3s"
            >
              <span
                className="wow fadeInDown"
                data-wow-duration="2s"
                data-wow-delay=".3s"
              >
                Nossa História
              </span>
              <h2
                className="foholic_title wow fadeInDown"
                data-wow-duration="1.2s"
                data-wow-delay=".2s"
              >
                {data?.abouts?.data[0].attributes?.Titulo1}
              </h2>
              <p className="foholic_subcontent">
                {data?.abouts?.data[0].attributes?.paragrafo1}
                <br></br>
                <br></br> {data?.abouts?.data[0].attributes?.paragrafo2}
              </p>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-6">
            <div className="resto-img text-end">
              {/* <div className="theme-btn">
                <div className="round-text">
                  <img
                    src={restaurantText}
                    className="img-fluid restaurant-text-img"
                    alt="restaurant-text"
                  />
                  <div className="foholic_letter">F</div>
                </div>
              </div> */}
              <img
                src={`${Config.uploadURL}${data?.abouts?.data[0].attributes?.img1_520x540?.data?.attributes?.hash}${data?.abouts?.data[0].attributes?.img1_520x540?.data?.attributes?.ext}`}
                alt="history img-1"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="food_tasting">
        <div className="row">
          <div className="col-12 col-md-5 col-lg-5">
            <div
              className="season_tast wow fadeInLeft"
              data-wow-duration="1s"
              data-wow-delay="1s"
            >
              <img
                src={`${Config.uploadURL}${data?.abouts?.data[0].attributes?.img2_410x390?.data?.attributes?.hash}${data?.abouts?.data[0].attributes?.img2_410x390?.data?.attributes?.ext}`}
                alt="history img-2"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-12 col-md-7 col-lg-7">
            <div
              className="tasting_content  wow fadeInRight"
              data-wow-duration="1s"
              data-wow-delay="0.8s"
            >
              <h3 className="foholic_title">
                {data?.abouts?.data[0].attributes?.titulo2}
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="resto_foods">
        <h3
          className="foholic_title text-center col-lg-8 m-auto wow fadeIn"
          data-wow-duration="3s"
          data-wow-delay=".4s"
        >
          {data?.abouts?.data[0].attributes?.titulo3}
        </h3>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4">
            <div
              className="fo-abo-last wow fadeInLeft"
              data-wow-duration="1s"
              data-wow-delay="0.6s"
            >
              <p className="foholic_subcontent">
                {data?.abouts?.data[0].attributes?.paragrafo3}
              </p>
              <div className="foholic_button">
                <a href="#menu" className="button-light">
                  Veja o Cardápio
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-8">
            <div className="food-differs">
              <img
                src={`${Config.uploadURL}${data?.abouts?.data[0].attributes?.img3_630x460?.data?.attributes?.hash}${data?.abouts?.data[0].attributes?.img3_630x460?.data?.attributes?.ext}`}
                alt="history img-3"
                className="img-fluid float-end"
              />
              <img
                src={`${Config.uploadURL}${data?.abouts?.data[0].attributes?.img4_300x300?.data?.attributes?.hash}${data?.abouts?.data[0].attributes?.img4_300x300?.data?.attributes?.ext}`}
                alt="history img-4"
                className="img-fluid top-img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
