import React, { useEffect, useState } from "react";
import headerLogo from "../../assets/images/logo/logo.png";
import "swiper/swiper-bundle.css";
import "swiper/css/free-mode";
import "../../assets/js/all.js";
import "../../assets/js/custom.js";
import WOW from "wowjs";
import "wowjs/css/libs/animate.css";
import $ from "jquery";
import BlogModal from "./BlogModal.jsx";
import Sidebar from "../Sidebar.tsx";
import Footer from "../Footer.tsx";
import { blogs } from "./mock.js";
import { Link } from "react-router-dom";
import { truncateText } from "../../helperFunctions.js";

const Blog = () => {
  const [visible, setVisible] = useState(true);
  const [blogDetail, setBlogDetail] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage] = useState(6);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      setVisible(false);
    };

    fetchData();
  }, []);

  // Calculate the currently displayed blogs
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs?.slice(indexOfFirstBlog, indexOfLastBlog);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Total number of pages
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(blogs?.length / blogsPerPage); i++) {
    pageNumbers.push(i);
  }

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
          {/*start sidebar header */}
          <Sidebar />
          {/*end sidebar header */}

          {/*start content */}
          <div className="foholic_content">
            {/*mobile menu */}
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

            {/*start sub-header section */}
            <div className="blog-sub-header" id="blogs_page">
              <div className="parallax-overlay"></div>
              <div className="container">
                <div className="sub_header_content text-center">
                  <h1 className="m-0">Our Blog</h1>
                  <ul className="breadcrumb justify-content-center m-0">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>Blog</li>
                  </ul>
                </div>
              </div>
            </div>
            {/*ens sub-header section */}

            {/*start blog section */}
            <section className="blog_section foholic_inn_page" id="blog">
              <div className="blog_boxes">
                <div className="container">
                  <h2 className="d-none">hidden</h2>
                  <div
                    className="row wow fadeIn"
                    data-wow-duration="3s"
                    data-wow-delay=".4s"
                  >
                    {currentBlogs?.map((blog, index) => (
                      <div
                        key={index}
                        className="col-12 col-md-6 col-lg-6 m-30"
                      >
                        <div className="blog-item">
                          <div className="blog-content text-center">
                            <div className="blog-wrapper">
                              <div className="date_pick">{blog.date}</div>
                              <a
                                href="javascript;"
                                data-bs-toggle="modal"
                                data-bs-target="#staticBackdrop"
                              >
                                <div className="Blog_sub_name">
                                  {blog.title}
                                </div>
                              </a>
                              <p className="blogs-block">
                                {truncateText(blog?.content[0], 20)}
                              </p>
                              <a
                                href="javascript;"
                                className="reade_more_btn"
                                data-bs-toggle="modal"
                                data-bs-target="#staticBackdrop"
                                onClick={() => setBlogDetail(blog)}
                              >
                                Read More
                              </a>
                            </div>
                          </div>
                          <img
                            src={blog.image}
                            alt={`Blog_img${index + 1}`}
                            className="img-cover img-fluid"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="pagination justify-content-center">
                    <ul className="page_load d-flex">
                      {pageNumbers.map((number) => (
                        <li key={number}>
                          <span
                            className={
                              currentPage === number
                                ? "page-numbers current"
                                : "page-numbers"
                            }
                            onClick={() => paginate(number)}
                          >
                            {number}
                          </span>
                        </li>
                      ))}
                      {currentPage < pageNumbers.length && (
                        <li>
                          <span
                            className="page-numbers"
                            onClick={() => paginate(currentPage + 1)}
                          >
                            Next
                          </span>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            {/*end blog section */}

            {/*start footer section */}
            <Footer />
            {/*end footer section */}
          </div>
          {/*end content */}

          {/*blog section Modal */}
          <div
            className="modal-fullscreen modal fade blog-modal"
            id="staticBackdrop"
            tabIndex="-2"
            aria-hidden="true"
            style={{ textAlign: "start" }}
          >
            <BlogModal blogDetail={blogDetail} />
          </div>

          {/*Scroll Bottom to Top */}
          <span className="scroll-top" data-scroll="up">
            <i className="fa-solid fa-angle-up"></i>
          </span>
        </div>
      )}
    </>
  );
};

export default Blog;
