import Head from "next/head";
import Layout from "../components/layout/Layout";
import Footer from "../components/layout/Footer";
import LoginForm from "../components/layout/LoginForm";
//import LoginForm from "../components/constants/Login";

export default function Home() {
  return (
    <Layout>
      <Head />

      <div className="container">
        <h1>Login</h1>
      </div>
      <LoginForm />

      <Footer />
    </Layout>
  );
}
