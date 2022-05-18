import Head from "next/head";
import Layout from "../components/layout/Layout";

export default function Home() {
  return (
    <Layout>
      <Head />

      <div className="container">
        <h1>Hotels</h1>
      </div>
    </Layout>
  );
}
