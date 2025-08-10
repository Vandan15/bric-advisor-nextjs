import { EnvelopeIcon, PhoneIcon } from "@phosphor-icons/react";
import Link from "next/link";
export default function Footer1() {
  return (
    <>
      <footer className="footer-area padding-top footer-2 bg9">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-6 mb-4">
              <div className="single-footer">
                <Link href="/" className="footer-logo">
                  {" "}
                  <img src="/assets/img/logo/site-logo-3.svg" alt="" />
                </Link>
                <div className="space20" />
                <p>
                  Fueling the ambitions of India’s most enterprising brands. We
                  turn proven business models into scalable, profitable
                  franchise networks, building revenue engines.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-2 mb-4">
              <div className="single-footer">
                <h3>Services</h3>
                <div className="footer-menu">
                  <ul>
                    <li>
                      <Link href="/#core-services">Business Development</Link>
                    </li>
                    <li>
                      <Link href="/#core-services">Brand & Marketing</Link>
                    </li>
                    <li>
                      <Link href="/#core-services">Talent & Training</Link>
                    </li>
                    <li>
                      <Link href="/#core-services">Compliance</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-2">
              <div className="single-footer">
                <h3>Our Company</h3>
                <div className="footer-menu">
                  <ul>
                    <li>
                      <Link href="#about-us">About us</Link>
                    </li>
                    <li>
                      <Link href="/#teams">Our Team</Link>
                    </li>
                    <li>
                      <Link href="/policy">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link href="/terms">Terms & Conditions</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-2">
              <div className="single-footer">
                <h3>Get in touch</h3>
                <div className="footer-contact">
                  <div className="single-contact">
                    <div className="single-contact">
                      <PhoneIcon />
                      <Link href="tel:+91 9999999999" className="mb-0">
                        +91 9999999999
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="footer-contact">
                  <div className="single-contact">
                    <EnvelopeIcon />
                    <Link href="mailto:bricadvisors@gmail.com" className="mb-0">
                      bricadvisors@gmail.com
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center copyright2">
            <div className="col-lg-6">
              <p>
                © {new Date().getFullYear()} BRIC Consulting | Crafting
                legacies, scaling performance, and protecting your brand - one
                intelligent move at a time.
              </p>
              {/* <div className="d-flex gap-2">
                <Link href="/privacy-policy" className="link">
                  Privacy Policy
                </Link>
                |
                <Link href="/terms-conditions" className="link">
                  Terms & Conditions
                </Link>
              </div> */}
            </div>
            <div className="col-lg-6 text-right">
              <div className="social social2">
                <ul>
                  <li>
                    <Link data-bs-toggle="tooltip" title="Linked in" href="#">
                      <i className="fa-brands fa-linkedin-in" />
                    </Link>
                  </li>
                  <li>
                    <Link data-bs-toggle="tooltip" title="Facebook" href="#">
                      <i className="fa-brands fa-facebook-f" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      data-bs-toggle="tooltip"
                      title="Instagram"
                      href="https://www.instagram.com/bric.india/"
                      target="_blank"
                    >
                      <i className="fa-brands fa-instagram" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
