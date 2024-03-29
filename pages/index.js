import Head from "../components/layout/Head";
import Layout from "../components/layout/Layout";
import Footer from "../components/layout/Footer";
import Heading from "../components/layout/Heading";
import axios from "axios";
import { BASE_URL } from "../components/constants/api";
//import Search from "../components/layout/Search";

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
        <img src="/header.jpg" alt="heder image of Floyen i Bergen " className="headerimg" />
      </div>

      <p className="populartitle">Popular places to stay in Bergen</p>
      <div className="containerpopular">
        {props.hotels.map((hotel) => {
          const address = hotel.short_description;
          return (
            <a key={hotel.id} href={`hotel/${hotel.id}`}>
              <div className="popularhotel">
                <img
                  src={hotel.images[0].src}
                  alt={hotel.images[0].alt}
                  className="indexhotelimg"
                />
                <h2>{hotel.name}</h2>
                <hr />
                <p>{address.replace(/(<([^>]+)>)/gi, "")}</p>
                <p className="price">{hotel.prices.price} pr night</p>
              </div>
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
    hotels = response.data;
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      hotels: hotels,
    },
  };
}
