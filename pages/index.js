import Head from "../components/layout/Head";
import Layout from "../components/layout/Layout";
import Footer from "../components/layout/Footer";
import Heading from "../components/layout/Heading";
import axios from "axios";
import { BASE_URL } from "../components/constants/api";

export default function Home(props) {
  console.log(props);

  return (
    <Layout>
      <Head />

      <div className="container">
        <Heading title="Home" />
        {props.hotels.map((hotel) => {
          return (
            <a key={hotel.id} href={`hotel/${hotel.id}`}>
              <h2>{hotel.attributes.name}</h2>
              <p>{hotel.attributes.address}</p>
              <p>{hotel.attributes.description}</p>
              <p>{hotel.attributes.price} NOK</p>
              <p>number of beds: {hotel.attributes.bed}</p>
              <p>wifi at the hotel: {hotel.attributes.wifi}</p>
              <p>Parking at the hotel: {hotel.attributes.parking}</p>
              <p>Breakfast included: {hotel.attributes.breakfast}</p>
              <img src={hotel.attributes.img} />
            </a>
          );
        })}
      </div>
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
