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
      <div className="header">
        <div className="containersearch">
          <div className="slogan">
            <Heading title="Holidaze" />
            <p className="slogantitle">- your local tourism agency</p>
          </div>
          <p className="slogantext">
            This is the place to find hotels, B&Bs and guesthouses in Bergen city. Make a search and
            find you next stay.
          </p>
          <input
            type="text"
            placeholder="Search for places in Bergen"
            className="searchbar"
          ></input>
        </div>
        <img src="/header.jpg" alt="heder image of Floyen i Bergen" />
      </div>
      {props.hotels.map((hotel) => {
        return (
          <a key={hotel.id} href={`hotel/${hotel.id}`}>
            <img src="/bed.jpg" alt="hotelroom bed" className="indexhotelimg" />
            <h2>{hotel.attributes.name}</h2>
            <p>{hotel.attributes.address}</p>
            <p>{hotel.attributes.price} NOK</p>
          </a>
        );
      })}

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
