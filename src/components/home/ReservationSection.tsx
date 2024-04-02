import React from "react";
import phone from "../../assets/images/svg/phone.svg";
import { Query } from "../../types/dbtypes";

type Props = {
  singleData?: Query;
};

const ReservationSection = ({ singleData }: Props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-12 col-lg-6">
          <div
            className="reservation_detail wow fadeIn"
            data-wow-duration="2s"
            data-wow-delay=".3s"
          >
            <span>RESERVE UMA MESA</span>
            <div className="dark_head reservation-title">Reservas</div>
            <p className="m-0">
              {
                singleData?.singleDataRestaurantOnes?.data[0].attributes
                  ?.reservaText
              }
            </p>
            <p className="reserve_content m-0">
              Aceitamos Reservas. Ligue ou complete o formulário.
            </p>
            <div className="tel-data">
              <a
                href={`tel:${singleData?.singleDataRestaurantOnes?.data[0].attributes?.phone}`}
              >
                <img src={phone} alt="phone img" className="img-fluid" />
              </a>
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
        </div>
        <div className="col-12 col-md-12 col-lg-6">
          <form
            className="form-register wow fadeIn"
            data-wow-duration="2s"
            data-wow-delay=".3s"
          >
            <div className="row">
              <div className="col-12 col-lg-6 col-md-12">
                <div className="inner-addon form-input position-relative">
                  <div className="input_ic">
                    <svg
                      width="16"
                      height="21"
                      viewBox="0 0 16 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 21C0 18.8783 0.842855 16.8434 2.34315 15.3431C3.84344 13.8429 5.87827 13 8 13C10.1217 13 12.1566 13.8429 13.6569 15.3431C15.1571 16.8434 16 18.8783 16 21H14C14 19.4087 13.3679 17.8826 12.2426 16.7574C11.1174 15.6321 9.5913 15 8 15C6.4087 15 4.88258 15.6321 3.75736 16.7574C2.63214 17.8826 2 19.4087 2 21H0ZM8 12C4.685 12 2 9.315 2 6C2 2.685 4.685 0 8 0C11.315 0 14 2.685 14 6C14 9.315 11.315 12 8 12ZM8 10C10.21 10 12 8.21 12 6C12 3.79 10.21 2 8 2C5.79 2 4 3.79 4 6C4 8.21 5.79 10 8 10Z"
                        fill="var(--color-2)"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Nome"
                  />
                </div>
              </div>

              <div className="col-12 col-lg-6 col-md-12">
                <div className="inner-addon form-input position-relative">
                  <div className="input_ic">
                    <svg
                      width="20"
                      height="18"
                      viewBox="0 0 20 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 0H19C19.2652 0 19.5196 0.105357 19.7071 0.292893C19.8946 0.48043 20 0.734784 20 1V17C20 17.2652 19.8946 17.5196 19.7071 17.7071C19.5196 17.8946 19.2652 18 19 18H1C0.734784 18 0.48043 17.8946 0.292893 17.7071C0.105357 17.5196 0 17.2652 0 17V1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0V0ZM18 4.238L10.072 11.338L2 4.216V16H18V4.238ZM2.511 2L10.061 8.662L17.502 2H2.511Z"
                        fill="var(--color-2)"
                      />
                    </svg>
                  </div>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Email"
                  />
                </div>
              </div>

              <div className="col-12 col-lg-6 col-md-12">
                <div className="inner-addon form-input position-relative">
                  <div className="input_ic">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.366 7.682C7.30434 9.33048 8.66952 10.6957 10.318 11.634L11.202 10.396C11.3442 10.1969 11.5543 10.0569 11.7928 10.0023C12.0313 9.94779 12.2814 9.98254 12.496 10.1C13.9103 10.8729 15.4722 11.3378 17.079 11.464C17.3298 11.4839 17.5638 11.5975 17.7345 11.7823C17.9052 11.9671 18 12.2094 18 12.461V16.923C18.0001 17.1706 17.9083 17.4094 17.7424 17.5932C17.5765 17.777 17.3483 17.8927 17.102 17.918C16.572 17.973 16.038 18 15.5 18C6.94 18 0 11.06 0 2.5C0 1.962 0.027 1.428 0.082 0.898C0.107255 0.651697 0.222984 0.423521 0.40679 0.257634C0.590595 0.0917472 0.829406 -5.33578e-05 1.077 2.32673e-08H5.539C5.79056 -3.15185e-05 6.0329 0.0947515 6.21768 0.265451C6.40247 0.43615 6.51613 0.670224 6.536 0.921C6.66222 2.52779 7.12708 4.08968 7.9 5.504C8.01746 5.71856 8.05221 5.96874 7.99767 6.2072C7.94312 6.44565 7.80306 6.65584 7.604 6.798L6.366 7.682ZM3.844 7.025L5.744 5.668C5.20478 4.50409 4.83535 3.26884 4.647 2H2.01C2.004 2.166 2.001 2.333 2.001 2.5C2 9.956 8.044 16 15.5 16C15.667 16 15.834 15.997 16 15.99V13.353C14.7312 13.1646 13.4959 12.7952 12.332 12.256L10.975 14.156C10.4287 13.9437 9.89801 13.6931 9.387 13.406L9.329 13.373C7.36758 12.2567 5.74328 10.6324 4.627 8.671L4.594 8.613C4.30691 8.10199 4.05628 7.57134 3.844 7.025Z"
                        fill="var(--color-2)"
                      />
                    </svg>
                  </div>
                  <input
                    type="number"
                    className="form-control"
                    name="number"
                    placeholder="Telefone"
                  />
                </div>
              </div>

              <div className="col-12 col-lg-6 col-md-12">
                <div className="inner-addon form-input position-relative">
                  <div className="input_ic">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 9C11.3261 9 12.5979 9.52678 13.5355 10.4645C14.4732 11.4021 15 12.6739 15 14V20H13V14C13 13.2348 12.7077 12.4985 12.1827 11.9417C11.6578 11.385 10.9399 11.0499 10.176 11.005L10 11C9.23479 11 8.49849 11.2923 7.94174 11.8173C7.38499 12.3422 7.04989 13.0601 7.005 13.824L7 14V20H5V14C5 12.6739 5.52678 11.4021 6.46447 10.4645C7.40215 9.52678 8.67392 9 10 9ZM3.5 12C3.779 12 4.05 12.033 4.31 12.094C4.13902 12.603 4.03777 13.1328 4.009 13.669L4 14V14.086C3.88505 14.0449 3.76549 14.018 3.644 14.006L3.5 14C3.12712 14 2.76761 14.1389 2.49158 14.3896C2.21555 14.6403 2.0428 14.9848 2.007 15.356L2 15.5V20H0V15.5C0 14.5717 0.368749 13.6815 1.02513 13.0251C1.6815 12.3687 2.57174 12 3.5 12ZM16.5 12C17.4283 12 18.3185 12.3687 18.9749 13.0251C19.6313 13.6815 20 14.5717 20 15.5V20H18V15.5C18 15.1271 17.8611 14.7676 17.6104 14.4916C17.3597 14.2156 17.0152 14.0428 16.644 14.007L16.5 14C16.325 14 16.157 14.03 16 14.085V14C16 13.334 15.892 12.694 15.691 12.096C15.95 12.033 16.221 12 16.5 12ZM3.5 6C4.16304 6 4.79893 6.26339 5.26777 6.73223C5.73661 7.20107 6 7.83696 6 8.5C6 9.16304 5.73661 9.79893 5.26777 10.2678C4.79893 10.7366 4.16304 11 3.5 11C2.83696 11 2.20107 10.7366 1.73223 10.2678C1.26339 9.79893 1 9.16304 1 8.5C1 7.83696 1.26339 7.20107 1.73223 6.73223C2.20107 6.26339 2.83696 6 3.5 6ZM16.5 6C17.163 6 17.7989 6.26339 18.2678 6.73223C18.7366 7.20107 19 7.83696 19 8.5C19 9.16304 18.7366 9.79893 18.2678 10.2678C17.7989 10.7366 17.163 11 16.5 11C15.837 11 15.2011 10.7366 14.7322 10.2678C14.2634 9.79893 14 9.16304 14 8.5C14 7.83696 14.2634 7.20107 14.7322 6.73223C15.2011 6.26339 15.837 6 16.5 6ZM3.5 8C3.36739 8 3.24021 8.05268 3.14645 8.14645C3.05268 8.24021 3 8.36739 3 8.5C3 8.63261 3.05268 8.75979 3.14645 8.85355C3.24021 8.94732 3.36739 9 3.5 9C3.63261 9 3.75979 8.94732 3.85355 8.85355C3.94732 8.75979 4 8.63261 4 8.5C4 8.36739 3.94732 8.24021 3.85355 8.14645C3.75979 8.05268 3.63261 8 3.5 8ZM16.5 8C16.3674 8 16.2402 8.05268 16.1464 8.14645C16.0527 8.24021 16 8.36739 16 8.5C16 8.63261 16.0527 8.75979 16.1464 8.85355C16.2402 8.94732 16.3674 9 16.5 9C16.6326 9 16.7598 8.94732 16.8536 8.85355C16.9473 8.75979 17 8.63261 17 8.5C17 8.36739 16.9473 8.24021 16.8536 8.14645C16.7598 8.05268 16.6326 8 16.5 8ZM10 0C11.0609 0 12.0783 0.421427 12.8284 1.17157C13.5786 1.92172 14 2.93913 14 4C14 5.06087 13.5786 6.07828 12.8284 6.82843C12.0783 7.57857 11.0609 8 10 8C8.93913 8 7.92172 7.57857 7.17157 6.82843C6.42143 6.07828 6 5.06087 6 4C6 2.93913 6.42143 1.92172 7.17157 1.17157C7.92172 0.421427 8.93913 0 10 0ZM10 2C9.46957 2 8.96086 2.21071 8.58579 2.58579C8.21071 2.96086 8 3.46957 8 4C8 4.53043 8.21071 5.03914 8.58579 5.41421C8.96086 5.78929 9.46957 6 10 6C10.5304 6 11.0391 5.78929 11.4142 5.41421C11.7893 5.03914 12 4.53043 12 4C12 3.46957 11.7893 2.96086 11.4142 2.58579C11.0391 2.21071 10.5304 2 10 2Z"
                        fill="var(--color-2)"
                      />
                    </svg>
                  </div>
                  <select className="select_option" name="persons" id="persons">
                    <option value="1person">1 Pessoa</option>
                    <option value="2person">2 Pessoas</option>
                    <option value="3person">4 Pessoas</option>
                    <option value="4person">6 Pessoas</option>
                    <option value="5person">8 Pessoas</option>
                    <option value="6person">10 Pessoas</option>
                  </select>
                </div>
              </div>

              <div className="col-12 col-lg-6 col-md-12">
                <div className="inner-addon form-input position-relative">
                  <div className="input_ic">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15 2H19C19.2652 2 19.5196 2.10536 19.7071 2.29289C19.8946 2.48043 20 2.73478 20 3V19C20 19.2652 19.8946 19.5196 19.7071 19.7071C19.5196 19.8946 19.2652 20 19 20H1C0.734784 20 0.48043 19.8946 0.292893 19.7071C0.105357 19.5196 0 19.2652 0 19V3C0 2.73478 0.105357 2.48043 0.292893 2.29289C0.48043 2.10536 0.734784 2 1 2H5V0H7V2H13V0H15V2ZM13 4H7V6H5V4H2V8H18V4H15V6H13V4ZM18 10H2V18H18V10Z"
                        fill="var(--color-2)"
                      />
                    </svg>
                  </div>
                  <input type="date" className="form-control" name="date" />
                </div>
              </div>

              <div className="col-12 col-lg-6 col-md-12">
                <div className="inner-addon form-input position-relative">
                  <div className="input_ic">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20ZM10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18ZM11 10H15V12H9V5H11V10Z"
                        fill="var(--color-2)"
                      />
                    </svg>
                  </div>
                  <select className="select_option" name="date" id="date">
                    <option value="9am">9:00 AM</option>
                    <option value="10am">10:00 AM</option>
                    <option value="11am">11:00 AM</option>
                    <option value="12am">12:00 AM</option>
                    <option value="1Pm">1:00 PM</option>
                    <option value="2pm">2:00 PM</option>
                    <option value="3pm">3:00 PM</option>
                    <option value="4pm">4:00 PM</option>
                    <option value="5pm">5:00 PM</option>
                    <option value="6pm">6:00 PM</option>
                    <option value="7pm">7:00 PM</option>
                    <option value="8pm">8:00 PM</option>
                    <option value="9pm">9:00 PM</option>
                    <option value="1pPm">10:00 PM</option>
                    <option value="11pm">11:00 PM</option>
                    <option value="12pm">12:00 PM</option>
                  </select>
                </div>
              </div>

              <div className="text_area position-relative">
                <textarea
                  className="form-control"
                  placeholder="Alguma Observação em Especial?"
                ></textarea>
              </div>
            </div>

            <div className="foholic_button">
              <button type="submit" className="button-light">
                Reservar Agora
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReservationSection;
