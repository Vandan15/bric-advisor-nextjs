import Link from "next/link";
import Menu from "../Menu";

export default function Header1({ scroll, isMobileMenu, handleMobileMenu }) {
  return (
    <>
      <header
        id="header"
        className={`header header-2 header-absolute d-none d-lg-block ${
          scroll ? "sticky" : ""
        }`}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="header-elements">
                <div className="header_menu_area">
                  <div className="logo">
                    <Link href="/#home">
                      <img src="/assets/img/logo/site-logo-3.svg" alt="" />
                    </Link>
                  </div>
                  <div className="main-menu">
                    <div className="menu-wrap">
                      <Menu />
                    </div>
                  </div>
                </div>
                <div className="desktop-info">
                  <Link className="theme-btn-2" href="/#contact">
                    Get A Free Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
