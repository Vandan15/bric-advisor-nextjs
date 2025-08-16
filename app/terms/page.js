import { TermsArea } from "@/components/common/TermsArea";
import ContactUsForm from "@/components/homepages/home1/ContactUsForm";
import Layout from "@/components/layout/Layout";

export const metadata = {
  title: "Terms and Conditions - Bric Advisor",
  description:
    "Our terms and conditions outline the rules and regulations for using our website.",
};

const index = () => {
  return (
    <Layout headerStyle={1} footerStyle={1}>
      <TermsArea />
      <ContactUsForm />
    </Layout>
  );
};

export default index;
