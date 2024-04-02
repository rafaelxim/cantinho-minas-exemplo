import React, { useEffect, useState } from "react";
import { Maybe, Query } from "../../types/dbtypes";
import { useQuery } from "@apollo/client";
import { GET_MENU_SECTIONS } from "../../services/queries.ts";

type Props = {
  cardapioDesc?: Maybe<string> | undefined;
  cardapioImg?: string;
};

const MenuSection = ({ cardapioDesc, cardapioImg }: Props) => {
  const [menuNavList, setMenuNavList] = useState("nav-starter-tab");
  const { data } = useQuery<Query>(GET_MENU_SECTIONS);

  useEffect(() => {
    if (data?.menuSections?.data[0].id)
      setMenuNavList(data?.menuSections?.data[0].id);
  }, [data]);

  const handleChangeMenuNav = (e) => {
    setMenuNavList(e?.target?.id);
  };

  const renderMenuSection = (sectionId, key) => {
    const foundSection = data?.menuSections?.data.find(
      (s) => s.id === sectionId
    );
    return (
      <div
        className={`menu-visible tab-pane fade show ${
          menuNavList === sectionId ? "active" : ""
        }`}
        key={key}
        id={`nav-${sectionId}`}
        role="tabpanel"
        aria-labelledby={`nav-${sectionId}`}
      >
        {/* Menu items for the section */}
        {foundSection?.attributes?.menu_items?.data.map((menuItem, index) => (
          <div className="menu_wrappe" key={index}>
            <div className="dish_title d-flex">
              <span>{menuItem.attributes?.name}</span>
              <div className="item-divider"></div>
              <span className="food_price">{menuItem.attributes?.price}</span>
            </div>
            <p className="food_info">{menuItem.attributes?.description}</p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-12 col-lg-6">
          <div
            className="table_menu wow fadeIn"
            data-wow-duration="2s"
            data-wow-delay=".4s"
          >
            <span>O que preparamos para você</span>
            <h6 className="dark_head">Cardápio</h6>
            <p>{cardapioDesc}</p>
            <img src={cardapioImg} alt="menu-post1" className="img-fluid" />
          </div>
        </div>
        <div
          className="col-12 col-md-12 col-lg-6 wow fadeIn"
          data-wow-duration="2s"
          data-wow-delay=".4s"
        >
          <nav className="menu_nav">
            <div
              className="food_menu_item nav nav-tabs"
              id="nav-tab"
              role="tablist"
            >
              {/* Render menu section tabs */}
              {data?.menuSections?.data.map((section) => (
                <button
                  key={section.id}
                  className={`navs-tabs ${
                    menuNavList === section.id ? "active" : ""
                  }`}
                  id={section.id!}
                  data-bs-toggle="tab"
                  data-bs-target={`#nav-${section.attributes?.label!.toLowerCase()}`}
                  type="button"
                  role="tab"
                  aria-controls={`nav-${section.attributes?.label!.toLowerCase()}`}
                  aria-selected={menuNavList === section.id ? "true" : "false"}
                  onClick={handleChangeMenuNav}
                >
                  {section.attributes?.label!}
                </button>
              ))}
            </div>
          </nav>
          <div className="menu_content tab-content" id="nav-tabContent">
            {/* Render menu sections */}
            {data?.menuSections?.data.map((section, index) =>
              renderMenuSection(section.id, index)
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuSection;
