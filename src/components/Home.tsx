import React, { useEffect, useState } from "react";
import "../assets/js/all.js";
import "../assets/js/custom.js";
import WOW from "wowjs";
import "wowjs/css/libs/animate.css";
import food from "../assets/images/svg/food.svg";
import foodList from "../assets/images/svg/food-list.svg";
import chef from "../assets/images/svg/chef.svg";
import "swiper/swiper-bundle.css";
import "swiper/css/free-mode";
import $ from "jquery";
import Sidebar from "./Sidebar.tsx";
import BlogModal from "./blog/BlogModal.jsx";
import ChefModal from "./chef/ChefModal.tsx";
import SliderSection from "./home/SliderSection.tsx";
import AboutSection from "./home/AboutSection.tsx";
import TeamSection from "./home/TeamSection.tsx";
import MenuSection from "./home/MenuSection.tsx";
import ReservationSection from "./home/ReservationSection.tsx";
import GallerySection from "./home/GallerySection.tsx";
import Footer from "./Footer.tsx";
import { Link } from "react-router-dom";
import { SINGLE_DATA } from "../services/queries.ts";
import { useQuery } from "@apollo/client";
import { Query } from "../types/dbtypes.ts";
import Config from "../config.json";

const Home = () => {
  const [visible, setVisible] = useState(true);
  const [chefDetail, setChefDetail] = useState();
  // const [blogDetail, setBlogDetail] = useState();
  const { data } = useQuery<Query>(SINGLE_DATA);

  useEffect(() => {
    const fetchData = async () => {
      // simular o loading
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // scroll para o top caso esteja abaixo
      setVisible(false);
      $(document).ready(function () {
        var target = window.location.hash;
        if (target) {
          $("html, body").animate(
            {
              scrollTop: $(target).offset()?.top,
            },
            "slow"
          );
        }
      });
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
          <Sidebar singleData={data} />
          {/* end sidebar header */}

          {/* start content */}
          <div className="foholic_content">
            {/* mobile menu */}
            <div className="mobile_header">
              <div className="inn-sub-header">
                <div className="logo" id="logo">
                  <Link to="/">
                    <img
                      src={`${Config.uploadURL}${data?.singleDataRestaurantOnes?.data[0].attributes?.logo250x44?.data?.attributes?.hash}${data?.singleDataRestaurantOnes?.data[0].attributes?.logo250x44?.data?.attributes?.ext}`}
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

            {/* start slider section  */}
            <section className="foholic_slider slider-style" id="home">
              <h1 className="d-none">Hidden</h1>
              <SliderSection />
            </section>
            {/* end slider section */}

            {/* start about section */}
            <section
              className="foholic-history"
              id="about"
              style={{ textAlign: "start" }}
            >
              <AboutSection />
            </section>
            {/* end about section */}

            {/* start team section */}
            <section className="foholic_team" id="team">
              <div className="timeline-tag">
                <div className="intro-years text-center">
                  <div className="celebrate_title">Celebrando</div>
                  <h3 className="fast-counter" data-number="7">
                    7
                  </h3>
                  {/* <CountUp end={100} /> */}
                  <div className="years">Anos</div>
                </div>
              </div>
              <div className="container">
                <div className="specialities-top text-center">
                  <span
                    className="wow fadeInDown"
                    data-wow-duration="2s"
                    data-wow-delay=".3s"
                  >
                    Conheça o Time
                  </span>
                  <h4
                    className="foholic_title dark_head  wow fadeInDown"
                    data-wow-duration="1.2s"
                    data-wow-delay=".2s"
                  >
                    Os Melhores
                  </h4>
                  <p className="col-12 col-lg-8 col-md-10 m-auto">
                    Conheça a equipe apaixonada por gastronomia do nosso
                    restaurante! Nosso time é composto por pessoas talentosas,
                    dedicadas a criar pratos que encantam os paladares mais
                    exigentes
                  </p>

                  <TeamSection setChefDetail={setChefDetail} />
                </div>
                <div className="foholic_button text-center">
                  <Link to="chef" className="button-light">
                    Conheça o Time
                  </Link>
                </div>
              </div>
            </section>
            {/* end team section */}

            {/* start Features section */}
            <section className="foholic_features" id="features">
              <div className="container">
                <div
                  className="feature_lite text-center wow fadeIn"
                  data-wow-duration="3s"
                  data-wow-delay=".3s"
                >
                  <span
                    className="wow fadeInDown"
                    data-wow-duration="2s"
                    data-wow-delay=".3s"
                  >
                    Diferenciais
                  </span>
                  <h2
                    className="dark_head wow fadeInDown"
                    data-wow-duration="1.2s"
                    data-wow-delay=".2s"
                  >
                    Por quê as pessoas nos escolhem?
                  </h2>
                </div>
                <div className="row">
                  <div className="col-12 col-lg-4">
                    <div className="dish-ic-box text-center">
                      <img src={food} alt="food-img" className="img-fluid" />
                      <h3 className="m-0">
                        {
                          data?.singleDataRestaurantOnes?.data[0].attributes
                            ?.diferencial1
                        }
                      </h3>
                      <p className="m-0">
                        {
                          data?.singleDataRestaurantOnes?.data[0].attributes
                            ?.descDiferencial1
                        }
                      </p>
                    </div>
                  </div>
                  <div className="col-12 col-lg-4">
                    <div className="dish-ic-box text-center">
                      <img
                        src={foodList}
                        alt="food-list-img"
                        className="img-fluid"
                      />
                      <h3 className="m-0">
                        {
                          data?.singleDataRestaurantOnes?.data[0].attributes
                            ?.diferencial2
                        }
                      </h3>
                      <p className="m-0">
                        {
                          data?.singleDataRestaurantOnes?.data[0].attributes
                            ?.descDiferencial2
                        }
                      </p>
                    </div>
                  </div>
                  <div className="col-12 col-lg-4">
                    <div className="dish-ic-box text-center">
                      <img src={chef} alt="chef-img" className="img-fluid" />
                      <h3 className="m-0">
                        {
                          data?.singleDataRestaurantOnes?.data[0].attributes
                            ?.diferencial3
                        }
                      </h3>
                      <h4 className="d-none">hidden</h4>
                      <p className="m-0">
                        {
                          data?.singleDataRestaurantOnes?.data[0].attributes
                            ?.descDiferencial3
                        }
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end Features section */}

            {/* start video section */}
            <section
              className="food_video"
              id="video"
              style={{
                backgroundImage: `url(${Config.uploadURL}${data?.singleDataRestaurantOnes?.data[0].attributes?.paralax1_img_1540x645?.data?.attributes?.hash}${data?.singleDataRestaurantOnes?.data[0].attributes?.paralax1_img_1540x645?.data?.attributes?.ext})`,
              }}
            >
              <div className="parallax-overlay"></div>
              <div className="container text-center">
                <h5
                  className="video_title wow fadeInDown"
                  data-wow-duration="2s"
                  data-wow-delay=".3s"
                >
                  {
                    data?.singleDataRestaurantOnes?.data[0].attributes
                      ?.paralax1_title
                  }
                </h5>
                <div className="parallax-content">
                  {/* button start */}
                  <div className="more-wraper">
                    <a
                      href="javascript;"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      <div className="watch-button watch-button-circle"></div>
                      <div className="watch_video_button">
                        <span>Vídeo</span>
                      </div>
                    </a>
                  </div>
                  {/* button end */}
                </div>
              </div>
            </section>
            {/* end video section */}

            {/* start menu section */}
            <section
              className="foholic_menu"
              id="menu"
              style={{ textAlign: "start" }}
            >
              <MenuSection
                cardapioDesc={
                  data?.singleDataRestaurantOnes?.data[0].attributes
                    ?.cardapioDesc
                }
                cardapioImg={`${Config.uploadURL}${data?.singleDataRestaurantOnes?.data[0].attributes?.cardapioImg_630x500?.data?.attributes?.hash}${data?.singleDataRestaurantOnes?.data[0].attributes?.cardapioImg_630x500?.data?.attributes?.ext}`}
              />
            </section>
            {/* end menu section */}

            {/* start reservation section */}
            <section
              className="foholic_reservation"
              id="reservation"
              style={{
                textAlign: "start",
                backgroundImage: `url(${Config.uploadURL}${data?.singleDataRestaurantOnes?.data[0].attributes?.reservaImg_1540x798?.data?.attributes?.hash}${data?.singleDataRestaurantOnes?.data[0].attributes?.reservaImg_1540x798?.data?.attributes?.ext})`,
              }}
            >
              <div className="parallax-overlay"></div>
              <h6 className="d-none">hidden</h6>
              <ReservationSection singleData={data} />
            </section>
            {/* end reservation section  */}

            {/* start gallery section */}
            <section className="foholic_gallery" id="gallery">
              <h2 className="d-none">hidden</h2>
              <div className="container">
                <div className="divide_gallery text-center">
                  <span
                    className="wow fadeInDown"
                    data-wow-duration="2s"
                    data-wow-delay=".3s"
                  >
                    Fique Por Dentro
                  </span>
                  <div
                    className="foholic_title dark_head wow fadeInDown"
                    data-wow-duration="1.2s"
                    data-wow-delay=".2s"
                  >
                    Nossa Galeria
                  </div>
                  <p className="col-12 col-lg-8 col-md-10 m-auto">
                    {
                      data?.singleDataRestaurantOnes?.data[0].attributes
                        ?.galeriaText
                    }
                  </p>
                </div>
                <GallerySection singleData={data} />
              </div>
            </section>
            {/* end gallery section */}

            {/* start blog section */}
            {/* <section className="blog_section" id="blog">
              <div className="our_blog">
                <div className="container">
                  <div className="text-center blog_detail">
                    <span
                      className="wow fadeInDown"
                      data-wow-duration="2s"
                      data-wow-delay=".3s"
                    >
                      Stay up to date
                    </span>
                    <h2
                      className="dark_head wow fadeInDown"
                      data-wow-duration="1.2s"
                      data-wow-delay=".2s"
                    >
                      Our Blog
                    </h2>
                    <p className="col-12 col-lg-8 col-md-10 m-auto">
                      Nunc vehicula massa vitae felis suscipit, et semper ligula
                      eleifend. Cras neque justo, congue eget congue sit amet,
                      sodales a ipsum. Suspendisse id faucibus tellus.
                    </p>
                  </div>
                </div>
              </div>

              <div className="blog_boxes">
                <BlogBox setBlogDetail={setBlogDetail} />
              </div>
            </section> */}
            {/* end blog section */}

            {/* start news-letter section */}
            {/* <section
              className="newsletter-part"
              id="news-letter"
              style={{ textAlign: "start" }}
            >
              <div className="container">
                <h3 className="d-none">hidden</h3>
                <div className="row">
                  <div
                    className="col-12 col-md-12 col-lg-6 wow fadeInLeft"
                    data-wow-duration="1.8s"
                    data-wow-delay=".3s"
                  >
                    <span>SUBSCRIBE TO OUR NEWSLETTER</span>
                    <div className="news_sub_detail">
                      Happiness is an extra scoop of a soup. Discover the most
                      delicious recipes.
                    </div>
                  </div>
                  <div className="col-12 col-md-12 col-lg-6">
                    <form
                      className="newsletter__form wow fadeIn"
                      data-wow-duration="2s"
                      data-wow-delay=".3s"
                    >
                      <div className="field-class">
                        <input
                          type="email"
                          id="formExample"
                          className="form-control-input"
                          placeholder="Your Email Address"
                        />
                      </div>

                      <div className="form-check mb-0">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                        />
                        <label className="form-check-label">
                          I have agree to the the terms & conditions
                        </label>
                      </div>

                      <div className="foholic_button">
                        <button className="button-light">Sign Up</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </section> */}
            {/* end news-letter section */}

            {/* start location section */}
            <section className="foholic-location text-center" id="contact">
              <div className="container">
                <span
                  className="wow fadeInDown"
                  data-wow-duration="2s"
                  data-wow-delay=".3s"
                >
                  Onde Nos Encontrar
                </span>
                <h3
                  className="location-title dark_head wow fadeInDown"
                  data-wow-duration="1.2s"
                  data-wow-delay=".2s"
                >
                  Nossa Localização
                </h3>
                <div
                  className="foholic_map wow fadeIn"
                  data-wow-duration="3s"
                  data-wow-delay=".4s"
                >
                  <iframe
                    title="map"
                    src={
                      data?.singleDataRestaurantOnes?.data[0].attributes
                        ?.mapsLink!
                    }
                    width="1290"
                    height="482"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </section>
            {/* end location section */}

            {/* start footer section */}
            <Footer singleData={data} />
            {/* end footer section */}
          </div>
          {/* end content */}

          {/* video section Modal */}
          <div
            className="modal fade video_modal"
            id="exampleModal"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <video
                    width="727"
                    height="410"
                    controls
                    playsInline
                    autoPlay
                    muted
                    loop
                  >
                    <source
                      src={`${Config.uploadURL}${data?.singleDataRestaurantOnes?.data[0].attributes?.paralax1_video?.data?.attributes?.hash}${data?.singleDataRestaurantOnes?.data[0].attributes?.paralax1_video?.data?.attributes?.ext}`}
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
            </div>
          </div>
          {/* end Modal */}

          {/* blog section Modal */}
          {/* <div
            className="modal-fullscreen modal fade blog-modal"
            id="staticBackdrop"
            // tabIndex="-2"
            aria-hidden="true"
            style={{ textAlign: "start" }}
          >
            <BlogModal blogDetail={blogDetail} />
          </div> */}

          {/* team modal */}
          <div
            className="modal fade team_blog reveal"
            id="staticBackdropteam"
            // tabIndex="-1"
            aria-hidden="true"
            style={{ textAlign: "start" }}
          >
            <ChefModal chefDetail={chefDetail} />
          </div>

          {/* Scroll Bottom to Top */}
          <span className="scroll-top" id="scroll-to-top" data-scroll="up">
            <i className="fa-solid fa-angle-up"></i>
          </span>
        </div>
      )}
    </>
  );
};

export default Home;
