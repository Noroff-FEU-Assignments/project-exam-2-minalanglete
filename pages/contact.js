import Head from "../components/layout/Head";
import Heading from "../components/layout/Heading";
import Layout from "../components/layout/Layout";
import ContactForm from "../components/layout/ContactForm";

export default function Home() {
  return (
    <Layout>
      <Head />

      <div className="container">
        <Heading title="How to reach us" />
        <p>
          Holidaze AS Bryggegata 12 3000 Bergen Norway Email: contact@holidaze.no Phone: 900 00 000
        </p>
        <ContactForm />
      </div>
    </Layout>
  );
}
