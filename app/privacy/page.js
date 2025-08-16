import { PrivacyArea } from "@/components/common/PrivancyArea";
import ContactUsForm from "@/components/homepages/home1/ContactUsForm";
import Layout from "@/components/layout/Layout";

export const metadata = {
  title: "Privacy Policy - Bric Advisor",
  description:
    "Our privacy policy outlines how we collect, use, and protect your personal information.",
};

const index = () => {
  return (
    <Layout headerStyle={1} footerStyle={1}>
      <PrivacyArea />
      <ContactUsForm />
    </Layout>
  );
};

export default index;
