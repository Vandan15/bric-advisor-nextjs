import "public/assets/css/plugins/bootstrap.min.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import "public/assets/css/plugins/owl.carousel.min.css"
import "public/assets/css/h4-master.css";
import "public/assets/css/master.css";
import "public/assets/css/plugins/aos.css";
import "public/assets/css/plugins/fontawesome.css";
import "public/assets/css/plugins/fonts.css";
import "public/assets/css/plugins/nice-select.css";
import "public/assets/css/plugins/slick-slider.css";
export const metadata = {
  title:
    "BRIC Consulting | Franchise & Business Expansion Experts | Full-Service Growth Strategy",
  description:
    "BRIC Consulting helps ambitious brands scale with confidence, specializing in franchising, business expansion, strategic growth, branding, legal, and operational excellence.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" id="#top">
      <body>{children}</body>
      {/* <AppVersion /> */}
    </html>
  );
}
