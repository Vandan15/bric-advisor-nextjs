import Layout from "@/components/layout/Layout";

import About3 from "@/components/homepages/home1/Abou3";
import About from "@/components/homepages/home1/About";
import About2 from "@/components/homepages/home1/About2";
import ContactUsForm from "@/components/homepages/home1/ContactUsForm";
import TaxBusiness from "@/components/homepages/home1/TaxBusiness";
import Welcome from "@/components/homepages/home1/Welcome";
import Team from "@/components/homepages/home2/Team";
import Works from "@/components/homepages/home2/Works";
import Logo from "@/components/homepages/home3/Logo";
import Service from "@/components/homepages/home4/Service";

export default function Page() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <Welcome />
        <About />
        <Service />
        <Works />
        <About2 />
        <About3 />
        <Logo />
        <TaxBusiness />
        <Team />
        <ContactUsForm />

        {/* <CaseStudy /> */}
        {/* <Pricing /> */}
        {/* <Testimonial /> */}
        {/* <Blog /> */}
        {/* <Subscribe /> */}
      </Layout>
    </>
  );
}
