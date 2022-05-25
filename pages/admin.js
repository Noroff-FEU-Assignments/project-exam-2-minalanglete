import Head from "next/head";
import Layout from "../components/layout/Layout";
import Footer from "../components/layout/Footer";
import AdminForm from "../components/layout/AdminForm";

export default function Home() {
  return (
    <Layout>
      <Head />

      <h1>admin</h1>
      <div className="containeradmin">
        <h2>Message from contactform</h2>
        <hr />
        <h2>Enquiry</h2>
        <hr />
      </div>
      <AdminForm />
      <Footer />
    </Layout>
  );
}
