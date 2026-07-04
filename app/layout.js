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
import Script from "next/script";
export const metadata = {
  title:
    "BRIC Consulting | Franchise & Business Expansion Experts | Full-Service Growth Strategy",
  description:
    "BRIC Consulting helps ambitious brands scale with confidence, specializing in franchising, business expansion, strategic growth, branding, legal, and operational excellence.",
  openGraph: {
    images: "/assets/og/bric-advisor.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" id="#top">
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KHLVQRG5');`}
        </Script>
        {/* End Google Tag Manager */}
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KHLVQRG5"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
      </body>
      {/* <AppVersion /> */}
    </html>
  );
}
