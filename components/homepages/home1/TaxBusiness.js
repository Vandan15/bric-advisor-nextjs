export default function TaxBusiness() {
  return (
    <>
      <div className="tax-business section-padding2 bg6" id="core-services">
        <div className="container">
          <div className="row">
            <div className="col-md-4 m-auto">
              <div className="heading2 white-heading text-center">
                {/* <small
                  data-aos="fade-up"
                  data-aos-duration={600}
                  className="heading-top"
                >
                  <img src="/assets/img/icons/hands.svg" alt="" />
                  We Are Here For Your Tax Relief.
                </small> */}
                <h2 data-aos="fade-up" data-aos-duration={800}>
                  <span className="heilight-left">Business Consulting</span> &
                  Full-Service Solutions
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-6"
              data-aos="fade-up"
              data-aos-duration={600}
            >
              <div className="single-business trans-1">
                <div className="business-icon">
                  <img src="/assets/img/icons/tax-business1.png" alt="" />
                </div>
                <h3>Business Development</h3>
                <p>
                  Market research, channel strategies, sales process mapping.
                </p>
              </div>
            </div>
            <div
              className="col-md-6"
              data-aos="fade-up"
              data-aos-duration={800}
            >
              <div className="single-business trans-1">
                <div className="business-icon">
                  <img src="/assets/img/icons/tax-business2.png" alt="" />
                </div>
                <h3>Brand & Marketing</h3>
                <p>
                  Revamp brand identity, digital presence, and lead generation.
                </p>
                {/* <Link href="#" className="theme-btn-7">
                  Learn More{" "}
                  <span>
                    <i className="fa-solid fa-arrow-right" />
                  </span>
                </Link> */}
              </div>
            </div>

            <div
              className="col-md-6"
              data-aos="fade-up"
              data-aos-duration={1200}
            >
              <div className="single-business trans-1">
                <div className="business-icon">
                  <img src="/assets/img/icons/tax-business4.png" alt="" />
                </div>
                <h3>Talent & Training</h3>
                <p>Recruitment, onboarding, and capability building.</p>
                {/* <Link href="#" className="theme-btn-7">
                  Learn More{" "}
                  <span>
                    <i className="fa-solid fa-arrow-right" />
                  </span>
                </Link> */}
              </div>
            </div>
            <div
              className="col-md-6"
              data-aos="fade-up"
              data-aos-duration={1200}
            >
              <div className="single-business trans-1">
                <div className="business-icon">
                  <img src="/assets/img/icons/tax-business4.png" alt="" />
                </div>
                <h3>Compliance</h3>
                <p>Contracts, due diligence, legal audits.</p>
              </div>
            </div>
            <div
              className="col-md-6"
              data-aos="fade-up"
              data-aos-duration={1000}
            >
              <div className="single-business trans-1">
                <div className="business-icon">
                  <img src="/assets/img/icons/tax-business3.png" alt="" />
                </div>
                <h3>SOPs & Operations</h3>
                <p>Workflow audits, documentation, organization structuring.</p>
                {/* <Link href="#" className="theme-btn-7">
                  Learn More{" "}
                  <span>
                    <i className="fa-solid fa-arrow-right" />
                  </span>
                </Link> */}
              </div>
            </div>
            {/* <div className="space20" />
            <div
              className="col-12 text-center"
              data-aos="fade-up"
              data-aos-duration={1400}
            >
              <Link className="theme-btn-3" href="#">
                Explore More Services{" "}
                <span>
                  <i className="fa-solid fa-arrow-right" />
                </span>
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
