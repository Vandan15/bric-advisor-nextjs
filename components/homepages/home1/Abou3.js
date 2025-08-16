"use client";
import { CheckCircleIcon } from "@phosphor-icons/react";

export default function About3() {
  return (
    <>
      <div className="about-area section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="heading2 no-margin-heading ml50">
                <small
                  data-aos="fade-left"
                  data-aos-duration={600}
                  className="heading-top"
                >
                  <img src="/assets/img/icons/hands.svg" alt="" />
                  “If you’re ready to build a network, not just open a store,
                  our door is open.”
                </small>
                <h2 data-aos="fade-left" data-aos-duration={800}>
                  Who Should Call Us?
                </h2>
                {/* <p data-aos="fade-left" data-aos-duration={1000}>
                  You’ve built a business that works. Now let’s replicate your
                  winning formula across new markets. BRIC is Surat’s trusted
                  partner for franchising and scale. We bring together strategy,
                  process, branding and legal expertise to simplify the complex
                  so you can expand with confidence.
                </p> */}
                {/* <p data-aos="fade-left" data-aos-duration={1000}>
                  The BRIC Edge
                </p> */}
                <div
                  data-aos="fade-left"
                  data-aos-duration={1000}
                  className="mt-2 d-flex flex-column gap-2"
                >
                  <div className="d-flex align-items-center gap-2">
                    <CheckCircleIcon
                      size={32}
                      className="flex-shrink-0"
                      color="#253d31"
                    />
                    <p className="mt-0">
                      Brand-owners with a scalable business model, looking to
                      franchise across Gujarat and India.
                    </p>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <CheckCircleIcon
                      size={32}
                      className="flex-shrink-0"
                      color="#253d31"
                    />
                    <p className="mt-0">
                      Ambitious founders, sick of growth plateaus.
                    </p>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <CheckCircleIcon
                      size={32}
                      className="flex-shrink-0"
                      color="#253d31"
                    />
                    <p className="mt-0">
                      Businesses that want to professionalize, standardize, and
                      multiply their impact.
                    </p>
                  </div>
                </div>
                <div className="space50" />
                {/* <div
                  className="button-group"
                  data-aos="fade-left"
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
            <div className="col-lg-6">
              <div
                className="about-bg-21 mr50"
                data-aos="zoom-out"
                data-aos-duration={800}
              >
                <div className="about-bg-main-img position-relative">
                  <img
                    src="/assets/img/about/who-should-call-us.jpg"
                    alt="who-should-call-us"
                    className="call-img"
                  />
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
