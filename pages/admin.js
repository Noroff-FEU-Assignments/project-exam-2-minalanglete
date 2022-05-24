import Head from "next/head";
import Layout from "../components/layout/Layout";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <Layout>
      <Head />

      <div className="container">
        <h1>admin</h1>
      </div>
      <Footer />
    </Layout>
  );
}
