import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";

import { Link, useNavigate } from "react-router-dom";
import { GET_MENUS } from "../services/queries.ts";
import { Query } from "../types/dbtypes.ts";
import Config from "../config.json";

type Props = {
  singleData?: Query;
};

const Sidebar = ({ singleData }: Props) => {
  const navigate = useNavigate();
  const { data } = useQuery<Query>(GET_MENUS);

  console.log({ singleData });

  useEffect(() => {
    function scrollToTarget(target) {
      const $target = document.querySelector(target);
      if ($target) {
        window.scrollTo({
          top: $target.offsetTop + 1,
          behavior: "smooth",
        });
      }
    }
    scrollToTarget("#home");
    function handleClick(e) {
      e.preventDefault();
      const target = e.currentTarget.getAttribute("value");
      scrollToTarget(target);
      window.history.pushState("", "", target);
    }

    const divsWithValueAttribute = document.querySelectorAll('div[value^="#"]');
    divsWithValueAttribute.forEach((div) => {
      div.addEventListener("click", handleClick);
    });

    return () => {
      divsWithValueAttribute.forEach((div) => {
        div.removeEventListener("click", handleClick);
      });
    };
  }, [data]);

  const renderMenus = () => {
    return data?.menus?.data.map((m) => {
      return (
        <li className="menu-list">
          <div
            className="nav-links"
            // @ts-ignore
            value={m.attributes?.url}
            onClick={() => navigate(`/${m.attributes!.url}`)}
          >
            {m.attributes?.name}
          </div>
        </li>
      );
    });
  };

  return (
    <header className="foholic-fixed-sidebar sidebar-right" id="header">
      <div className="header-container">
        <div className="menu-wrap">
          <div className="header-logo">
            <Link to="/">
              <img
                src={`${Config.uploadURL}${singleData?.singleDataRestaurantOnes?.data[0].attributes?.logo250x44?.data?.attributes?.hash}${singleData?.singleDataRestaurantOnes?.data[0].attributes?.logo250x44?.data?.attributes?.ext}`}
                alt="Foholic Header Logo"
                className="img-fluid"
              />
            </Link>
          </div>
          <nav className="fixed-menu-wrap" id="top-nav">
            <ul className="navbar-navs">{renderMenus()}</ul>
          </nav>
          <div className="menu-table">
            <span className="table-detail">Faça Sua reserva</span>
            <div className="booking-number">
              <a
                href={`tel:${singleData?.singleDataRestaurantOnes?.data[0].attributes?.phone}`}
              >
                {
                  singleData?.singleDataRestaurantOnes?.data[0].attributes
                    ?.phone
                }
              </a>
            </div>
          </div>
          <div className="foholic-social-ic">
            <a
              href={
                singleData?.singleDataRestaurantOnes?.data[0].attributes
                  ?.facebook!
              }
              className="social-ic"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a
              href={
                singleData?.singleDataRestaurantOnes?.data[0].attributes
                  ?.twitter!
              }
              className="social-ic"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a
              href={
                singleData?.singleDataRestaurantOnes?.data[0].attributes
                  ?.twitter!
              }
              className="social-ic"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href={
                singleData?.singleDataRestaurantOnes?.data[0].attributes
                  ?.youtube!
              }
              className="social-ic"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Sidebar;
