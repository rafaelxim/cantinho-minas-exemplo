import React from "react";
import { Link } from "react-router-dom";
import { blogs } from "./mock";
import { truncateText } from "../../helperFunctions";

const BlogBox = ({ setBlogDetail }) => {
  return (
    <div className="container">
      <div
        className="row wow fadeIn"
        data-wow-duration="3s"
        data-wow-delay=".4s"
      >
        {blogs?.slice(0, 3)?.map((blog, index) => {
          return (
            <div className="col-12 col-md-4 col-lg-4" key={index}>
              <div className="blog-item">
                <div className="blog-content text-center">
                  <div className="blog-wrapper">
                    <div className="date_pick">{blog?.date}</div>
                    <a
                      href="javascript;"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop"
                    >
                      <div className="Blog_sub_name">{blog?.title}</div>
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
                  src={blog?.image}
                  alt="Blog_img1"
                  className="img-cover img-fluid"
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="foholic_button text-center">
        <Link to="blog" className="button-light">
          View More
        </Link>
      </div>
    </div>
  );
};

export default BlogBox;
