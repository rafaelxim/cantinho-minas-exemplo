import React, { useEffect, useState } from "react";
import headerLogo from "../../assets/images/logo/logo.png";
import "../../assets/js/all.js";
import "../../assets/js/custom.js";
import WOW from "wowjs";
import "wowjs/css/libs/animate.css";
import $ from "jquery";
import Sidebar from "../Sidebar.tsx";
import Footer from "../Footer.tsx";
import ChefModal from "./ChefModal.tsx";
import { chefsData } from "./mock.js";
import { Link } from "react-router-dom";

const Chef = () => {
  const [visible, setVisible] = useState(true);
  const [chefDetail, setChefDetail] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      setVisible(false);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const wow = new WOW.WOW({ live: false });
    let scrolled = false;
    $(window).on("scroll", () => {
      if (!scrolled) {
        scrolled = true;
        wow.init();
      }
    });
  }, []);

  return (
    <>
      {visible ? (
        <div className="preloader">
          <div className="loader">
            <div className="box">
              <div className="box-inner-1">
                <div className="box-1"></div>
                <div className="box-2"></div>
              </div>
              <div className="box-inner-2">
                <div className="box-3"></div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div id="main-wrap">
          {/* start sidebar header */}
          <Sidebar />
          {/* end sidebar header */}

          {/* start content */}
          <div className="foholic_content">
            {/* mobile menu */}
            <div className="mobile_header">
              <div className="inn-sub-header">
                <div className="logo">
                  <Link to="/">
                    <img
                      src={headerLogo}
                      alt="Foholic Header Logo"
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="foholic-menubar">
                  <div className="menu-ic">
                    <div className="line-menu line-half first-line"></div>
                    <div className="line-menu"></div>
                    <div className="line-menu line-half last-line"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* start sub-header section */}
            <div className="chef-sub-header" id="blogs_page">
              <div className="parallax-overlay"></div>
              <div className="container">
                <div className="sub_header_content text-center">
                  <h1 className="m-0">Chefs</h1>
                  <ul className="breadcrumb justify-content-center m-0">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>Our Chefs</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* ens sub-header section */}

            {/* start team section */}
            <section className="foholic_team team_staff" id="chef_team">
              <div className="container">
                <h2 className="d-none">hidden</h2>
                <div className="specialities-top text-center">
                  <div className="row">
                    <h3 className="d-none">hidden</h3>
                    {chefsData?.map((chef, index) => (
                      <div
                        key={index}
                        className="col-12 col-md-6 col-lg-4 m-30"
                      >
                        <div className="carousel_imges_item hover-effect-img">
                          <div className="hover-icons">
                            <a
                              href="https://www.facebook.com/"
                              className="in-social slide-left"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <i className="fa-brands fa-facebook-f"></i>
                            </a>
                            <a
                              href="https://twitter.com/"
                              className="in-social"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <i className="fa-brands fa-twitter"></i>
                            </a>
                            <a
                              href="https://www.instagram.com/"
                              className="in-social slide-right"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <i className="fa-brands fa-instagram"></i>
                            </a>
                          </div>
                          <div className="carousel-img swipe_gallery_img">
                            <img src={chef.img} alt={`chef-img-${index + 1}`} />
                          </div>
                          <div className="hover-effect the-team"></div>
                          <a
                            href="javascript;"
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdropteam"
                            onClick={() => setChefDetail(chef)}
                          >
                            <div className="team-box">
                              <span>{chef?.name}</span>
                              <p>{chef?.position}</p>
                            </div>
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
            {/* end team section */}

            {/* start footer section */}
            <Footer />
            {/* end footer section */}

            {/* team modal */}
            <div
              className="modal fade team_blog reveal"
              id="staticBackdropteam"
              tabIndex="-1"
              aria-hidden="true"
              style={{ textAlign: "start" }}
            >
              <ChefModal chefDetail={chefDetail} />
            </div>
          </div>

          {/*  end content  */}

          {/* Scroll Bottom to Top */}
          <span className="scroll-top" data-scroll="up">
            <i className="fa-solid fa-angle-up"></i>
          </span>
        </div>
      )}
    </>
  );
};

export default Chef;
