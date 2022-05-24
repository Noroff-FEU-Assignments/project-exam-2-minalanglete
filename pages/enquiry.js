import Head from "../components/layout/Head";
import Heading from "../components/layout/Heading";
import Layout from "../components/layout/Layout";
import EnquiryForm from "../components/layout/EnquiryForm";

export default function Home() {
  return (
    <Layout>
      <Head />

      <div className="container">
        <Heading title="send Enquiry to a hotel" />
        <hr className="enquiryhr" />
        <EnquiryForm />
      </div>
    </Layout>
  );
}
