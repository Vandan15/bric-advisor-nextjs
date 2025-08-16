"use client";
import {
  ChartScatterIcon,
  FileIcon,
  FileTextIcon,
  GaugeIcon,
  MagnifyingGlassIcon,
  ShoppingBagOpenIcon,
  SignInIcon,
  UserIcon,
} from "@phosphor-icons/react";

export default function Service() {
  return (
    <>
      <div
        className="service-area section-padding2 position-relative bg5"
        id="services"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <div className="heading text-center">
                <small data-aos="fade-up" data-aos-duration={400}>
                  See Our Services
                </small>
                <h2 data-aos="fade-up" data-aos-duration={800}>
                  We offer wide range{" "}
                  <span className="heilight-right heading-underline">
                    of services
                  </span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration={400}
            >
              <div className="single-service">
                <div className="service-icon">
                  <MagnifyingGlassIcon size={32} color="#4c2e88" />
                </div>
                <div className="service-content">
                  <h3>Brand/Franchise Diagnostics</h3>
                  <p>Audit current readiness and identify gaps</p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration={600}
            >
              <div className="single-service">
                <div className="service-icon">
                  <GaugeIcon size={32} color="#4c2e88" />
                </div>
                <div className="service-content">
                  <h3>Brand/Franchise Strategy</h3>
                  <p>Model structure, territories, ROI projections</p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration={800}
            >
              <div className="single-service">
                <div className="service-icon">
                  <FileTextIcon size={32} color="#4c2e88" />
                </div>
                <div className="service-content">
                  <h3>Brand/Franchise Materials</h3>
                  <p>
                    Franchise Agreements, Disclosure Docs, Operations Manuals
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration={1000}
            >
              <div className="single-service">
                <div className="service-icon">
                  <UserIcon size={32} color="#4c2e88" />
                </div>
                <div className="service-content">
                  <h3>Human Resources</h3>
                  <p>
                    When it comes to business, listen to Henry David Thoreau:
                    things usually don’t happen overnight.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration={1200}
            >
              <div className="single-service">
                <div className="service-icon">
                  <FileIcon size={32} color="#4c2e88" />
                </div>
                <div className="service-content">
                  <h3>Legal & Compliance</h3>
                  <p>End-to-end regulatory filings and risk minimization</p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration={1400}
            >
              <div className="single-service">
                <div className="service-icon">
                  <ShoppingBagOpenIcon size={32} color="#4c2e88" />
                </div>
                <div className="service-content">
                  <h3>Branding/Marketing</h3>
                  <p>Go-to-market campaigns, prospect screening</p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration={1400}
            >
              <div className="single-service">
                <div className="service-icon">
                  <SignInIcon size={32} color="#4c2e88" />
                </div>
                <div className="service-content">
                  <h3>Partner Onboarding</h3>
                  <p>Training, SOPs, and support for new franchisees</p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration={1400}
            >
              <div className="single-service">
                <div className="service-icon">
                  <ChartScatterIcon size={32} color="#4c2e88" />
                </div>
                <div className="service-content">
                  <h3>Performance Tracking</h3>
                  <p>Sales, operations, and brand consistency audits</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src="/assets/img/shapes/service1.png"
          alt=""
          className="service-shape1"
        />
      </div>
    </>
  );
}
