import Head from "next/head";
import Layout from "../components/layout/Layout";
import Footer from "../components/layout/Footer";
import AdminForm from "../components/layout/AdminForm";
import axios from "axios";
import { BASE_URL } from "../components/constants/api";

export default function Admin(props) {
  return (
    <Layout>
      <Head />

      <h1>admin</h1>
      <div className="containeradmin">
        <h2>Message from contactform</h2>
        <hr />
        <h2>Enquiry</h2>
        <hr />
        <h2>Hotels added</h2>
        <hr />
        <div className="addedhotels">
          {props.hotels.map((hotel) => {
            return (
              <div>
                <h2>{hotel.attributes.name}</h2>
                <p>{hotel.attributes.address}</p>
              </div>
            );
          })}
        </div>
      </div>
      <AdminForm />
      <Footer />
    </Layout>
  );
}
export async function getStaticProps() {
  let hotels = [];

  try {
    const response = await axios.get(BASE_URL);
    console.log(response.data);
    hotels = response.data.data;
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      hotels: hotels,
    },
  };
}
