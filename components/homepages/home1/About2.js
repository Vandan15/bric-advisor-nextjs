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
      <div className="about-area section-padding">
        <div className="container">
          <div className="heading2">
            <h2
              className="text-center mb-0"
              data-aos="fade-right"
              data-aos-duration={800}
            >
              Results That Speak
            </h2>
            {/* <p className="text-center">need content here</p> */}
          </div>
          <div className="counter2">
            <div className="row">
              <div className="col-md-6">
                <div
                  className="single-counter"
                  data-aos="zoom-out"
                  data-aos-duration={600}
                >
                  <div className="conter-icon">
                    <UsersIcon size={32} color="#8365BF" />
                  </div>
                  <div className="d-flex flex-column align-items-start">
                    <h2>
                      <CounterUp count={40} />+
                    </h2>
                    <p>Clients Served</p>
                  </div>
                </div>
                <div
                  className="single-counter"
                  data-aos="zoom-out"
                  data-aos-duration={800}
                >
                  <div className="conter-icon">
                    <ChartLineUpIcon size={32} color="#8365BF" />
                  </div>
                  <div className="d-flex flex-column align-items-start">
                    <h2>20–50% YoY increase post-engagement</h2>
                    <p>Revenue Uplift</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div
                  className="single-counter"
                  data-aos="zoom-out"
                  data-aos-duration={1000}
                >
                  <div className="conter-icon">
                    <FileTextIcon size={32} color="#8365BF" />
                  </div>
                  <div className="d-flex flex-column align-items-start">
                    <h2>200 Crores+</h2>
                    <p>Turnover Guided</p>
                  </div>
                </div>
                <div
                  className="single-counter"
                  data-aos="zoom-out"
                  data-aos-duration={1200}
                >
                  <div className="conter-icon">
                    <GlobeIcon size={32} color="#8365BF" />
                  </div>
                  <div className="d-flex flex-column align-items-start">
                    <h2>Textiles, Diamonds, FMCG, Pharma, Retail & more</h2>
                    <p>Industry Reach</p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="corner-right-bottom-shape2 position-absolute">
                  <img
                    src="/assets/img/shapes/shape-right-bottom2.png"
                    alt=""
                  />
                </div> */}
            {/* <div className="corner-shape2-left position-absolute">
                  <img src="/assets/img/shapes/tax-shape2.png" alt="" />
                </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
