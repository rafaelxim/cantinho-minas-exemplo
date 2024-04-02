import React from "react";
import { ChefEntity } from "../../types/dbtypes";
import Config from "../../config.json";

const ChefModal = ({ chefDetail }: { chefDetail?: ChefEntity }) => {
  const skills = new Array(3).fill(null);

  return (
    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div className="modal-content">
        <div className="modal-body">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-6">
              <div className="team_popup_box text-center">
                <img
                  src={`${Config.uploadURL}${chefDetail?.attributes?.img_410x410?.data?.attributes?.hash}${chefDetail?.attributes?.img_410x410?.data?.attributes?.ext}`}
                  alt={chefDetail?.attributes?.nome!}
                  className="img-fluid"
                />
                <h5 className="m-0">{chefDetail?.attributes?.nome}</h5>
                <span>{chefDetail?.attributes?.cargo}</span>
                <div className="modal_icons">
                  <a
                    href={chefDetail?.attributes?.facebook!}
                    className="icon-ic"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a
                    href={chefDetail?.attributes?.twitter!}
                    className="icon-ic"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                  <a
                    href={chefDetail?.attributes?.instagram!}
                    className="icon-ic"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <div className="team_detail">
                <p>{chefDetail?.attributes?.detalhes}</p>
                <div className="skill_bar">
                  {skills?.map((skill, index) => {
                    const keyH = `habilidade${index + 1}`;
                    const keyHPerc = `pctHabilidade${index + 1}`;
                    console.log({});
                    return (
                      <div className="progresbar-counter" key={index}>
                        <p className="progress-title text-start">
                          {chefDetail?.attributes![keyH]}
                        </p>
                        <div
                          className="progress-value"
                          style={{
                            left: `${chefDetail?.attributes![keyHPerc]}%`,
                          }}
                        >
                          <span
                            className="count num-counter"
                            data-number={chefDetail?.attributes![keyHPerc]}
                          >
                            {chefDetail?.attributes![keyHPerc]}
                          </span>
                          %
                        </div>
                        <div className="skil-progressbar">
                          <span
                            style={{
                              width: `${chefDetail?.attributes![keyHPerc]}%`,
                            }}
                          ></span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <div className="more-wraper" data-bs-dismiss="modal">
              <div className="watch-button watch-button-circle"></div>
              <div className="watch_video_button">
                <span>Close</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefModal;
