import React from "react";
import message from "../assets/images/footer/message.png";
import backgroundShape1 from "../assets/images/svg/background-shape1.svg";
import backgroundShape2 from "../assets/images/svg/background-shape2.svg";
import location from "../assets/images/footer/location.png";
import callInfo from "../assets/images/footer/call-info.png";
import { Query } from "../types/dbtypes";
import Config from "../config.json";

type Props = {
  singleData?: Query;
};

const Footer = ({ singleData }: Props) => {
  return (
    <footer
      style={{
        backgroundImage: `url(${Config.uploadURL}${singleData?.singleDataRestaurantOnes?.data[0].attributes?.footerImg_1540x652?.data?.attributes?.hash}${singleData?.singleDataRestaurantOnes?.data[0].attributes?.footerImg_1540x652?.data?.attributes?.ext})`,
      }}
      className="footer-area text-center"
      id="footer"
    >
      <div className="parallax-overlay"></div>
      <div className="background-shape1">
        <img src={backgroundShape1} alt="background-shape1 img" />
      </div>
      <div className="background-shape2">
        <img src={backgroundShape2} alt="background-shape2 img" />
      </div>
      <div className="container">
        <span
          className="wow fadeInDown"
          data-wow-duration="2s"
          data-wow-delay=".3s"
        >
          Vamos falar!
        </span>
        <h4
          className="wow fadeInDown"
          data-wow-duration="1.2s"
          data-wow-delay=".2s"
        >
          Nosso Contato
        </h4>
        <div
          className="row wow fadeIn"
          data-wow-duration="2s"
          data-wow-delay=".3s"
        >
          <div className="col-12 col-md-4 col-lg-4">
            <div className="location-info">
              <img src={location} alt="location-ic" className="img-fluid" />
              <p>
                {
                  singleData?.singleDataRestaurantOnes?.data[0].attributes
                    ?.endereco
                }
              </p>
            </div>
          </div>
          <div className="col-12 col-md-4 col-lg-4">
            <div className="location-info">
              <img src={callInfo} alt="call-info-ic" className="img-fluid" />
              <p>
                <a
                  href={`tel:${singleData?.singleDataRestaurantOnes?.data[0].attributes?.phone}`}
                >
                  {
                    singleData?.singleDataRestaurantOnes?.data[0].attributes
                      ?.phone
                  }
                </a>
              </p>
            </div>
          </div>
          <div className="col-12 col-md-4 col-lg-4">
            <div className="location-info">
              <img src={message} alt="message-ic" className="img-fluid" />
              <p>
                <a
                  href={`mailto:${singleData?.singleDataRestaurantOnes?.data[0].attributes?.email}`}
                >
                  {
                    singleData?.singleDataRestaurantOnes?.data[0].attributes
                      ?.email
                  }
                </a>
              </p>
            </div>
          </div>
        </div>
        <div
          className="sub-footer text-center wow fadeIn"
          data-wow-duration="3s"
          data-wow-delay=".4s"
        >
          <span>2024 &copy; RAFAEL HERCULANO. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
