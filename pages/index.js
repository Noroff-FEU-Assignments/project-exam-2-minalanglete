import Head from "../components/layout/Head";
import Layout from "../components/layout/Layout";
import Footer from "../components/layout/Footer";
import Heading from "../components/layout/Heading";

export default function Home() {
  return (
    <Layout>
      <Head />

      <div className="container">
        <Heading title="Home" />
      </div>
      <Footer />
    </Layout>
  );
}
