"use client";
import CounterUp from "@/components/elements/CounterUp";
import {
  ChartLineUpIcon,
  FileTextIcon,
  GlobeIcon,
  UsersIcon,
} from "@phosphor-icons/react";

export default function About2() {
  return (
    <>
      <div className="about-area section-padding bg5">
        <div className="container">
          {/* <div className="heading2">
            <h2
              className="text-center mb-0"
              data-aos="fade-right"
              data-aos-duration={800}
            >
              Results That Speak
            </h2>
          </div> */}
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="mr50">
                <div className="heading2 no-margin-heading">
                  {/* <small
                    data-aos="fade-right"
                    data-aos-duration={600}
                    className="heading-top"
                  >
                    <img src="/assets/img/icons/hands.svg" alt="" />
                    We Are Here For Your Tax Relief.
                  </small> */}
                  <h2 data-aos="fade-right" data-aos-duration={800}>
                    Results That Speak
                  </h2>
                  <p data-aos="fade-right" data-aos-duration={1000}>
                    need content here
                  </p>
                  <div className="space50" />
                  {/* <div
                    className="button-group"
                    data-aos="fade-right"
                    data-aos-duration={1200}
                  >
                    <Link className="theme-btn-2" href="#">
                      More About Us{" "}
                      <span>
                        <i className="fa-solid fa-arrow-right" />
                      </span>
                    </Link>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="counter2 ml50 position-relative">
                <div className="row">
                  <div className="col-md-6">
                    <div
                      className="single-counter"
                      data-aos="zoom-out"
                      data-aos-duration={600}
                    >
                      <div className="conter-icon">
                        <UsersIcon size={32} color="#fba01b" />
                      </div>
                      <h2>
                        <CounterUp count={40} />+
                      </h2>
                      <p>Clients Served</p>
                    </div>
                    <div
                      className="single-counter"
                      data-aos="zoom-out"
                      data-aos-duration={800}
                    >
                      <div className="conter-icon">
                        <ChartLineUpIcon size={32} color="#fba01b" />
                      </div>
                      <h2>20–50% YoY increase post-engagement</h2>
                      <p>Revenue Uplift</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div
                      className="single-counter mt-5"
                      data-aos="zoom-out"
                      data-aos-duration={1000}
                    >
                      <div className="conter-icon">
                        <FileTextIcon size={32} color="#fba01b" />
                      </div>
                      <h2>200 Crores+</h2>
                      <p>Turnover Guided</p>
                    </div>
                    <div
                      className="single-counter"
                      data-aos="zoom-out"
                      data-aos-duration={1200}
                    >
                      <div className="conter-icon">
                        <GlobeIcon size={32} color="#fba01b" />
                      </div>
                      <h2>Textiles, Diamonds, FMCG, Pharma, Retail & more</h2>
                      <p>Industry Reach</p>
                    </div>
                  </div>
                </div>
                <div className="corner-right-bottom-shape2 position-absolute">
                  <img
                    src="/assets/img/shapes/shape-right-bottom2.png"
                    alt=""
                  />
                </div>
                {/* <div className="corner-shape2-left position-absolute">
                  <img src="/assets/img/shapes/tax-shape2.png" alt="" />
                </div> */}
              </div>
            </div>
            {/* <div className="col-lg-6 d-lg-none">
              <div className="mr50">
                <div className="heading2 no-margin-heading">
                  <small className="heading-top">
                    <img src="/assets/img/icons/hands.svg" alt="" />
                    We Are Here For Your Tax Relief.
                  </small>
                  <h2>
                    We Handle The Most Tedious Bookkeeping Tasks of Your
                    Business Operations.
                  </h2>
                  <p>
                    Experienced, knowledgeable professionals in Property Tax
                    Consulting. Our team of Property Tax Consultants is
                    committed to saving you money by obtaining the lowest
                    possible assessed value for your commercial or residential
                    properties.
                  </p>
                  <div className="space50" />
                  <Link className="theme-btn-2" href="#">
                    More About Us{" "}
                    <span>
                      <i className="fa-solid fa-arrow-right" />
                    </span>
                  </Link>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
