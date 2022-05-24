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
        <div className="adress">
          <p>Holidaze AS</p> <p>Bryggegata 12</p> <p>3000 Bergen</p> <p>Norway</p>
        </div>
        <div className="email">
          <p>Email:</p> <p>contact@holidaze.no</p> <p>Phone: 900 00 000</p>
        </div>
        <img src="/map.svg" alt="map Bergen" className="map" />
        <ContactForm />
      </div>
    </Layout>
  );
}
